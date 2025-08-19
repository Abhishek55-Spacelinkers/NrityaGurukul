"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFirebase } from "@/context/firebase";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function LoginPage() {
  const router = useRouter();
  const { signinWithEmail, user } = useFirebase();

  useEffect(() => {
    if (user) {
      router.replace("/admin");
    }
  }, [user, router]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [err, setErr] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signinWithEmail(email, password);
      toast({ title: "Login Successful", description: "Welcome back!" });
      router.replace("/admin");
    } catch (error) {
      setErr(true);
      toast({
        variant: "destructive",
        title: "Login Failed",
        description: error.message,
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="min-h-[92vh] flex items-center justify-center px-4 py-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-lg text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="mb-1"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.img
            src="/assets/logo.png"
            alt=""
            className="w-[100px] h-auto mx-auto"
            initial={{ rotate: -10, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
        </motion.div>

        <motion.h1
          className="text-3xl font-semibold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Sign in to your account
        </motion.h1>

        <motion.p
          className="text-sm text-gray-600 mt-1 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Or{" "}
          <Link
            href="/signup"
            className="text-blue-600 font-medium hover:text-blue-500"
          >
            create a new account
          </Link>
        </motion.p>

        <motion.form
          className="space-y-3"
          onSubmit={handleEmailLogin}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErr(false);
            }}
            className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm ${
              err ? "!border-red-700 border-2" : "border-gray-300 "
            }`}
            autoComplete="email"
            required
            whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
          />

          <div className="relative">
            <motion.input
              type={showPassword ? "text" : "password"}
              placeholder="Password (at least 6 characters)"
              value={password}
              minLength={6}
              autoComplete="current-password"
              onChange={(e) => {
                setErr(false);
                setPassword(e.target.value);
              }}
              className={`w-full p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm pr-10 ${
                err ? "!border-red-700 border-2" : "!border-gray-300 "
              }`}
              required
              whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={togglePassword}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <motion.div
            className="text-sm text-right mb-3.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link
              href={`forgot-password`}
              className="text-blue-600 hover:text-blue-500"
            >
              Forgot your password?
            </Link>
          </motion.div>

          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              type="submit"
              className="group relative w-full"
              // disabled={loading || password.length < 6 || !email}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
