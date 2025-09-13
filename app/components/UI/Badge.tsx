import { cn } from "../../lib/utils";

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className={cn(
      "inline-block px-3 py-1 rounded-full border border-zinc-400 bg-neutral-900 text-zinc-200 font-mono text-xs tracking-wide mr-1 mb-1 hover:shadow-silver transition"
    )}>
      {children}
    </span>
  );
}
