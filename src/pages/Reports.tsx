import { motion } from "framer-motion";
import { FileBarChart, Download, Filter } from "lucide-react";

const reports = [
  { name: "Monthly Compliance Summary", period: "January 2026", generated: "Feb 5, 2026", type: "PDF" },
  { name: "GST Filing Report", period: "Q3 FY2025-26", generated: "Jan 15, 2026", type: "Excel" },
  { name: "Employee PF Compliance", period: "FY2025-26", generated: "Feb 1, 2026", type: "PDF" },
  { name: "Risk Assessment Report", period: "February 2026", generated: "Feb 10, 2026", type: "PDF" },
  { name: "Audit Trail Export", period: "Last 90 days", generated: "Feb 12, 2026", type: "CSV" },
];

export default function Reports() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Reports</h1>
          <p className="text-sm text-muted-foreground mt-1">Generate and download compliance reports</p>
        </div>
        <button className="flex items-center gap-2 rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          <FileBarChart className="h-4 w-4" /> Generate Report
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-sm font-medium text-foreground">All Reports</span>
          <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="h-3.5 w-3.5" /> Filter
          </button>
        </div>
        <div className="divide-y divide-border">
          {reports.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileBarChart className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.period} · Generated {r.generated}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{r.type}</span>
                <button className="rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
