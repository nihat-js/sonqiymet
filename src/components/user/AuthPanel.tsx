'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, User, Lock, Mail, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function AuthPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  const togglePanel = () => setIsOpen(!isOpen)
  const toggleMode = () => setIsLogin(!isLogin)

  return (
    <>
      <Button onClick={togglePanel} variant="outline" className="fixed top-4 right-4 z-50">
        {isOpen ? <X /> : <User />}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 w-full sm:w-96 bg-gradient-to-br from-blue-500 to-purple-600 p-8 shadow-2xl z-40 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mt-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                {isLogin ? 'Welcome Back!' : 'Join TelefonTap'}
              </h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                {!isLogin && (
                  <div>
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input id="name" type="text" placeholder="Your Name" className="mt-1" />
                  </div>
                )}
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                </div>
                {!isLogin && (
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1234567890" className="mt-1" />
                  </div>
                )}
                <div>
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" className="mt-1" />
                </div>
                <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                  {isLogin ? 'Log In' : 'Sign Up'}
                </Button>
              </form>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-white">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-white">Sign Up</span>
                  <Switch checked={!isLogin} onCheckedChange={toggleMode} />
                  <span className="text-sm font-medium text-white">Log In</span>
                </div>
              </div>
            </motion.div>
            <div className="mt-8 text-center">
              <p className="text-white text-opacity-80">Or continue with</p>
              <div className="mt-4 flex justify-center space-x-4">
                <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                  Google
                </Button>
                <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                  Facebook
                </Button>
                <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                  Apple
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}