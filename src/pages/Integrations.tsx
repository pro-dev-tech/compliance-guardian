import { motion } from "framer-motion";
import { CheckCircle, XCircle, RefreshCw, ExternalLink } from "lucide-react";

const integrations = [
  { name: "Tally", description: "Accounting & bookkeeping", connected: true, lastSync: "2 hours ago", icon: "T" },
  { name: "Zoho Books", description: "Invoice management", connected: true, lastSync: "30 min ago", icon: "Z" },
  { name: "HRMS Portal", description: "Employee management", connected: true, lastSync: "1 hour ago", icon: "H" },
  { name: "GSTN", description: "GST Network portal", connected: true, lastSync: "15 min ago", icon: "G" },
  { name: "MCA21", description: "Ministry of Corporate Affairs", connected: false, lastSync: "—", icon: "M" },
  { name: "EPFO", description: "Provident Fund portal", connected: true, lastSync: "4 hours ago", icon: "E" },
];

export default function Integrations() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Integrations</h1>
        <p className="text-sm text-muted-foreground mt-1">Connect your business tools for automated compliance tracking</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((int, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-card-hover p-5"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                  {int.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{int.name}</p>
                  <p className="text-xs text-muted-foreground">{int.description}</p>
                </div>
              </div>
              {int.connected ? (
                <CheckCircle className="h-5 w-5 text-success" />
              ) : (
                <XCircle className="h-5 w-5 text-muted-foreground" />
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                {int.connected ? (
                  <span className="flex items-center gap-1"><RefreshCw className="h-3 w-3" /> Last sync: {int.lastSync}</span>
                ) : (
                  "Not connected"
                )}
              </div>
              <button className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors flex items-center gap-1 ${
                int.connected
                  ? "border border-border text-muted-foreground hover:bg-secondary"
                  : "gradient-primary text-primary-foreground"
              }`}>
                {int.connected ? "Configure" : "Connect"} <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
