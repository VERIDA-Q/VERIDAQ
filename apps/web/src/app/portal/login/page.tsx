"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/portal/ui/button";
import { Input } from "@/components/portal/ui/input";
import { Label } from "@/components/portal/ui/label";
import { api } from "@/lib/portal/api";
import { usePortalStore } from "@/store/portal";

const schema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginValues = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const setSession = usePortalStore((s) => s.setSession);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: LoginValues) {
    try {
      const data = await api.loginInstitution(values.email, values.password);
      // Server sets httpOnly cookie; we also persist in store for client usage
      setSession(data.token, data.institution);
      toast.success("Welcome back!", {
        description: `Signed in as ${data.institution.name}`,
      });
      router.push("/portal/dashboard");
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Unable to sign in. Please try again.";
      toast.error("Sign in failed", { description: msg, duration: Infinity });
    }
  }

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left panel — navy brand column */}
      <div className="hidden lg:flex w-[420px] bg-[#1A1A2E] flex-col justify-between p-12 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">VERIDAQ</span>
        </div>
        <div>
          <p className="text-2xl font-bold text-white leading-snug mb-3">
            Institution Portal
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            Issue verifiable credentials, manage claim schemas, and review employer
            verification requests — all from one dashboard.
          </p>
        </div>
        <p className="text-xs text-white/25">© {new Date().getFullYear()} VERIDAQ</p>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-6 lg:hidden">
              <div className="w-7 h-7 bg-[#1A1A2E] rounded-md flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-[#1A1A2E]">VERIDAQ</span>
            </div>
            <h1 className="text-2xl font-bold text-[#1A1A2E] tracking-tight mb-1">
              Sign in to your account
            </h1>
            <p className="text-sm text-[#1A1A2E]/50">
              Enter your institution credentials to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@university.edu"
                autoComplete="email"
                aria-invalid={!!errors.email}
                {...register("email")}
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
                placeholder="••••••••"
                autoComplete="current-password"
                aria-invalid={!!errors.password}
                {...register("password")}
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
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in…
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          <p className="mt-8 text-center text-xs text-[#1A1A2E]/40">
            Need access?{" "}
            <a href="/" className="text-[#1A1A2E] font-medium hover:underline">
              Contact your administrator
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
