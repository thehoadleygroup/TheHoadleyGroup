import type { Metadata } from "next";
import HoadleyGroupHome from "@/components/HoadleyGroupHome";

export const metadata: Metadata = {
  title: "The Hoadley Group | Barefoot Realty & Investments · South Florida",
  description:
    "The Hoadley Group is a South Florida real estate platform — waterfront luxury, commercial investment, distressed acquisitions, family advisory, and construction. Benjamin Hoadley, FL BK3222885.",
  openGraph: {
    title: "The Hoadley Group",
    description:
      "Five platforms. One broker. South Florida's most complete real estate advisory.",
    type: "website",
  },
};

export default function HomePage() {
  return <HoadleyGroupHome />;
}
