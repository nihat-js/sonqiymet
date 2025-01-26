import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse {
  error: boolean;
  message: string;
  data?: User;
}

interface AuthStore {
  user: User | null;
  login: (email: string, password: string) => Promise<ApiResponse>;
  register: (name: string, email: string, password: string) => Promise<ApiResponse>;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,

      login: async (email: string, password: string) => {
        try {
          const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
          });

          const result: ApiResponse = await response.json();

          if (!response.ok) {
            return { error: true, message: result.message || 'Giriş zamanı xəta baş verdi' };
          }

          // Set the user from the data property of the response
          if (result.data) {
            set({ user: result.data });
          }

          return result;
        } catch (error) {
          return { error: true, message: 'Serverlə əlaqə zamanı xəta baş verdi' };
        }
      },

      register: async (name: string, email: string, password: string) => {
        try {
          const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
          });

          const result: ApiResponse = await response.json();

          if (!response.ok) {
            return { error: true, message: result.message || 'Qeydiyyat zamanı xəta baş verdi' };
          }

          // Set the user from the data property of the response
          if (result.data) {
            set({ user: result.data });
          }

          return result;
        } catch (error) {
          return { error: true, message: 'Serverlə əlaqə zamanı xəta baş verdi' };
        }
      },

      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: 'auth-storage', // unique name for localStorage
    }
  )
);

export default useAuthStore;
