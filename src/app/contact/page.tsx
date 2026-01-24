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

        <section className="space-y-4">
          <h2 className="font-semibold text-xl">GitHubでのお問い合わせ</h2>
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-8 fill-current text-primary"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <div>
                <p className="font-semibold">GitHub Issues</p>
                <p className="text-muted-foreground text-sm">
                  バグ報告や機能要望はGitHub Issuesでも受け付けています
                </p>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="https://github.com/imaimai17468/credits-counter-fo-knct"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/90"
              >
                GitHubリポジトリを見る
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
