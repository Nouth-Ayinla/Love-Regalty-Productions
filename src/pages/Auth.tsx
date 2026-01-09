import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Eye, EyeOff } from "lucide-react";

const Auth = () => {
  const [tab, setTab] = useState<"sign-in" | "sign-up">("sign-in");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("tab");
    if (q === "sign-in" || q === "sign-up") setTab(q);
  }, [location.search]);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left brand panel (desktop) */}
      <div className="hidden lg:flex flex-col justify-center items-center text-center bg-brand-orange p-12 relative overflow-hidden">
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Love Regality Productions"
            className="h-28 w-28 rounded-md"
          />

          <h2 className="mt-6 text-4xl font-extrabold text-white">
            Love Regality Productions
          </h2>

          <p className="mt-4 max-w-xs text-white/90">
            We make commercials. The kind people like.
          </p>
        </div>

        <p className="absolute bottom-6 w-full text-center text-white/80 text-sm">
          Copyright © {new Date().getFullYear()} Love Regality Productions
        </p>

        <svg
          className="absolute right-0 top-0 h-full"
          width="96"
          height="100%"
          viewBox="0 0 96 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C32,32 32,96 0,128 C32,160 32,224 0,256 C32,288 32,352 0,384 C32,416 32,480 0,512 C32,544 32,608 0,640 C32,672 32,736 0,768 L96,800 L96,0 Z"
            fill="#ffffff"
            fillOpacity="0.06"
          />
        </svg>
      </div>

      {/* Mobile brand header */}
      <div className="lg:hidden bg-brand-orange text-center py-6 relative overflow-hidden">
        <div className="mx-auto bg-white rounded-full p-2 w-20 h-20 flex items-center justify-center z-10">
          <img
            src={logo}
            alt="Love Regality Productions"
            className="h-16 w-16 object-contain"
          />
        </div>
        <h2 className="mt-3 text-2xl font-bold text-white">
          Love Regality Productions
        </h2>
        <p className="text-sm text-white/90 mt-1">Welcome!</p>

        <svg
          className="absolute left-0 bottom-0 w-full"
          viewBox="0 0 1440 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,60 C240,0 360,120 600,80 C840,40 960,120 1200,80 C1320,56 1440,60 1440,60 L1440,140 L0,140 Z"
            fill="#ffffff"
            fillOpacity="1"
          />
        </svg>
      </div>

      {/* Right form panel */}
      <div className="flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md mx-auto -mt-8 lg:mt-0">
          {/* top tab buttons removed to keep page static and avoid extra scrolling */}

          {tab === "sign-in" ? (
            <div>
              <div className="space-y-4 mb-6 text-center">
                <h1 className="text-4xl font-extrabold text-foreground">
                  Welcome back!
                </h1>
                <p className="text-muted-foreground">
                  Please enter your credentials to sign in!
                </p>
              </div>

              <div className="space-y-5">
                {/* Mobile: Google continue + divider */}

                <div className="space-y-2">
                  <Label
                    htmlFor="si-email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="si-email"
                    placeholder="Email"
                    autoComplete="email"
                    className="w-full h-14 rounded-full px-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="si-password"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="si-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      autoComplete="current-password"
                      className="w-full h-14 rounded-full px-6"
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Link
                    to="/forgot-pin"
                    className="text-sm text-brand-orange font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button className="w-full px-6 py-4 text-lg font-semibold rounded-full bg-brand-orange hover:bg-brand-orange/95 text-white">
                  Sign In
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <button
                    onClick={() => setTab("sign-up")}
                    className="font-semibold text-brand-orange"
                  >
                    Create one
                  </button>
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="space-y-4 mb-6 text-center">
                <h1 className="text-4xl font-extrabold text-black-800">
                  Create your account
                </h1>
                <p className="text-muted-foreground">
                  Fill in your details to sign up.
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Alex Johnson"
                    autoComplete="name"
                    className="w-full h-14 rounded-full px-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="contact"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="contact"
                    placeholder="Email"
                    autoComplete="email"
                    className="w-full h-14 rounded-full px-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="su-password"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="su-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      autoComplete="new-password"
                      className="w-full h-14 rounded-full px-6"
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <Button className="w-full px-6 py-4 text-lg font-semibold rounded-full bg-brand-orange hover:bg-brand-orange/95 text-white">
                  Sign Up
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <button
                    onClick={() => setTab("sign-in")}
                    className="font-semibold text-brand-orange"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
