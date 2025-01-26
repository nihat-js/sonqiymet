import { useState } from 'react';
import { X, Mail, Lock, ArrowRight, Github, User } from 'lucide-react';
import Image from 'next/image';
import styled from 'styled-components';
import useAuthStore from '@/stores/authStore';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 90%;
  max-width: 400px;
  position: relative;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: .6rem 37px;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--mandarin);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s;
  
  &.primary {
    background: var(--mandarin);
    color: white;
    &:hover {
      background: var(--mandarin2);
    }
  }
  
  &.secondary {
    background: white;
    border: 1px solid #e2e8f0;
    &:hover {
      background: #f8fafc;
    }
  }
`;

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register' | 'forgot-password';
}

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register' | 'forgot-password'>(initialMode);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { login, register } = useAuthStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    setError(null);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (mode === 'login') {
      const result = await login(form.email, form.password);
      if (!result.error) {
        onClose();
      } else {
        setError(result.message);
      }
    } else if (mode === 'register') {
      if (form.password !== form.confirmPassword) {
        setError("Şifrələr uyğun gəlmir");
        return;
      }
      const result = await register(form.name, form.email, form.password);
      if (!result.error) {
        onClose();
      } else {
        setError(result.message);
      }
    }
  }

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log('Google login clicked');
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement password reset logic here
    setEmailSent(true);
  };

  if (emailSent) {
    return (
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center py-8">
            <h2 className="text-2xl font-bold mb-4">E-poçt göndərildi!</h2>
            <p className="text-gray-600 mb-6">
              Şifrəni sıfırlamaq üçün təlimatları e-poçt ünvanınıza göndərdik.
            </p>
            <Button 
              className="primary"
              onClick={() => {
                setEmailSent(false);
                setMode('login');
              }}
            >
              Geri qayıt
            </Button>
          </div>
        </ModalContent>
      </ModalOverlay>
    );
  }

  if (!isOpen){
    return <div></div>
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold mb-2">
            {mode === 'login' ? 'Xoş gəlmisiniz!' : 
             mode === 'register' ? 'Qeydiyyatdan keçin' : 
             'Şifrəni bərpa et'}
          </h2>
          <p className="text-gray-600">
            {mode === 'login' ? 'Hesabınıza daxil olun' :
             mode === 'register' ? 'Yeni hesab yaradın' :
             'E-poçt ünvanınızı daxil edin'}
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && (
            <div className="text-red-500 text-sm text-center mb-4">
              {error}
            </div>
          )}

          {mode === 'register' && (
            <div>
              <div className="relative">
                <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  placeholder="Ad və Soyad"
                  className="pl-10"
                />
              </div>
            </div>
          )}

          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                placeholder="E-poçt"
                className="pl-10"
              />
            </div>
          </div>

          {mode !== 'forgot-password' && (
            <>
              <div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    placeholder="Şifrəniz"
                    className="pl-10"
                  />
                </div>
              </div>
              
              {mode === 'register' && (
                <div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      type="password"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Şifrəni təsdiqləyin"
                      className="pl-10"
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <Button className="primary">
            {mode === 'login' ? 'Daxil ol' : 
             mode === 'register' ? 'Qeydiyyatdan keç' :
             'Şifrəni sıfırla'}
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </Button>

          {mode === 'login' && (
            <div className="text-center">
              <button
                type="button"
                className="text-sm text-mandarin hover:text-mandarin2"
                onClick={() => setMode('forgot-password')}
              >
                Şifrəni unutmusunuz?
              </button>
            </div>
          )}

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">və ya</span>
            </div>
          </div>

          <Button
            type="button"
            className="secondary flex items-center justify-center gap-2"
            onClick={handleGoogleLogin}
          >
            <Image
              src="/google.svg"
              alt="Google"
              width={20}
              height={20}
            />
            Google ilə davam et
          </Button>

          <div className="text-center mt-4">
            {mode === 'forgot-password' ? (
              <button
                type="button"
                className="text-mandarin hover:text-mandarin2"
                onClick={() => setMode('login')}
              >
                Geri qayıt
              </button>
            ) : (
              <button
                type="button"
                className="text-mandarin hover:text-mandarin2"
                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              >
                {mode === 'login'
                  ? 'Hesabınız yoxdur? Qeydiyyatdan keçin'
                  : 'Hesabınız var? Daxil olun'}
              </button>
            )}
          </div>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
} 