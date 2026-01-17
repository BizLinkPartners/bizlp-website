import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Recruit() {
  return (
    <Layout title="採用情報 | 株式会社ビズリンクパートナーズ" description="株式会社ビズリンクパートナーズの採用情報・募集要項">
      <div className="min-h-screen bg-white">

        {/* 待遇・休日 Section */}
        <section className="bg-white py-20 md:py-32">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-12 text-center">
                待遇・休日
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="overflow-hidden border border-gray-200">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base w-1/3 align-top">
                        職種
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        ITコンサルタントおよびPM/PMO職
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base align-top">
                        雇用形態
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        正社員
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base align-top">
                        勤務地
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        福井県越前市　※原則転勤はありませんが希望に応じて東京勤務も選択可能
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base align-top">
                        就業時間
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        フルフレックス
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base align-top">
                        必要な資格・免許
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        普通運転免許
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base align-top">
                        休日・休暇
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        完全週休2日制（土・日）、祝日、GW、夏季、年末年始など（年間128日程度）、年次有給休暇、特別有給休暇（慶弔など）、産前産後休暇、育児休暇、リフレッシュ休暇など
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base align-top">
                        福利厚生
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        各種社会保険
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base align-top">
                        給与
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        当社規定により決定 ※ご本人の経験・スキルを考慮し決定
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base align-top">
                        諸手当
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        通勤費（全額支給）、時間外勤務手当、宿泊出張手当など
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base align-top">
                        賞与・昇給
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        賞与年1回（8月決算賞与）
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base align-top">
                        研修制度
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>ビジネス、IT / AI、リーガルマインド育成、PM/PMO育成、コンサルタントスキル獲得 等の社内研修</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>その他外部講習会費用補助、各種通信教育受講費補助など</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base align-top">
                        加入保険
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        健康保険、厚生年金、雇用保険、労災保険
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* 応募資格 Section */}
        <section className="bg-white py-20 md:py-32">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-12 text-center">
                応募資格
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div>
                <p className="text-sm md:text-base font-light mb-6">以下のすべての条件を満たす方</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm md:text-base font-light">原則として2002年4月2日以降（個別相談に応じます）に生まれの方</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm md:text-base font-light">国内外の4年制大学を卒業または2027年3月までに卒業見込みか、同程度の学力を有する方</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-sm md:text-base font-light">新卒・既卒、学部・学科は問いません。現在、社会人の方も歓迎</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* 応募方法 Section */}
        <section className="bg-white py-20 md:py-32">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-12 text-center">
                応募方法
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div>
                <p className="text-sm md:text-base font-light mb-6">以下の手順にてお願いします。</p>
                <ol className="space-y-3 mb-10">
                  <li className="flex items-start">
                    <span className="text-sm md:text-base font-light text-[#554C51] mr-2 flex-shrink-0">STEP1）</span>
                    <span className="text-sm md:text-base font-light">MY PAGE登録</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm md:text-base font-light text-[#554C51] mr-2 flex-shrink-0">STEP2）</span>
                    <span className="text-sm md:text-base font-light">WEBアンケートに回答して志望職種などを決定</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm md:text-base font-light text-[#554C51] mr-2 flex-shrink-0">STEP3）</span>
                    <span className="text-sm md:text-base font-light">エントリーシートをWEB入力して提出</span>
                  </li>
                </ol>

                <div className="border-t border-gray-200 pt-8">
                  <p className="text-sm md:text-base font-medium text-[#554C51] mb-4">問い合わせ先</p>
                  <div className="text-sm md:text-base font-light text-[#909397] space-y-1">
                    <p>株式会社ビズリンクパートナーズ</p>
                    <p>採用担当</p>
                    <p>Mail： recruit@bizlp.co.jp</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

      </div>
    </Layout>
  );
}
