
import { createContext, useContext, useRef, useState, ReactNode } from "react";

interface ContactFormDialogContextType {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const ContactFormDialogContext = createContext<ContactFormDialogContextType | undefined>(undefined);

export function useContactFormDialog() {
  const ctx = useContext(ContactFormDialogContext);
  if (!ctx) throw new Error("useContactFormDialog must be used within ContactFormDialogProvider");
  return ctx;
}

export function ContactFormDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <ContactFormDialogContext.Provider value={{ open, close, isOpen }}>
      {children}
    </ContactFormDialogContext.Provider>
  );
}
