import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";

// Placeholder. This becomes the logged-in dashboard (profile, orders, addresses)
// once Auth.js is connected. Until then, visitors are sent to the login page.
export default function AccountPage() {
  redirect(routes.login);
}
