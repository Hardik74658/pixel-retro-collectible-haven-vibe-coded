import React, { createContext, useContext, useState, ReactNode } from "react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextProps {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType = "info") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        className="fixed top-4 right-4 z-50 flex flex-col gap-3"
        style={{ pointerEvents: "none" }}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`px-4 py-2 rounded-lg shadow-lg pixel-border animate-slide-in
              ${toast.type === "success" ? "bg-retro-green text-white glow" : ""}
              ${toast.type === "error" ? "bg-retro-red text-white glow" : ""}
              ${toast.type === "info" ? "bg-retro-blue text-white glow" : ""}
            `}
            role="alert"
          >
            <span className="font-pixel">{toast.message}</span>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
