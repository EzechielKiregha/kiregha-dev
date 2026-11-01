import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
// QueryClient is provided by TanstackProvider
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TanstackProvider } from "@/providers/TanstackProvider";
import { ThemeProvider } from "next-themes";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kiregha.tech"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  title: "Kambale Kiregha Ezéchiel — Software Engineer",
  description:
    "Software engineer focused on backend and full-stack business applications: commerce platforms, POS, ERP and management software.",
  keywords: ["portfolio", "software engineer", "backend", "full-stack", "Kigali"],
  authors: [{ name: "Kambale Kiregha Ezéchiel", url: "https://github.com/EzechielKiregha" }],
  alternates: { canonical: "https://www.kiregha.tech" },
  openGraph: {
    title: "Kambale Kiregha Ezéchiel — Software Engineer",
    description: "Software engineer focused on backend and full-stack business applications.",
    url: "https://www.kiregha.tech",
    siteName: "Kiregha Portfolio",
    type: "website",
  },
  robots: { index: true, follow: true },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased font-mono`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TanstackProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <main className="flex-1">{children}</main>
            </TooltipProvider>
          </TanstackProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
