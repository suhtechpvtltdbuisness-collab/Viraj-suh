// Google Analytics tracking utilities

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track custom events
export const trackGoldCheck = (goldType: string, weight: number) => {
  event({
    action: "gold_check_submitted",
    category: "User Interaction",
    label: goldType,
    value: weight,
  });
};

export const trackContactForm = (inquiryType: string) => {
  event({
    action: "contact_form_submitted",
    category: "Lead Generation",
    label: inquiryType,
  });
};

export const trackLoanCalculation = (amount: number) => {
  event({
    action: "loan_calculation",
    category: "User Interaction",
    label: "Loan Calculator",
    value: amount,
  });
};

export const trackGoldSellRequest = (goldType: string) => {
  event({
    action: "gold_sell_request",
    category: "Lead Generation",
    label: goldType,
  });
};

export const trackPhoneClick = () => {
  event({
    action: "phone_click",
    category: "User Interaction",
    label: "Contact Phone",
  });
};

export const trackWhatsAppClick = () => {
  event({
    action: "whatsapp_click",
    category: "User Interaction",
    label: "WhatsApp Contact",
  });
};

// Declare gtag type for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}
