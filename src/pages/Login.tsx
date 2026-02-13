import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Shield, Eye, EyeOff, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const navigate = useNavigate();
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md mx-4"
      >
        <div className="glass-card p-8">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold gradient-primary-text">ComplianceAI</span>
          </div>

          <h2 className="text-xl font-semibold text-foreground text-center mb-1">Welcome back</h2>
          <p className="text-sm text-muted-foreground text-center mb-6">Sign in to your compliance dashboard</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <input
                  type={showPw ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all pr-10"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-muted-foreground">
                <input type="checkbox" className="rounded border-border" />
                Remember me
              </label>
              <button type="button" className="text-primary hover:underline text-xs">Forgot password?</button>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg gradient-primary py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              Sign In <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary hover:underline font-medium">Create account</Link>
          </p>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Protected by 256-bit encryption · SOC 2 Compliant
        </p>
      </motion.div>
    </div>
  );
}
