import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side - Logo */}
        <div className="hidden lg:flex lg:w-1/2 bg-[#F5F5F7] items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl xl:text-8xl font-bold text-[#2D2D4A]">
              Potencializa<span className="text-[#FF0066]">.</span>ai
            </h1>
          </motion.div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white px-6 py-12 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-md"
          >
            {/* Logo and Title */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-[#2D2D4A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-white">P</span>
                <span className="text-[#FF0066] text-xl">.</span>
              </div>
              <h2 className="text-2xl font-semibold text-[#2D2D4A]">Sign In</h2>
            </div>

            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <h1 className="text-4xl font-bold text-[#2D2D4A]">
                Potencializa<span className="text-[#FF0066]">.</span>ai
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-gray-300 focus:border-[#FF0066] focus:ring-[#FF0066]"
                  required
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 border-gray-300 focus:border-[#FF0066] focus:ring-[#FF0066]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 cursor-pointer"
                >
                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-[#FF0066] hover:bg-[#E6005C] text-white font-medium"
              >
                Login
              </Button>
            </form>

            {/* Links */}
            <div className="mt-6 flex justify-between text-sm">
              <a
                href="#"
                className="text-[#FF0066] hover:underline"
              >
                Forgot your password?
              </a>
              <Link
                to="/signup"
                className="text-[#FF0066] hover:underline"
              >
                Create an account!
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#FF0066] text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <p>Copyright © Potencializa.ai 2026</p>
          <div className="flex items-center gap-2">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

