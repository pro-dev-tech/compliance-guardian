import { motion } from "framer-motion";
import { User, Building, Bell, Shield, Palette } from "lucide-react";

const sections = [
  { icon: User, title: "Profile", description: "Manage your personal information" },
  { icon: Building, title: "Company", description: "Update company details and registration" },
  { icon: Bell, title: "Notifications", description: "Configure alert preferences" },
  { icon: Shield, title: "Security", description: "Password, 2FA, and session management" },
  { icon: Palette, title: "Appearance", description: "Theme and display preferences" },
];

export default function SettingsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your account and application preferences</p>
      </div>

      <div className="space-y-3">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass-card-hover p-5 flex items-center gap-4 cursor-pointer"
          >
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{s.title}</p>
              <p className="text-xs text-muted-foreground">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Role badge */}
      <div className="glass-card p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">Access Level</h3>
        <div className="flex items-center gap-3">
          <span className="rounded-full gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Admin</span>
          <span className="text-xs text-muted-foreground">Full access to all compliance features and settings</span>
        </div>
      </div>
    </motion.div>
  );
}
