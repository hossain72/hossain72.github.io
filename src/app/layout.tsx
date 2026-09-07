import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md. Anowar Hossain | Senior Mobile App Developer (Flutter & Kotlin)",
  description: "Senior Mobile Engineer with 5+ years building scalable, high-performance Flutter and native Android (Kotlin) apps. Clean Architecture advocate, 10+ published apps, 2x Best Developer award winner.",
  keywords: ["Flutter Developer", "Android Developer", "Kotlin", "Clean Architecture", "Mobile App Developer", "Anowar Hossain"],
  authors: [{ name: "Md. Anowar Hossain" }],
  openGraph: {
    title: "Md. Anowar Hossain - Senior Mobile App Developer",
    description: "Crafting scalable, high-performance mobile experiences with Flutter & Kotlin.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070a13" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
