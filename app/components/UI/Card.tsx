import { cn } from "../../lib/utils";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn(
      "rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-zinc-400 hover:shadow-md transition p-6"
    )}>
      {children}
    </div>
  );
}
