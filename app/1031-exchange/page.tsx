import type { Metadata } from "next";
import Exchange1031Page from "@/components/Exchange1031Page";

export const metadata: Metadata = {
  title: "1031 Exchange Services | The Hoadley Group",
  description:
    "The Hoadley Group navigates 1031 exchanges for South Florida investors — identifying replacement properties within the 45-day window, coordinating with your QI, CPA, and title team, and closing on schedule. Barefoot Realty & Investments, FL BK3222885.",
  keywords: [
    "1031 exchange South Florida",
    "1031 exchange Palm Beach County",
    "replacement property identification",
    "investment real estate advisor Florida",
    "like-kind exchange real estate",
    "capital gains deferral real estate",
    "Barefoot Realty Investments 1031",
  ],
  openGraph: {
    title: "1031 Exchange Services | The Hoadley Group",
    description:
      "Navigate your 1031 exchange with a team that knows the South Florida inventory. We identify replacement properties fast, coordinate your full advisor team, and close without interruption.",
    type: "website",
  },
};

export default function Page() {
  return <Exchange1031Page />;
}
