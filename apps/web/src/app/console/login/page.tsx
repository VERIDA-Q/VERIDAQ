"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { Loader2, ShieldAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/console/ui/button";
import { Input } from "@/components/console/ui/input";
import { Label } from "@/components/console/ui/label";
import { adminApi } from "@/lib/console/api";
import { useConsoleStore } from "@/store/console";

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const setSession = useConsoleStore((s) => s.setSession);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    try {
      const res = await adminApi.login(data.email, data.password);
      setSession(res.token, res.admin);
      toast.success("Logged in", { duration: 4000 });
      router.replace("/console/dashboard");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Login failed";
      toast.error("Login failed", { description: message, duration: Infinity });
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left panel */}
      <div className="hidden lg:flex w-[420px] bg-[#1A1A2E] flex-col justify-between p-12 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <ShieldAlert className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">VERIDAQ</span>
        </div>
        <div>
          <p className="text-2xl font-bold text-white leading-snug mb-3">
            Admin Console
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            Platform operations dashboard. Manage institution KYC, employer onboarding,
            audit logs, system health, and gas pool administration.
          </p>
        </div>
        <p className="text-xs text-white/25">© {new Date().getFullYear()} VERIDAQ</p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6 lg:hidden">
              <div className="w-7 h-7 bg-[#1A1A2E] rounded-md flex items-center justify-center">
                <ShieldAlert className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-[#1A1A2E]">VERIDAQ</span>
            </div>
            <h1 className="text-2xl font-bold text-[#1A1A2E] tracking-tight mb-1">
              Admin sign in
            </h1>
            <p className="text-sm text-[#1A1A2E]/50">
              Restricted to platform administrators only.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="email">Admin email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                {...register("email", {
                  required: "Enter a valid email",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-[#1A1A2E] hover:bg-[#16213E] text-white font-semibold h-11"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing in…</>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          <p className="mt-8 text-center text-xs text-[#1A1A2E]/40">
            <a href="/" className="text-[#1A1A2E] font-medium hover:underline">
              ← Back to VERIDAQ
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
