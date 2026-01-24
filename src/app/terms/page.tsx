import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約",
  description: "木更津高専単位カウンターの利用規約",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div>
        <h1 className="font-bold text-3xl">利用規約</h1>
        <p className="mt-2 text-muted-foreground text-sm">
          最終更新日: 2026年1月24日
        </p>
      </div>

      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="font-semibold text-xl">第1条（サービスの目的）</h2>
          <p className="text-muted-foreground leading-relaxed">
            木更津高専単位カウンター（以下「本サービス」）は、木更津工業高等専門学校の学生が卒業に必要な単位数を計算するための参考ツールです。本サービスは情報提供を目的としており、正式な単位認定や卒業判定を行うものではありません。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">第2条（免責事項）</h2>
          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p>
              1.
              本サービスで提供される単位計算結果は参考情報であり、その正確性、完全性、最新性について保証するものではありません。
            </p>
            <p>
              2.
              カリキュラムの変更、履修規則の改定、データの入力ミス等により、実際の単位数と計算結果が異なる場合があります。
            </p>
            <p>
              3.
              本サービスの利用により生じた一切の損害について、運営者は責任を負いません。
            </p>
            <p>
              4.
              最終的な単位数の確認および卒業要件の判定は、必ず学生課または担任教員に行ってください。
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">第3条（データの正確性）</h2>
          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p>
              1.
              本サービスで使用するカリキュラムデータは、公開情報を元に作成していますが、データの更新頻度や正確性について保証するものではありません。
            </p>
            <p>
              2.
              データに誤りを発見した場合は、お問い合わせページよりご連絡ください。
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">
            第4条（サービスの変更・中断）
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            運営者は、事前の通知なく本サービスの内容を変更、追加、削除、または本サービスの提供を中断・終了することがあります。これにより利用者に生じた損害について、運営者は責任を負いません。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">第5条（禁止事項）</h2>
          <div className="space-y-2 text-muted-foreground leading-relaxed">
            <p>利用者は以下の行為を行ってはなりません。</p>
            <p>1. 法令または公序良俗に違反する行為</p>
            <p>2. 本サービスの運営を妨害する行為</p>
            <p>3. 本サービスの情報を不正に改ざんする行為</p>
            <p>4. その他、運営者が不適切と判断する行為</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">第6条（著作権）</h2>
          <p className="text-muted-foreground leading-relaxed">
            本サービスに含まれるコンテンツ（テキスト、画像、プログラムなど）の著作権は運営者に帰属します。私的使用の範囲を超えた複製、転載、配布等は禁止します。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">第7条（準拠法・管轄裁判所）</h2>
          <p className="text-muted-foreground leading-relaxed">
            本規約の解釈は日本法に準拠し、本サービスに関する紛争については、運営者の所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-semibold text-xl">第8条（規約の変更）</h2>
          <p className="text-muted-foreground leading-relaxed">
            運営者は、必要に応じて本規約を変更することがあります。変更後の規約は、本サービス上に掲載した時点で効力を生じるものとします。
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
