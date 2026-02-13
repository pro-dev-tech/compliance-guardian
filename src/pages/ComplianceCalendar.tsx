import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface CalEvent {
  day: number;
  title: string;
  status: "completed" | "upcoming" | "overdue";
}

const events: CalEvent[] = [
  { day: 7, title: "TDS Payment", status: "completed" },
  { day: 10, title: "GST-1 Filing", status: "completed" },
  { day: 15, title: "PF Return", status: "overdue" },
  { day: 20, title: "GST-3B Filing", status: "upcoming" },
  { day: 25, title: "ESI Return", status: "upcoming" },
  { day: 28, title: "Professional Tax", status: "upcoming" },
];

const statusColors = {
  completed: "bg-success",
  upcoming: "bg-warning",
  overdue: "bg-destructive",
};

export default function ComplianceCalendar() {
  const [month] = useState(1); // Feb
  const [year] = useState(2026);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDay }, (_, i) => i);

  const getEvents = (day: number) => events.filter((e) => e.day === day);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Compliance Calendar</h1>
        <p className="text-sm text-muted-foreground mt-1">Auto-generated deadlines based on your company profile</p>
      </div>

      {/* Legend */}
      <div className="flex gap-4">
        {(["completed", "upcoming", "overdue"] as const).map((s) => (
          <div key={s} className="flex items-center gap-2 text-xs text-muted-foreground capitalize">
            <div className={`h-2.5 w-2.5 rounded-full ${statusColors[s]}`} /> {s}
          </div>
        ))}
      </div>

      <div className="glass-card p-6">
        {/* Month header */}
        <div className="flex items-center justify-between mb-6">
          <button className="rounded-lg p-2 text-muted-foreground hover:bg-secondary transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-semibold text-foreground">February 2026</h2>
          <button className="rounded-lg p-2 text-muted-foreground hover:bg-secondary transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map((d) => (
            <div key={d} className="text-center text-xs font-medium text-muted-foreground py-2">{d}</div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {blanks.map((i) => (
            <div key={`b-${i}`} className="aspect-square" />
          ))}
          {days.map((day) => {
            const dayEvents = getEvents(day);
            const isToday = day === 13;
            return (
              <div
                key={day}
                className={`aspect-square rounded-lg p-1.5 text-sm transition-colors cursor-pointer hover:bg-secondary/80 ${
                  isToday ? "border border-primary bg-primary/10" : "bg-secondary/30"
                }`}
              >
                <span className={`text-xs font-medium ${isToday ? "text-primary" : "text-foreground"}`}>{day}</span>
                <div className="mt-0.5 space-y-0.5">
                  {dayEvents.map((ev, i) => (
                    <div
                      key={i}
                      className={`rounded px-1 py-0.5 text-[9px] font-medium truncate ${
                        ev.status === "completed" ? "bg-success/15 text-success" :
                        ev.status === "overdue" ? "bg-destructive/15 text-destructive" :
                        "bg-warning/15 text-warning"
                      }`}
                    >
                      {ev.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming list */}
      <div className="glass-card p-5">
        <h3 className="text-sm font-semibold text-foreground mb-3">February Deadlines</h3>
        <div className="space-y-2">
          {events.map((ev, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-secondary/50 p-3">
              <div className="flex items-center gap-3">
                <div className={`h-2.5 w-2.5 rounded-full ${statusColors[ev.status]}`} />
                <div>
                  <p className="text-sm font-medium text-foreground">{ev.title}</p>
                  <p className="text-xs text-muted-foreground">Feb {ev.day}, 2026</p>
                </div>
              </div>
              <span className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold capitalize ${
                ev.status === "completed" ? "status-green" : ev.status === "overdue" ? "status-red" : "status-yellow"
              }`}>{ev.status}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
