import { redirect } from "next/navigation";

// This page has been consolidated into /loc-installation.
// The next.config.ts redirect handles the server-level 308,
// but this serves as a fallback for client-side navigation.
export default function LocInstallProcessPage() {
  redirect("/loc-installation");
}
