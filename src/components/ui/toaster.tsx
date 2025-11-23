"use client";

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { CheckCircle2 } from "lucide-react";

const ToastProvider = ToastPrimitive.Provider;
const ToastViewport = ToastPrimitive.Viewport;

const ToastRoot = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitive.Root
      ref={ref}
      className={`fixed bottom-8 right-8 bg-[#06B6D4] text-white p-4 rounded-xl shadow-lg flex items-center space-x-3 max-w-xs w-full z-50 ${className || ""}`}
      {...props}
    />
  );
});
ToastRoot.displayName = ToastPrimitive.Root.displayName;

const ToastTitle = ToastPrimitive.Title;
const ToastDescription = ToastPrimitive.Description;

const ToastClose = ToastPrimitive.Close;

export const Toaster = () => {
  return (
    <ToastProvider swipeDirection="right">
      <ToastRoot>
        <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0" />
        <ToastDescription className="flex-1">This is a toast message</ToastDescription>
        <ToastClose className="text-white hover:text-gray-300 focus:outline-none">
          &#x2715;
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastProvider>
  );
};
