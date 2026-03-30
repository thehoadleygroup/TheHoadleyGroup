import type { Metadata } from "next";
import STRManagementPage from "@/components/STRManagementPage";

export const metadata: Metadata = {
  title: "Short-Term Rental Management | The Hoadley Group",
  description:
    "Elite short-term rental management for destination properties in South Florida and Finger Lakes. Dynamic pricing, professional photography, multi-platform distribution, and direct booking strategy. The Hoadley Group — Barefoot Realty & Investments, FL BK3222885.",
  keywords: [
    "short-term rental management South Florida",
    "vacation rental management Palm Beach",
    "STR management Seneca Lake",
    "Finger Lakes vacation rental management",
    "Airbnb property management Florida",
    "luxury vacation rental management",
    "direct booking vacation rental",
    "Barefoot Realty Investments rental management",
  ],
  openGraph: {
    title: "Short-Term Rental Management | The Hoadley Group",
    description:
      "We manage elite destination properties — waterfront, architecturally significant, destination-unique. Full-service STR management with direct booking strategy and monthly performance reporting.",
    type: "website",
  },
};

export default function Page() {
  return <STRManagementPage />;
}
