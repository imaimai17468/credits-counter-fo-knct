import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="text-center text-muted-foreground text-sm md:text-left">
            <p>&copy; 2026 木更津高専単位カウンター</p>
            <p className="mt-1 text-xs">
              このツールは参考用です。正確な単位計算は学生課または担任教員にご確認ください。
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
            <Link
              href="/terms"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              利用規約
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              お問い合わせ
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
