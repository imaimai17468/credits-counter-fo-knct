import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "木更津高専単位カウンターへのお問い合わせ",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="font-bold text-3xl">お問い合わせ</h1>
        <p className="mt-2 text-muted-foreground">
          本サービスに関するご質問、ご意見、データの誤りの報告は、以下の方法でお問い合わせください。
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-4">
          <h2 className="font-semibold text-xl">Twitterでのお問い合わせ</h2>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-8 fill-current text-primary"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <div>
                <p className="font-semibold">@imaimai17468</p>
                <p className="text-muted-foreground text-sm">
                  TwitterのDMまたはメンションでご連絡ください
                </p>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="https://twitter.com/imaimai17468"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90"
              >
                Twitterで連絡する
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">お問い合わせ内容について</h2>
          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p>以下のような内容について、お気軽にお問い合わせください。</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>カリキュラムデータの誤り・更新情報</li>
              <li>単位計算の不具合や表示の問題</li>
              <li>機能改善のご提案</li>
              <li>その他、本サービスに関するご質問・ご意見</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">注意事項</h2>
          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p>
              ・個別の単位認定や卒業判定に関するご質問には回答できません。学生課または担任教員にご確認ください。
            </p>
            <p>
              ・お問い合わせへの回答には、数日お時間をいただく場合がございます。
            </p>
            <p>
              ・本サービスは個人が運営しているため、全てのお問い合わせに回答できない場合がございます。予めご了承ください。
            </p>
          </div>
        </section>
      </div>

      <div className="border-t pt-8">
        <Link href="/" className="text-primary hover:underline">
          ← トップページに戻る
        </Link>
      </div>
    </div>
  );
}
