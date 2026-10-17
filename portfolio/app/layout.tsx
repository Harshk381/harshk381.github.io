import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "Harsh Khandelwal — Software Engineer specializing in test automation (SDET). Java, Selenium, Cucumber BDD, REST Assured, Jenkins CI/CD. Based in Pune, India.";

export const metadata: Metadata = {
  title: "Harsh Khandelwal | Software Engineer · Test Automation (SDET)",
  description,
  keywords: ["SDET", "QA Automation Engineer", "Selenium", "Java", "Cucumber BDD", "REST Assured", "Jenkins", "Pune"],
  authors: [{ name: "Harsh Khandelwal" }],
  openGraph: { title: "Harsh Khandelwal | Software Engineer · Test Automation", description, type: "website" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#05070d", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
