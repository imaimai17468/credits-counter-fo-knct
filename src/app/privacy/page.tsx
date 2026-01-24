import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "木更津高専単位カウンターのプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="font-bold text-3xl">プライバシーポリシー</h1>
        <p className="mt-2 text-muted-foreground text-sm">
          最終更新日: 2026年1月24日
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="font-semibold text-xl">1. 基本方針</h2>
          <p className="text-muted-foreground leading-relaxed">
            木更津高専単位カウンター（以下「本サービス」）は、利用者のプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーは、本サービスにおける情報の取り扱いについて説明するものです。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">2. 収集する情報</h2>
          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p className="font-medium">2.1 個人を特定しない情報</p>
            <p>
              本サービスは、以下の情報をブラウザのローカルストレージ（localStorage）に保存します。
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li>
                履修科目のチェック状態（どの科目にチェックが入っているか）
              </li>
              <li>特別学修・資格認定のチェック状態</li>
              <li>選択中の学科（機械/電気電子/電子制御/情報/環境都市）</li>
              <li>
                テーマ設定（ライトモード/ダークモード/システム設定に従う）
              </li>
            </ul>
            <p className="mt-2">
              これらの情報は、お使いのブラウザ内にのみ保存され、外部のサーバーには送信されません。また、これらの情報から個人を特定することはできません。
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">3. 個人情報について</h2>
          <p className="text-muted-foreground leading-relaxed">
            本サービスは、氏名、メールアドレス、学籍番号などの個人情報を収集・保存・送信することはありません。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">4. Cookieについて</h2>
          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p>
              本サービスは、テーマ設定（ライトモード/ダークモード）の保存にCookieを使用する場合があります。これらのCookieは個人を特定する情報を含みません。
            </p>
            <p>
              ブラウザの設定でCookieを無効にすることができますが、その場合、テーマ設定が保存されない可能性があります。
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">5. アクセス解析ツール</h2>
          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p>
              現在、本サービスはGoogle
              Analyticsなどのアクセス解析ツールを使用していません。
            </p>
            <p>
              将来的にアクセス解析ツールを導入する場合は、本プライバシーポリシーを更新し、その旨を明記します。
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">6. 第三者への情報提供</h2>
          <p className="text-muted-foreground leading-relaxed">
            本サービスは、利用者の情報を第三者に提供、開示、共有することはありません。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">7. データの保存期間</h2>
          <p className="text-muted-foreground leading-relaxed">
            localStorageに保存されたデータは、利用者がブラウザのデータを削除するか、本サービス上で「全解除」ボタンを使用するまで保存されます。運営者側でデータを削除することはできません。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">8. セキュリティ</h2>
          <p className="text-muted-foreground leading-relaxed">
            本サービスは、利用者の情報を保護するために適切なセキュリティ対策を講じていますが、インターネット通信の性質上、完全な安全性を保証するものではありません。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">9. 未成年者の利用</h2>
          <p className="text-muted-foreground leading-relaxed">
            本サービスは、保護者の同意なく未成年者から個人情報を収集することはありません。本サービスは個人情報を収集しないため、年齢に関わらず安全にご利用いただけます。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">
            10. プライバシーポリシーの変更
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            運営者は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、本サービス上に掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">11. お問い合わせ</h2>
          <p className="text-muted-foreground leading-relaxed">
            本プライバシーポリシーに関するご質問は、
            <Link href="/contact" className="text-primary hover:underline">
              お問い合わせページ
            </Link>
            よりご連絡ください。
          </p>
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
