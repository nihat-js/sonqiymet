"use client"
import { getIdToken, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import axios from "axios";
export const AuthProvider = ({ children, data }) => {

  const [user, setUser] = useState(data.user);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is authenticated by checking localStorage, cookies, or session
    // const storedUser = localStorage.getItem("user");
    // if (storedUser) {
    //   setUser(JSON.parse(storedUser));
    //   setIsAuthenticated(true);
    // }
  }, []);

  async function signInWithGoogle() {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const idToken = await getIdToken(user);
      const userData = {
        // uid: user.uid,
        // email: user.email,
        // displayName: user.displayName,
        // photoURL: user.photoURL,
        idToken, // We will send the ID token to verify the user's authenticity on the server
      };
      let response = await axios.post('/api/auth/save-user', userData);
      if (response.data.error) {
        setError(response.data.message);
        return false
      }

      setUser(response.data.data);
      setIsLoading(false);
      console.log("bax qaytaracam trueee")
      return true
    } catch (err) {
      console.log("bax qaytaracam falseee")
      setError('Failed to sign in with Google');
      console.error(err);
      return false
    }
  };


  async function login(data) {
    let response = await axios.post("/api/auth/login", data)
    if (!response.data.error) {
      setUser(response.data.data)
      return true
    } else {
      alert(response.data["message"])
      return false
    }
  }
  async function register(data) {
    let response = await axios.post("/api/auth/register", data)
    if (!response.data.error) {
      setUser(response.data.data)
      return true
    } else {
      alert(response.data["message"])
      return false
    }
  }

  async function logout() {
    let response = await axios.post("/api/auth/logout")
    console.log(response)
    if (response.data.error) {
      return alert(response.data["message"])
    }
    setUser(null)
    return true
  }


  return (
    <AuthContext.Provider value={{ user, setUser, register, login, logout, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  );
};



export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
