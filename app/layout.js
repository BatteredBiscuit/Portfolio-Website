import "./globals.css";

import { Inter } from "next/font/google";

// ... other imports

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Hayden O'Neill | Portfolio",
    template: "%s | Hayden O'Neill",
  },
  description:
    "Portfolio website of Hayden O'Neill, showcasing projects, skills, and experience in web development.",
  keywords: [
    "portfolio",
    "web developer",
    "developer",
    "projects",
    "skills",
    "Hayden O'Neill",
  ],
  creator: "Hayden O'Neill",
  publisher: "Hayden O'Neill",
  openGraph: {
    title: "Hayden O'Neill | Portfolio",
    description:
      "Portfolio website of Hayden O'Neill, showcasing projects, skills, and experience in web development.",
    url: "https://hayden-oneill.io",
    siteName: "Hayden O'Neill Portfolio",
    images: [
      {
        url: "https://hayden-oneill.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hayden O'Neill Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hayden O'Neill | Portfolio",
    description:
      "Portfolio website of Hayden O'Neill, showcasing projects, skills, and experience in web development.",
    images: ["https://hayden-oneill.io/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://hayden-oneill.io"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://hayden-oneill.io" />{" "}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
