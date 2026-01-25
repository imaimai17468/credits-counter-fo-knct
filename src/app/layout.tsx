import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/shared/footer/Footer";
import { Header } from "@/components/shared/header/Header";
import { ThemeProvider } from "@/components/shared/theme-provider/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://credits-counter-fo-knct.vercel.app"),
  title: {
    default: "木更津高専単位カウンター",
    template: "%s | 木更津高専単位カウンター",
  },
  description:
    "木更津工業高等専門学校の卒業に必要な単位数を計算するツールです。履修した科目にチェックを入れるだけで、一般科目・専門科目・特別学修の単位を自動計算します。機械工学科・電気電子工学科・電子制御工学科・情報工学科・環境都市工学科の全学科対応。",
  keywords: [
    "木更津高専",
    "木更津工業高等専門学校",
    "単位計算",
    "卒業単位",
    "KNCT",
    "高専",
    "単位カウンター",
    "履修管理",
    "機械工学科",
    "電気電子工学科",
    "電子制御工学科",
    "情報工学科",
    "環境都市工学科",
  ],
  authors: [{ name: "木更津高専単位カウンター" }],
  creator: "木更津高専単位カウンター",
  publisher: "木更津高専単位カウンター",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://credits-counter-fo-knct.vercel.app",
    title: "木更津高専単位カウンター",
    description:
      "木更津工業高等専門学校の卒業に必要な単位数を計算するツールです。履修した科目にチェックを入れるだけで、一般科目・専門科目・特別学修の単位を自動計算します。",
    siteName: "木更津高専単位カウンター",
    images: [
      {
        url: "/ogp-image.png",
        width: 1200,
        height: 630,
        alt: "木更津高専単位カウンター",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "木更津高専単位カウンター",
    description:
      "木更津工業高等専門学校の卒業に必要な単位数を計算するツールです。履修した科目にチェックを入れるだけで、単位を自動計算します。",
    images: ["/ogp-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className="antialiased"
        style={{
          fontFamily:
            '"Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", "メイリオ", Meiryo, "游ゴシック", YuGothic, sans-serif',
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-dvh flex-col">
            <Header />
            <div className="flex w-full flex-1 justify-center px-4 py-8 md:px-6">
              <div className="w-full max-w-5xl">{children}</div>
            </div>
            <Footer />
          </div>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
