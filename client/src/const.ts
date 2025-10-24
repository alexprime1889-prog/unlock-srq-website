export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const APP_TITLE = import.meta.env.VITE_APP_TITLE || "Unlock SRQ LLC - Professional Locksmith Services";

export const APP_LOGO =
  import.meta.env.VITE_APP_LOGO || "/logo.png";

// Generate login URL at runtime so redirect URI reflects the current origin.
// This locksmith website doesn't use OAuth, so this function returns a placeholder
export const getLoginUrl = () => {
  // OAuth not used in this locksmith website
  return "#";
};