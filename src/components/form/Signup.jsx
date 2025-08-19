"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Phone, Loader2 } from "lucide-react";
import { useFirebase, auth } from "@/context/firebase";
import { signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Signup = () => {
  const { signupWithEmail, setUsers, EmailVerify, user, setUser } =
    useFirebase();
  const router = useRouter();
  const { toast } = useToast();
  const [signupMethod, setSignupMethod] = useState("phone");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const [cooldown, setCooldown] = useState(0);
  const otpRef = useRef();
  useEffect(() => {
    if (confirmationResult && otpRef.current) {
      otpRef.current.focus();
    }
  }, [confirmationResult]);

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signupWithEmail(email, password);
      const user = userCredential.user;
      await setUsers(
        {
          fullName,
          email: user.email,
          uid: user.uid,
          emailVerified: user.emailVerified,
        },
        userCredential.user,
        "electricians"
      );
      setUser(user);
      await EmailVerify(userCredential.user);
      toast({
        title: "Verification email sent!",
        description: "Please check your email for the verification.",
      });
      router.replace("/electrician/profile");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        toast({
        variant: "destructive",
        title: "Already exist",
        description: "⚠️ This email is already registered.",
      });
      } else {
        toast({
        variant: "destructive",
        title: "Failed to Sign up",
        description: "Trying after some time",
      });
      }
    }
    setLoading(false);
  };

  const setupRecaptcha = () => {
    const container = document.getElementById("recaptcha-container");
    if (!container) {
      console.warn("Recaptcha container not yet in DOM.");
      return;
    }

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("Recaptcha Resolved");
          },
        },
        auth
      );
    }
  };

  const handlePhoneSignup = async (e) => {
    e.preventDefault();
    if (!phone.startsWith("+")) {
      toast({
        variant: "destructive",
        title: "Phone no invalid",
        description: "Phone number must start with + and country code (e.g. +91)",
      });
      return;
    }
    setLoading(true);

    // setupRecaptcha();
    // const appVerifier = window.recaptchaVerifier;
    // if (!appVerifier) {
    //   console.log("Recaptcha setup failed. Try again.");
    //   setLoading(false);
    //   return;
    // }

    try {
      // const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      // setConfirmationResult(result);
      setConfirmationResult(true);
      setCooldown(60);
      const interval = setInterval(() => {
        setCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      toast({ title: 'OTP Sent', description: 'Please check your phone for the verification code.' });
    } catch (error) {
      console.error(error);
       toast({ variant: 'destructive', title: 'Failed to send OTP', description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await confirmationResult.confirm(otp);
      const user = result.user;
      await setUsers(
        {
          fullName,
          phoneNumber: phone,
          uid: user.uid,
          passwordSet: !!password,
          emailVerified: true,
        },
        user,
        (role = "electricians")
      );
      setpass(true);
      setShowPassword(false);
       toast({ title: 'Account Created!', description: 'You have successfully signed up. You can set a password in your profile.' });
      router.replace("/electrician/set-password");
    } catch (error) {
      console.error(error);
      toast({ variant: 'destructive', title: 'OTP Verification Failed', description: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleSignupMethodChange = (method) => {
    setSignupMethod(method);
    setConfirmationResult("");
    setEmail("");
    setFullName("");
    setPhone("");
    setPassword("");
    setOtp("");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-white py-4 px-4 sm:px-6">
        <div className="max-w-md w-full space-y-8">
          <div className="flex space-x-1 bg-gray-200 rounded-lg p-1">
            <button
              onClick={() => handleSignupMethodChange("phone")}
              className={`w-full px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                signupMethod === "phone"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Phone className="h-4 w-4" /> Phone
            </button>
            <button
              onClick={() => handleSignupMethodChange("email")}
              className={`w-full px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 ${
                signupMethod === "email"
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Mail className="h-4 w-4" /> Email
            </button>
          </div>

          {signupMethod === "email" && (
            <form className="space-y-3" onSubmit={handleEmailSignup}>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
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

              <Button
                type="submit"
                className="group relative w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating
                    account...
                  </>
                ) : (
                  "Create account"
                )}
              </Button>
            </form>
          )}

          {signupMethod === "phone" && !confirmationResult && (
            <form className="space-y-3" onSubmit={handlePhoneSignup}>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                required
              />

              <input
                type="text"
                placeholder="Mobile no."
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <small className="text-sm text-gray-500 ml-1">
                Include country code. E.g. +91XXXXXXXXXX
              </small>
              <div id="recaptcha-container"></div>
              <Button
                type="submit"
                className="group relative w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending
                    OTP...
                  </>
                ) : (
                  "Send OTP"
                )}
              </Button>
            </form>
          )}

          {signupMethod === "phone" && confirmationResult && (
            <form className="space-y-3" onSubmit={handleOtpVerification}>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                readOnly
              />
              <input
                type="text"
                placeholder="Mobile no."
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                value={phone}
                readOnly
              />
              <input
                ref={otpRef}
                id="otp"
                name="otp"
                type="text"
                required
                minLength={6}
                maxLength={6}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {cooldown > 0 ? (
                <p className="text-gray-500 text-sm">
                  Resend OTP in {cooldown}s
                </p>
              ) : (
                <button
                  onClick={handlePhoneSignup}
                  className="text-blue-500 text-sm"
                >
                  Resend OTP
                </button>
              )}
              <Button
                type="submit"
                className="group relative w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    Verifying...
                  </>
                ) : (
                  "Verify OTP"
                )}
              </Button>

              <button
                type="button"
                onClick={() => {
                  setConfirmationResult(false);
                  setOtp("");
                }}
                className="bg-gradient-to-r hover:opacity-90 mt-1 from-blue-500 to-blue-700 py-3 rounded-xl text-white relative w-full flex justify-center"
                disabled={loading}
              >
                Change Number
              </button>
            </form>
          )}
        </div>
      </div>
      <p className="mt-4 text-base text-blue-800">
        Already have an account?{" "}
        <Link href="/electrician/login" className="underline">
          Login
        </Link>
      </p>
    </>
  );
};

export default Signup;
