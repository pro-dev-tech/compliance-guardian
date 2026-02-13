import { motion } from "framer-motion";
import { ShieldAlert, TrendingDown, TrendingUp, ArrowRight, GitBranch, Zap } from "lucide-react";

const ruleNodes = [
  { condition: "Revenue > ₹40L", result: "GST Registration Mandatory", triggered: true },
  { condition: "Employees > 20", result: "PF Applicable", triggered: true },
  { condition: "Employees > 10", result: "ESIC Applicable", triggered: true },
  { condition: "Revenue > ₹1Cr", result: "Tax Audit Required", triggered: false },
  { condition: "Inter-state sales", result: "E-way Bill Required", triggered: true },
];

const riskFactors = [
  { label: "Regulatory Risk", score: 72, trend: "up" as const },
  { label: "Filing Timeliness", score: 85, trend: "up" as const },
  { label: "Penalty Exposure", score: 45, trend: "down" as const },
  { label: "Data Accuracy", score: 91, trend: "up" as const },
];

export default function RiskMonitor() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Risk Monitor</h1>
        <p className="text-sm text-muted-foreground mt-1">Compliance risk assessment and rule engine visualization</p>
      </div>

      {/* Risk factors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {riskFactors.map((f, i) => (
          <div key={i} className="glass-card-hover p-4">
            <p className="text-xs text-muted-foreground mb-2">{f.label}</p>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-foreground">{f.score}</span>
              <div className={`flex items-center gap-1 text-xs font-medium ${f.trend === "up" ? "text-success" : "text-destructive"}`}>
                {f.trend === "up" ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                {f.trend === "up" ? "+5" : "-8"}%
              </div>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-secondary">
              <motion.div
                className={`h-full rounded-full ${f.score >= 80 ? "bg-success" : f.score >= 60 ? "bg-warning" : "bg-destructive"}`}
                initial={{ width: 0 }}
                animate={{ width: `${f.score}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Rule Engine */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-2 mb-5">
          <GitBranch className="h-5 w-5 text-accent" />
          <h3 className="text-lg font-semibold text-foreground">Compliance Rule Engine</h3>
        </div>
        <div className="space-y-3">
          {ruleNodes.map((rule, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-4 rounded-xl border p-4 ${
                rule.triggered
                  ? "border-primary/30 bg-primary/5"
                  : "border-border bg-secondary/30"
              }`}
            >
              <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${
                rule.triggered ? "bg-primary/20" : "bg-secondary"
              }`}>
                <Zap className={`h-4 w-4 ${rule.triggered ? "text-primary" : "text-muted-foreground"}`} />
              </div>
              <div className="flex items-center gap-3 flex-1">
                <span className={`text-sm font-medium ${rule.triggered ? "text-foreground" : "text-muted-foreground"}`}>
                  {rule.condition}
                </span>
                <ArrowRight className={`h-4 w-4 ${rule.triggered ? "text-primary" : "text-muted-foreground"}`} />
                <span className={`text-sm font-medium ${rule.triggered ? "text-foreground" : "text-muted-foreground"}`}>
                  {rule.result}
                </span>
              </div>
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                rule.triggered ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"
              }`}>
                {rule.triggered ? "TRIGGERED" : "INACTIVE"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
