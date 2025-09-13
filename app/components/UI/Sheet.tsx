import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../lib/utils";

export function Sheet({ children, ...props }: SheetPrimitive.DialogProps) {
  return <SheetPrimitive.Root {...props}>{children}</SheetPrimitive.Root>;
}

export function SheetTrigger({ children, ...props }: SheetPrimitive.DialogTriggerProps) {
  return <SheetPrimitive.Trigger {...props}>{children}</SheetPrimitive.Trigger>;
}

export function SheetContent({ children, className, ...props }: SheetPrimitive.DialogContentProps & { className?: string }) {
  return (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="fixed inset-0 bg-black/60 z-50" />
      <SheetPrimitive.Content
        {...props}
        className={cn(
          "fixed right-0 top-0 h-full w-80 bg-neutral-900 border-l border-zinc-700 shadow-lg z-50 p-6 transition-transform duration-300",
          className
        )}
      >
        {children}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  );
}
