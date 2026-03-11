import Link from "next/link";
import {
  ShieldCheck,
  Building2,
  Users,
  BadgeCheck,
  Lock,
  ChevronRight,
  FileSearch,
  Layers,
  Globe,
  ArrowRight,
  CheckCircle2,
  TerminalSquare,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Landing Page — VERIDAQ
   Design: white + #1A1A2E navy only
   No gradients · No shadows · Professional
───────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1A1A2E]">
      {/* ── Navigation ── */}
      <header className="border-b border-[#1A1A2E]/10 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#1A1A2E] rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">VERIDAQ</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors">
              How It Works
            </a>
            <a href="#portals" className="text-sm font-medium text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors">
              Portals
            </a>
            <a href="#technology" className="text-sm font-medium text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors">
              Technology
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/portal/login"
              className="text-sm font-medium text-[#1A1A2E]/70 hover:text-[#1A1A2E] transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/verify/register"
              className="text-sm font-semibold bg-[#1A1A2E] text-white px-4 py-2 rounded-lg hover:bg-[#16213E] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-[#1A1A2E]/15 rounded-full px-3.5 py-1.5 text-xs font-semibold text-[#1A1A2E] mb-8 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A2E] inline-block" />
            On-chain · Zero-Knowledge · Privacy-First
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
            Academic credentials
            <br />
            you can trust—
            <br />
            <span className="text-[#1A1A2E]/40">without exposing data.</span>
          </h1>

          <p className="text-lg text-[#1A1A2E]/60 leading-relaxed mb-10 max-w-xl">
            VERIDAQ lets institutions issue verifiable credentials on-chain, employers request
            zero-knowledge proofs, and graduates control exactly what they share. No third
            parties. No data leaks.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/verify/register"
              className="inline-flex items-center gap-2 bg-[#1A1A2E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#16213E] transition-colors"
            >
              Start verifying credentials
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portal/login"
              className="inline-flex items-center gap-2 border border-[#1A1A2E]/20 text-[#1A1A2E] font-semibold px-6 py-3 rounded-lg hover:border-[#1A1A2E]/40 transition-colors"
            >
              Institution portal
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="border-y border-[#1A1A2E]/10 bg-[#1A1A2E]/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "100%", label: "On-chain verification" },
              { value: "ZK", label: "Zero-knowledge proofs" },
              { value: "< 5s", label: "Median verification time" },
              { value: "0", label: "Personal data exposed" },
            ].map(({ value, label }) => (
              <div key={label}>
                <dt className="text-3xl font-bold tracking-tight">{value}</dt>
                <dd className="text-sm text-[#1A1A2E]/50 mt-1 font-medium">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A2E]/40 mb-3">Process</p>
          <h2 className="text-3xl font-bold tracking-tight">How VERIDAQ works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              step: "01",
              icon: Building2,
              title: "Institution issues credentials",
              description:
                "Universities upload graduate records via the Institution Portal. VERIDAQ anchors a cryptographic commitment to each credential on Base Sepolia — no raw data on-chain.",
            },
            {
              step: "02",
              icon: FileSearch,
              title: "Employer submits a verification request",
              description:
                "Employers log into the Employer Portal and select the specific claim they need to verify — degree title, graduation year, GPA range — for a named graduate.",
            },
            {
              step: "03",
              icon: Lock,
              title: "ZK proof generated and verified",
              description:
                "VERIDAQ generates a zero-knowledge proof that the claim is true without revealing the underlying record. The proof is verified on-chain. A signed attestation is returned.",
            },
          ].map(({ step, icon: Icon, title, description }) => (
            <div key={step} className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-[#1A1A2E]/10 leading-none tracking-tighter select-none">
                  {step}
                </span>
                <div className="w-10 h-10 border border-[#1A1A2E]/15 rounded-xl flex items-center justify-center shrink-0 mt-1">
                  <Icon className="w-5 h-5 text-[#1A1A2E]" />
                </div>
              </div>
              <h3 className="text-lg font-semibold leading-snug">{title}</h3>
              <p className="text-[#1A1A2E]/55 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Portals ── */}
      <section id="portals" className="border-t border-[#1A1A2E]/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A2E]/40 mb-3">Access</p>
            <h2 className="text-3xl font-bold tracking-tight">Three portals. One platform.</h2>
            <p className="text-[#1A1A2E]/55 mt-3 max-w-xl text-sm leading-relaxed">
              Everyone in the verification lifecycle has a dedicated workspace — with role-based
              access, a clean interface, and all the tools they need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Institution Portal */}
            <div className="border border-[#1A1A2E]/12 rounded-2xl p-8 flex flex-col gap-6 hover:border-[#1A1A2E]/30 transition-colors">
              <div className="w-11 h-11 bg-[#1A1A2E] rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Institution Portal</h3>
                <p className="text-sm text-[#1A1A2E]/55 leading-relaxed">
                  For universities and academic institutions. Upload graduate records, manage
                  credential batches, define claim schemas, and review employer verification
                  requests.
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  "Batch credential upload via Excel",
                  "Claim schema management",
                  "Employer request approvals",
                  "On-chain batch status tracking",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#1A1A2E]/70">
                    <CheckCircle2 className="w-4 h-4 text-[#1A1A2E] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <Link
                  href="/portal/login"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1A2E] border border-[#1A1A2E]/20 px-4 py-2.5 rounded-lg hover:border-[#1A1A2E]/50 transition-colors w-full justify-center"
                >
                  Institution sign in
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Employer Portal */}
            <div className="border border-[#1A1A2E] rounded-2xl p-8 flex flex-col gap-6 bg-[#1A1A2E] text-white">
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Employer Portal</h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  For companies and hiring teams. Submit zero-knowledge verification requests for
                  specific credential claims—without ever seeing raw graduate records.
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  "Self-service registration",
                  "Targeted ZK verification requests",
                  "Downloadable proof attestations",
                  "Verification history & audit trail",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2 flex gap-3">
                <Link
                  href="/verify/register"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold bg-white text-[#1A1A2E] px-4 py-2.5 rounded-lg hover:bg-white/90 transition-colors flex-1 justify-center"
                >
                  Register free
                </Link>
                <Link
                  href="/verify/login"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold border border-white/30 text-white px-4 py-2.5 rounded-lg hover:border-white/60 transition-colors justify-center"
                >
                  Sign in
                </Link>
              </div>
            </div>

            {/* Admin Console */}
            <div className="border border-[#1A1A2E]/12 rounded-2xl p-8 flex flex-col gap-6 hover:border-[#1A1A2E]/30 transition-colors">
              <div className="w-11 h-11 bg-[#1A1A2E]/8 rounded-xl flex items-center justify-center">
                <TerminalSquare className="w-5 h-5 text-[#1A1A2E]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Admin Console</h3>
                <p className="text-sm text-[#1A1A2E]/55 leading-relaxed">
                  For VERIDAQ platform operators. Manage institution and employer KYC, monitor
                  system health, review platform audit logs, and manage gas sponsorship.
                </p>
              </div>
              <ul className="space-y-2">
                {[
                  "Institution & employer KYC review",
                  "Platform-wide audit log",
                  "System health monitoring",
                  "Sponsored gas pool management",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#1A1A2E]/70">
                    <CheckCircle2 className="w-4 h-4 text-[#1A1A2E] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <Link
                  href="/console/login"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1A2E] border border-[#1A1A2E]/20 px-4 py-2.5 rounded-lg hover:border-[#1A1A2E]/50 transition-colors w-full justify-center"
                >
                  Admin sign in
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology ── */}
      <section id="technology" className="border-t border-[#1A1A2E]/10 bg-[#1A1A2E]/[0.02]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A2E]/40 mb-3">Stack</p>
            <h2 className="text-3xl font-bold tracking-tight">Built on proven infrastructure</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "Base Sepolia (EVM)",
                description:
                  "All credential commitments and ZK proof verifications are recorded on Base Sepolia — a low-cost, fast EVM-compatible L2 chain.",
              },
              {
                icon: Lock,
                title: "Zero-Knowledge Proofs",
                description:
                  "Groth16 / SNARK proofs let employers verify specific credential claims without ever accessing underlying graduate records.",
              },
              {
                icon: BadgeCheck,
                title: "On-chain Registry",
                description:
                  "Six smart contracts manage institution registration, credential commitments, revocations, paymaster vaults, and subscriptions.",
              },
              {
                icon: ShieldCheck,
                title: "EIP-4337 Account Abstraction",
                description:
                  "Gas sponsorship via a Paymaster vault allows institutions to transact on-chain without managing ETH wallets directly.",
              },
              {
                icon: Globe,
                title: "Decentralised & Open",
                description:
                  "No central database holds credential records. Proofs are verifiable by any party with access to the on-chain verifier contract.",
              },
              {
                icon: FileSearch,
                title: "Selective Disclosure",
                description:
                  "Graduates and institutions control exactly which attributes are disclosed — degree type, year, institution — never the full record.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-3">
                <div className="w-9 h-9 border border-[#1A1A2E]/15 rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#1A1A2E]" />
                </div>
                <h3 className="text-base font-semibold leading-snug">{title}</h3>
                <p className="text-sm text-[#1A1A2E]/55 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-[#1A1A2E]/10">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="border border-[#1A1A2E]/12 rounded-2xl px-10 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-3">
                Ready to verify credentials at scale?
              </h2>
              <p className="text-[#1A1A2E]/55 text-sm leading-relaxed max-w-lg">
                Whether you're an institution issuing records or an employer confirming
                qualifications — VERIDAQ handles it with zero data exposure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/verify/register"
                className="inline-flex items-center justify-center gap-2 bg-[#1A1A2E] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#16213E] transition-colors whitespace-nowrap"
              >
                Register as employer
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portal/login"
                className="inline-flex items-center justify-center gap-2 border border-[#1A1A2E]/20 text-[#1A1A2E] font-semibold px-6 py-3 rounded-lg hover:border-[#1A1A2E]/40 transition-colors whitespace-nowrap"
              >
                Institution portal
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#1A1A2E]/10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-7 h-7 bg-[#1A1A2E] rounded-md flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <span className="text-base font-bold">VERIDAQ</span>
              </div>
              <p className="text-xs text-[#1A1A2E]/50 leading-relaxed max-w-[180px]">
                Privacy-preserving credential verification for the modern institution.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A2E]/40 mb-4">Portals</p>
              <ul className="space-y-2.5">
                {[
                  { label: "Institution Portal", href: "/portal/login" },
                  { label: "Employer Portal", href: "/verify/login" },
                  { label: "Employer Register", href: "/verify/register" },
                  { label: "Admin Console", href: "/console/login" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A2E]/40 mb-4">Platform</p>
              <ul className="space-y-2.5">
                {[
                  { label: "How it works", href: "#how-it-works" },
                  { label: "Technology", href: "#technology" },
                  { label: "Smart contracts", href: "#technology" },
                  { label: "Base Sepolia", href: "https://sepolia.basescan.org" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-[#1A1A2E]/60 hover:text-[#1A1A2E] transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1A1A2E]/40 mb-4">Legal</p>
              <ul className="space-y-2.5">
                {["Privacy Policy", "Terms of Service", "Security"].map((item) => (
                  <li key={item}>
                    <span className="text-sm text-[#1A1A2E]/40 cursor-default">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-[#1A1A2E]/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#1A1A2E]/40">
              © {new Date().getFullYear()} VERIDAQ. All rights reserved.
            </p>
            <p className="text-xs text-[#1A1A2E]/40">
              Deployed on Base Sepolia · Powered by ZK proofs
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
