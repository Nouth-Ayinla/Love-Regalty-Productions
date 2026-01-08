import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
  const [showPin, setShowPin] = useState(false);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left brand panel */}
      <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-brand-orange via-brand-yellow to-brand-green text-white p-10">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Love Regality Productions"
            className="h-10 w-10 rounded"
          />
          <span className="text-2xl font-bold">Love Regality</span>
        </div>

        <div className="max-w-md space-y-4">
          <h2 className="text-3xl font-bold">Join us and get started</h2>
          <p className="text-white/90">
            Create your account to personalize your experience and manage your
            projects effortlessly.
          </p>
        </div>

        <p className="text-white/80 text-sm">
          Copyright © {new Date().getFullYear()} Love Regality
        </p>
      </div>

      {/* Right form panel */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-xl">
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="text-muted-foreground">
              Fill in your details to sign up.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full name</Label>
              <Input
                id="fullName"
                placeholder="Alex Johnson"
                autoComplete="name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">Email or Phone Number</Label>
              <Input
                id="contact"
                placeholder="Email or Phone Number"
                autoComplete="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pin">Create PIN</Label>
              <div className="relative">
                <Input
                  id="pin"
                  type={showPin ? "text" : "password"}
                  placeholder="PIN"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  onClick={() => setShowPin((v) => !v)}
                  aria-label={showPin ? "Hide PIN" : "Show PIN"}
                >
                  {showPin ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white">
              Sign Up
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/auth/sign-in"
                className="font-semibold text-brand-orange"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
