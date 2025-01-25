"use client";

import { useState, startTransition, useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

import Turnstile from "react-turnstile";
import { login, signup } from "./actions";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState<"login" | "signup" | "otp">("login");
  const [otpCode, setOtpCode] = useState<string[]>(Array(6).fill(""));
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<any>(null);

  // Create refs using useRef hook
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    otpInputRefs.current = otpInputRefs.current.slice(0, 6);
    while (otpInputRefs.current.length < 6) {
      otpInputRefs.current.push(null);
    }
  }, []);

  // Handle mode changes with transition
  const handleModeChange = () => {
    startTransition(() => {
      setMode(mode === "login" ? "signup" : "login");
      setError(null);
    });
  };

  // const handleOtpChange = (index: number, value: string) => {
  //   if (value.length > 1) {
  //     value = value[0];
  //   }

  //   const newOtp = [...otpCode];
  //   newOtp[index] = value;
  //   setOtpCode(newOtp);

  //   // Auto-focus next input
  //   if (value && index < 5 && otpInputRefs.current[index + 1]) {
  //     otpInputRefs.current[index + 1]?.focus();
  //   }
  // };

  // const handleOtpKeyDown = (
  //   index: number,
  //   e: React.KeyboardEvent<HTMLInputElement>
  // ) => {
  //   if (
  //     e.key === "Backspace" &&
  //     !otpCode[index] &&
  //     index > 0 &&
  //     otpInputRefs.current[index - 1]
  //   ) {
  //     otpInputRefs.current[index - 1]?.focus();
  //   }
  // };

  // const handleEmailLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError(null);

  //   if (!turnstileToken) {
  //     setError("Please complete the security check");
  //     return;
  //   }

  //   setIsLoading(true);

  //   try {
  //     const { error: signInError, data } =
  //       await supabase.auth.signInWithPassword({
  //         email,
  //         password,
  //         options: {
  //           captchaToken: turnstileToken,
  //         },
  //       });

  //     if (signInError) {
  //       if (signInError.message.includes("Email not confirmed")) {
  //         setError("Please confirm your email address before signing in.");
  //         return;
  //       }
  //       throw signInError;
  //     }

  //     // Wait for auth state to settle
  //     await new Promise((resolve) => setTimeout(resolve, 100));

  //     // Wrap navigation in transition
  //   } catch (error: any) {
  //     console.error("Login error:", error);
  //     setError(
  //       error.message || "Failed to sign in. Please check your credentials."
  //     );
  //     // Reset Turnstile on error
  //     turnstileRef.current?.reset();
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleEmailSignup = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError(null);

  //   if (!turnstileToken) {
  //     setError("Please complete the security check");
  //     return;
  //   }

  //   setIsLoading(true);

  //   try {
  //     // First try to sign up the user with Turnstile token
  //     const { data: signUpData, error: signUpError } =
  //       await supabase.auth.signUp({
  //         email,
  //         password,
  //         options: {
  //           captchaToken: turnstileToken,
  //         },
  //       });

  //     if (signUpError) {
  //       if (signUpError.message.includes("already registered")) {
  //         setError(
  //           "An account with this email already exists. Please sign in instead."
  //         );
  //         setMode("login");
  //         return;
  //       }
  //       throw signUpError;
  //     }

  //     // Show OTP input form
  //     setError(null);
  //     setMode("otp");
  //     // Reset OTP code
  //     setOtpCode(Array(6).fill(""));
  //     // Focus first OTP input
  //     setTimeout(() => {
  //       otpInputRefs.current[0]?.focus();
  //     }, 100);
  //   } catch (error: any) {
  //     console.error("Signup error:", error);
  //     setError(error.message || "Failed to sign up. Please try again.");
  //     // Reset Turnstile on error
  //     turnstileRef.current?.reset();
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleVerifyOtp = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError(null);
  //   setIsLoading(true);

  //   const otpString = otpCode.join("");
  //   if (otpString.length !== 6) {
  //     setError("Please enter a valid 6-digit code");
  //     setIsLoading(false);
  //     return;
  //   }

  //   try {
  //     // Verify OTP
  //     const { data: verifyData, error: verifyError } =
  //       await supabase.auth.verifyOtp({
  //         email,
  //         token: otpString,
  //         type: "email",
  //       });

  //     if (verifyError) throw verifyError;

  //     // Navigate to dashboard after successful verification
  //     startTransition(() => {
  //       navigate({
  //         to: redirect,
  //         replace: true,
  //       });
  //     });
  //   } catch (error: any) {
  //     console.error("OTP verification error:", error);
  //     if (error.message.includes("Email rate limit exceeded")) {
  //       setError("Too many attempts. Please wait a moment and try again.");
  //     } else {
  //       setError(error.message || "Failed to verify code. Please try again.");
  //     }
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            {mode === "otp"
              ? "Verify Email"
              : mode === "login"
              ? "Welcome Back"
              : "Create Account"}
          </CardTitle>
          <CardDescription>
            {mode === "otp"
              ? "Enter the verification code sent to your email"
              : mode === "login"
              ? "Sign in to your account"
              : "Sign up for a new account"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* {mode === "otp" ? (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div className="space-y-2">
                <Label>Verification Code</Label>
                <div className="flex gap-2 justify-between">
                  {otpCode.map((digit, index) => (
                    <Input
                      key={index}
                      ref={(el: HTMLInputElement | null) =>
                        (otpInputRefs.current[index] = el)
                      }
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      maxLength={1}
                      className="w-12 h-12 text-lg text-center"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-center text-muted-foreground">
                  We&apos;ve sent a verification code to {email}
                </p>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                ) : null}
                Verify Code
              </Button>
            </form>
          ) : ( */}
          <form
            action={mode === "login" ? login : signup}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                autoComplete={mode === "login" ? "username" : "off"}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  autoComplete={
                    mode === "login" ? "current-password" : "new-password"
                  }
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute top-0 right-0 px-3 py-2 h-full hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <Turnstile
                sitekey={
                  process.env.NODE_ENV === "development"
                    ? "1x00000000000000000000AA"
                    : "0x4AAAAAAA4TvmyjluOc-AwW"
                }
                onVerify={(token) => {
                  setTurnstileToken(token);
                  setError(null);
                }}
                onError={() => {
                  setError(
                    "Failed to verify security check. Please try again."
                  );
                  setTurnstileToken(null);
                }}
                onExpire={() => {
                  setError("Security check expired. Please try again.");
                  setTurnstileToken(null);
                }}
                className="mb-4"
                appearance="always"
                retry="never"
                refreshExpired="auto"
                language="en"
                theme="light"
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || !turnstileToken}
            >
              {isLoading ? (
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              ) : null}
              {mode === "login" ? "Sign In" : "Sign Up"}
            </Button>

            <div className="text-center">
              <Button
                type="button"
                variant="link"
                className="text-xs"
                onClick={handleModeChange}
              >
                {mode === "login"
                  ? "Don't have an account? Sign up"
                  : "Already have an account? Sign in"}
              </Button>
            </div>
          </form>
          {/* )} */}
        </CardContent>
      </Card>
    </div>
  );
}
