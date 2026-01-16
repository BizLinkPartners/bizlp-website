import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Privacy() {
  return (
    <Layout
      title="個人情報保護方針 | 株式会社ビズリンクパートナーズ"
      description="株式会社ビズリンクパートナーズの個人情報保護方針"
    >
      <div className="min-h-screen bg-white">
        <div className="container-responsive py-24">
          <ScrollAnimation>
            <h1 className="heading-1 mb-16 text-center">
              個人情報保護方針
            </h1>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto space-y-12">
            {/* 導入文 */}
            <ScrollAnimation delay={0.1}>
              <p className="body-text">
                株式会社ビズリンクパートナーズ（以下「当社」といいます。）は、「個人情報の保護に関する法律」（以下「個人情報保護法」といいます。）に基づく個人情報の適正な取扱いの確保について取り組むため、以下のとおりプライバシーポリシー（以下「本件ポリシー」といいます。）を定めます。
              </p>
            </ScrollAnimation>

            {/* 1. 当社の名称・住所・代表者の氏名 */}
            <ScrollAnimation delay={0.2}>
              <section>
                <h2 className="heading-3 mb-6">
                  1. 当社の名称・住所・代表者の氏名
                </h2>
                <div className="body-text space-y-1">
                  <p>株式会社ビズリンクパートナーズ</p>
                  <p>福井県越前市幸町５番１０号</p>
                  <p>代表取締役　齋藤達希</p>
                </div>
              </section>
            </ScrollAnimation>

            {/* 2. 個人情報・個人データの定義 */}
            <ScrollAnimation delay={0.3}>
              <section>
                <h2 className="heading-3 mb-6">
                  2. 個人情報・個人データの定義
                </h2>
                <ol className="space-y-4 body-text">
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">(1)</span>
                    <span>個人情報とは、生存する個人に関する情報であって、当該情報に含まれる氏名、住所、生年月日等により特定の個人を識別することができるものをいいます。個人識別符号（個人情報保護法第2条第2項）が含まれる情報も含みます。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">(2)</span>
                    <span>個人データとは、個人情報データベース等（個人情報保護法第16条第1項）を構成する個人情報をいいます。</span>
                  </li>
                </ol>
              </section>
            </ScrollAnimation>

            {/* 3. 関係法令等の遵守 */}
            <ScrollAnimation delay={0.4}>
              <section>
                <h2 className="heading-3 mb-6">
                  3. 関係法令等の遵守
                </h2>
                <p className="body-text">
                  当社は、個人情報保護法その他の法令及び個人情報保護委員会のガイドラインその他のガイドラインを遵守し、個人情報の適正な取扱いを行います。
                </p>
              </section>
            </ScrollAnimation>

            {/* 4. 個人情報の取得・利用 */}
            <ScrollAnimation delay={0.5}>
              <section>
                <h2 className="heading-3 mb-6">
                  4. 個人情報の取得・利用
                </h2>
                <div className="body-text space-y-4">
                  <p>
                    当社は、個人情報を取得する際には、利用目的を公表または通知し（本件ポリシーによる公表を含みます。）、また、直接本人から契約書その他の書面（電磁的記録を含みます。）に記載された個人情報を取得する場合にはあらかじめ利用目的を明示し、適法かつ公正な手段によって取得します。
                  </p>
                  <p>
                    当社は、利用目的達成に必要な範囲で、適正に個人情報を利用します。
                  </p>
                </div>
              </section>
            </ScrollAnimation>

            {/* 5. 個人情報を利用する目的 */}
            <ScrollAnimation delay={0.6}>
              <section>
                <h2 className="heading-3 mb-6">
                  5. 個人情報を利用する目的
                </h2>
                <p className="body-text mb-6">
                  当社が個人情報を利用する目的は、以下のとおりです。
                </p>

                {/* (1) お客様に関する個人情報 */}
                <div className="mb-6">
                  <p className="body-text font-medium mb-3">(1) お客様に関する個人情報</p>
                  <ol className="space-y-2 body-text pl-6">
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">①</span>
                      <span>お客様との各種契約の履行、商談・お打ち合わせ、商品等の発送および代金の請求のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">②</span>
                      <span>当社のサービス・商品・イベント・キャンペーン・講演会等に関するご案内、新サービスおよびアフターサービスの提供のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">③</span>
                      <span>お問い合わせ・ご相談への対応、確認および記録のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">④</span>
                      <span>商品開発・サービス向上のための調査・分析（アンケート等の実施を含む）のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">⑤</span>
                      <span>当社施設の入退館管理、および監査対応のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">⑥</span>
                      <span>上記各号に付随する目的のため</span>
                    </li>
                  </ol>
                </div>

                {/* (2) お取引先に関する個人情報 */}
                <div className="mb-6">
                  <p className="body-text font-medium mb-3">(2) お取引先に関する個人情報</p>
                  <ol className="space-y-2 body-text pl-6">
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">①</span>
                      <span>お取引先様に対する業務上のご連絡、各種契約の履行、および商談・お打ち合わせのため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">②</span>
                      <span>お取引先情報の管理、発注・請求・支払等の処理のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">③</span>
                      <span>当社の商品開発・サービス向上のための調査・分析のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">④</span>
                      <span>当社のサービスのご提供、新サービス等のご案内のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">⑤</span>
                      <span>当社施設の入退館管理、および監査対応のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">⑥</span>
                      <span>官公庁等への届出・報告・申請等のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">⑦</span>
                      <span>上記各号に付随する目的のため</span>
                    </li>
                  </ol>
                </div>

                {/* (3) 採用・募集活動応募者の方に関する個人情報 */}
                <div className="mb-6">
                  <p className="body-text font-medium mb-3">(3) 採用・募集活動応募者の方に関する個人情報</p>
                  <ol className="space-y-2 body-text pl-6">
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">①</span>
                      <span>採用選考業務（面接・試験のご案内、選考結果の通知等）および各種ご連絡のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">②</span>
                      <span>採用決定後の入社手続、準備等のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">③</span>
                      <span>当社の採用活動における分析・改善、将来の採用計画策定のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">④</span>
                      <span>当社施設への入退館管理、および監査対応のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">⑤</span>
                      <span>上記各号に付随する目的のため</span>
                    </li>
                  </ol>
                </div>

                {/* (4) 当社の従業者に関する個人情報 */}
                <div>
                  <p className="body-text font-medium mb-3">(4) 当社の従業者に関する個人情報</p>
                  <ol className="space-y-2 body-text pl-6">
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">①</span>
                      <span>人事労務管理（人事考課、配置、異動、研修等）、賃金・賞与等の支払い、および退職手続のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">②</span>
                      <span>税務・社会保険・福利厚生手続、および官公庁への届出・報告のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">③</span>
                      <span>労働組合、健康保険組合、企業年金基金、関係会社、出向先等への連絡・提供のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">④</span>
                      <span>担当業務におけるお客様・お取引先様への届出・報告・連絡、および緊急時の連絡のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">⑤</span>
                      <span>当社施設の入退館管理、および監査対応のため</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">⑥</span>
                      <span>その他業務上必要な諸手続および連絡等のため</span>
                    </li>
                  </ol>
                </div>
              </section>
            </ScrollAnimation>

            {/* 6. 個人データの第三者提供 */}
            <ScrollAnimation delay={0.7}>
              <section>
                <h2 className="heading-3 mb-6">
                  6. 個人データの第三者提供
                </h2>

                {/* (1) */}
                <div className="mb-6">
                  <p className="body-text mb-3">(1) 当社は、次に掲げる場合を除いて、あらかじめ本人の同意を得ることなく、第三者に個人データを提供することはありません。</p>
                  <ol className="space-y-2 body-text pl-6">
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">①</span>
                      <span>法令（条例を含みます。）に基づく場合</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">②</span>
                      <span>人の生命、身体または財産の保護のために必要がある場合であって、ご本人の同意を得ることが困難であるとき</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">③</span>
                      <span>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、ご本人の同意を得ることが困難であるとき</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">④</span>
                      <span>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ご本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">⑤</span>
                      <span>学術研究機関等に個人データを提供する場合であって、当該学術研究機関等が当該個人データを学術研究目的で取扱う必要があるとき（当該個人データを取扱う目的の一部が学術研究目的である場合を含み、個人の権利利益を不当に侵害するおそれがある場合を除きます。）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">⑥</span>
                      <span>あらかじめ法令上必要な事項を通知または公表し、かつ当社が個人情報保護委員会に届出をしたとき</span>
                    </li>
                  </ol>
                </div>

                {/* (2) */}
                <div>
                  <p className="body-text mb-3">(2) 次に掲げる場合には、当該個人データの提供先は第三者に該当しません。</p>
                  <ol className="space-y-2 body-text pl-6">
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">①</span>
                      <span>当社が利用目的の達成に必要な範囲内において個人データの取扱いの全部または一部を委託する場合</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 flex-shrink-0">②</span>
                      <span>合併その他の事由による事業の承継に伴って個人データが提供される場合</span>
                    </li>
                  </ol>
                </div>
              </section>
            </ScrollAnimation>

            {/* 7. 安全管理措置に関する事項 */}
            <ScrollAnimation delay={0.8}>
              <section>
                <h2 className="heading-3 mb-6">
                  7. 安全管理措置に関する事項
                </h2>
                <div className="body-text space-y-4">
                  <p>
                    当社は、個人データ（当社が取得し、又は取得しようとしている個人情報であって、当社が個人データとして取り扱うことを予定しているものを含みます。以下本条において同じです。）について、漏えい、滅失または毀損の防止等、その管理のために必要かつ適切な安全管理措置を講じます。また、個人データを取扱う従業者や委託先に対して、必要かつ適切な監督を行います。
                  </p>
                  <p>
                    当社が講ずる個人データの安全管理措置は、「個人情報等取扱規程」において具体的に定めておりますが、主な内容は以下のとおりです。
                  </p>
                </div>

                <div className="mt-6 space-y-6">
                  {/* (1) 基本方針の策定 */}
                  <div>
                    <p className="body-text font-medium mb-2">（1）基本方針の策定</p>
                    <p className="body-text pl-6">
                      個人データの適正な取扱いの確保のため、「関係法令・ガイドライン等の遵守」、「質問及び苦情処理の窓口」等についての基本方針（本プライバシーポリシー）を策定しています。
                    </p>
                  </div>

                  {/* (2) 個人データの取扱いに係る規律の整備 */}
                  <div>
                    <p className="body-text font-medium mb-2">（2）個人データの取扱いに係る規律の整備</p>
                    <p className="body-text pl-6">
                      取得、利用、保存、提供、削除・廃棄等の段階ごとに、取扱方法、責任者・担当者及びその任務等について定めた個人情報取扱規程を策定しています。
                    </p>
                  </div>

                  {/* (3) 組織的安全管理措置 */}
                  <div>
                    <p className="body-text font-medium mb-2">（3）組織的安全管理措置</p>
                    <ol className="space-y-2 body-text pl-6">
                      <li className="flex items-start">
                        <span className="mr-3 flex-shrink-0">①</span>
                        <span>個人データの取扱いに関する責任者（個人情報保護管理者）を設置しています。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 flex-shrink-0">②</span>
                        <span>個人データを取り扱う従業者及び当該従業者が取り扱う個人データの範囲を明確化しています。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 flex-shrink-0">③</span>
                        <span>法や社内規程に違反している事実又は兆候を把握した場合の責任者への報告連絡体制を整備しています。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 flex-shrink-0">④</span>
                        <span>個人データの取扱状況について、定期的に自己点検を実施するとともに、他部署や外部の者による監査を実施しています。</span>
                      </li>
                    </ol>
                  </div>

                  {/* (4) 人的安全管理措置 */}
                  <div>
                    <p className="body-text font-medium mb-2">（4）人的安全管理措置</p>
                    <ol className="space-y-2 body-text pl-6">
                      <li className="flex items-start">
                        <span className="mr-3 flex-shrink-0">①</span>
                        <span>個人データの取扱いに関する留意事項について、従業者に定期的な研修を実施しています。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 flex-shrink-0">②</span>
                        <span>個人データについての秘密保持に関する事項を就業規則に記載しています。</span>
                      </li>
                    </ol>
                  </div>

                  {/* (5) 物理的安全管理措置 */}
                  <div>
                    <p className="body-text font-medium mb-2">（5）物理的安全管理措置</p>
                    <ol className="space-y-2 body-text pl-6">
                      <li className="flex items-start">
                        <span className="mr-3 flex-shrink-0">①</span>
                        <span>個人データを取り扱う区域において、従業者の入退室管理及び持ち込む機器等の制限を行うとともに、権限を有しない者による個人データの閲覧を防止する措置を実施しています。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 flex-shrink-0">②</span>
                        <span>個人データを取り扱う機器、電子媒体及び書類等の盗難又は紛失等を防止するための措置を講じています。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 flex-shrink-0">③</span>
                        <span>個人データが記録された機器、電子媒体等を廃棄する場合は、復元不可能な手段によって削除または破壊しています。</span>
                      </li>
                    </ol>
                  </div>

                  {/* (6) 技術的安全管理措置 */}
                  <div>
                    <p className="body-text font-medium mb-2">（6）技術的安全管理措置</p>
                    <ol className="space-y-2 body-text pl-6">
                      <li className="flex items-start">
                        <span className="mr-3 flex-shrink-0">①</span>
                        <span>アクセス制御を実施して、担当者及び取り扱う個人情報データベース等の範囲を限定しています。</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 flex-shrink-0">②</span>
                        <span>個人データを取り扱う情報システムを外部からの不正アクセス又は不正ソフトウェアから保護する仕組みを導入しています。</span>
                      </li>
                    </ol>
                  </div>

                  {/* (7) 外的環境の把握 */}
                  <div>
                    <p className="body-text font-medium mb-2">（7）外的環境の把握</p>
                    <p className="body-text pl-6">
                      個人データを外国にあるサーバ等に保管する場合、当該国における個人情報の保護に関する制度を把握した上で、適切な安全管理措置を実施しています。
                    </p>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* 8. 個人情報の開示等の請求 */}
            <ScrollAnimation delay={0.9}>
              <section>
                <h2 className="heading-3 mb-6">
                  8. 個人情報の開示等の請求
                </h2>
                <p className="body-text">
                  当社は、当社の有する保有個人データについて、個人情報保護法に基づきご本人から開示、訂正・追加・削除、利用停止・消去、第三者提供の停止または利用目的の通知にかかる請求があったときは、所定の手続に基づいて、ご本人または代理権限を有する者であることを確認の上、個人情報保護法に従い、適切に対応します。
                </p>
              </section>
            </ScrollAnimation>

            {/* 9. 問い合わせ窓口 */}
            <ScrollAnimation delay={1.0}>
              <section>
                <h2 className="heading-3 mb-6">
                  9. 問い合わせ窓口
                </h2>
                <p className="body-text mb-4">
                  当社における個人データの取扱いに関するお問い合わせや苦情に関しては、下記の窓口までお願いいたします。
                </p>
                <div className="body-text space-y-1">
                  <p>〒915-0075 福井県越前市幸町５番１０号</p>
                  <p>個人情報保護管理者：代表取締役　齋藤達希</p>
                  <p>Eメールアドレス：privacy@bizlp.co.jp</p>
                </div>
              </section>
            </ScrollAnimation>

            {/* 10. プライバシーポリシーの変更 */}
            <ScrollAnimation delay={1.1}>
              <section>
                <h2 className="heading-3 mb-6">
                  10. プライバシーポリシーの変更
                </h2>
                <p className="body-text">
                  当社は必要に応じて、本件ポリシーの内容を変更することがあります。なお、当社が本件ポリシーを変更するときは、ウェブサイト上に変更する旨を表示し、サイトに掲載された時から効力が発生するものとします。
                </p>
              </section>
            </ScrollAnimation>

            {/* 制定日・最終改定日 */}
            <ScrollAnimation delay={1.2}>
              <div className="body-text text-right space-y-1">
                <p>制定日：2026年4月1日</p>
                <p>最終改定日：2026年4月1日</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Layout>
  );
}
