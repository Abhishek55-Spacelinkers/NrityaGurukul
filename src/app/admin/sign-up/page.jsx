"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useFirebase } from "@/context/firebase";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const { signupWithEmail } = useFirebase();
  const router = useRouter();

  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signupWithEmail(email, password);
      const user = userCredential.user;
      toast({ title: "Added Successful", description: "New Admin Successfully Added." });
      
      setEmail("");
      setPassword("");
      setFullName("");
    } catch (err) {
      // console.error("Signup error:", err);
      toast({
        variant: "destructive",
        title: "Failed",
        description: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-[92vh] flex items-center justify-center px-4 py-3">
        <div className="w-full max-w-lg text-center">
          <div className="mb-1">
            <img
              src="/assets/logo.png"
              alt=""
              className="w-[100px] h-auto mx-auto"
            />
          </div>

          <h1 className="text-3xl font-semibold mb-6">
            Sign up as a <span className={"text-blue-600"}>User</span>
          </h1>

          <form className="space-y-3" onSubmit={handleEmailSignup}>
            <input
              type="text"
              placeholder="Full name"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (at least 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm pr-10"
                required
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

            <div className="flex justify-center"></div>

            <Button
              type="submit"
              className="group relative w-full"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Create account"
              )}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
