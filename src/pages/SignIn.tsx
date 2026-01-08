import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
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
          <h2 className="text-3xl font-bold">
            Create safer, compliant workplaces
          </h2>
          <p className="text-white/90">
            We help teams focus on wellbeing and organizational efficiency by
            building engaging, compliant environments.
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
            <h1 className="text-3xl font-bold">Welcome back!</h1>
            <p className="text-muted-foreground">
              Please enter your credentials to sign in.
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact">Email or Phone Number</Label>
              <Input
                id="contact"
                placeholder="Email or Phone Number"
                autoComplete="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pin">Pin</Label>
              <div className="relative">
                <Input
                  id="pin"
                  type={showPin ? "text" : "password"}
                  placeholder="Pin"
                  autoComplete="current-password"
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

            <div className="flex items-center justify-between">
              <div />
              <Link
                to="/forgot-pin"
                className="text-sm text-brand-orange font-semibold"
              >
                Forgot Pin?
              </Link>
            </div>

            <Button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white">
              Sign In
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Don't have an account yet?{" "}
              <Link
                to="/auth/sign-up"
                className="font-semibold text-brand-orange"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
