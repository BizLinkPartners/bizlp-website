import { useState } from 'react';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Recruit() {
  // 募集要項アコーディオン開閉状態
  const [openJob, setOpenJob] = useState<string | null>(null);

  const toggleJob = (job: string) => {
    setOpenJob(openJob === job ? null : job);
  };

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

        {/* 選考の流れ Section */}
        <section className="bg-white py-20 md:py-32">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-12 text-center">
                選考の流れ
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div>
                <ol className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="text-sm md:text-base font-light text-[#554C51] mr-2 flex-shrink-0">STEP1）</span>
                    <span className="text-sm md:text-base font-light">エントリーシートにて書類選考を実施</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm md:text-base font-light text-[#554C51] mr-2 flex-shrink-0">STEP2）</span>
                    <span className="text-sm md:text-base font-light">WEBにて適性検査等の試験を実施</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm md:text-base font-light text-[#554C51] mr-2 flex-shrink-0">STEP3）</span>
                    <span className="text-sm md:text-base font-light">能力に関する面接選考（オンラインも可）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm md:text-base font-light text-[#554C51] mr-2 flex-shrink-0">STEP4）</span>
                    <span className="text-sm md:text-base font-light">社風との合致度に関する面接選考（対面のみ、交通費支給）</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm md:text-base font-light text-[#554C51] mr-2 flex-shrink-0">STEP5）</span>
                    <span className="text-sm md:text-base font-light">オファー面談</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sm md:text-base font-light text-[#554C51] mr-2 flex-shrink-0">STEP6）</span>
                    <span className="text-sm md:text-base font-light">オファーレター送付</span>
                  </li>
                </ol>
                <p className="text-xs md:text-sm font-light text-[#909397]">※各選考結果は通過/不通過にかかわらず5営業日以内にご連絡いたします</p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* 募集職種 Section */}
        <section className="bg-white py-20 md:py-32">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-12 text-center">
                募集職種
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm md:text-base font-light">募集職種A. AI・DXコンサルタント / PM（顧客折衝、要件定義、プロジェクト推進 等）</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm md:text-base font-light">募集職種B. AIエンジニア（データ分析、アルゴリズム構築・実装、小規模システム設計・実装）</span>
                </li>
              </ul>
            </ScrollAnimation>
          </div>
        </section>

        {/* 募集要項 Section */}
        <section className="bg-white py-20 md:py-32">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-12 text-center">
                募集要項
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="space-y-4">
                {/* 職種1: AI・DXコンサルタント / PM */}
                <div className="border border-gray-200">
                  <button
                    onClick={() => toggleJob('consultant')}
                    aria-expanded={openJob === 'consultant'}
                    aria-controls="consultant-content"
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base md:text-lg font-light text-[#554C51]">職種： AI・DXコンサルタント / PM</span>
                    <motion.svg
                      animate={{ rotate: openJob === 'consultant' ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-[#554C51]/60 flex-shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openJob === 'consultant' && (
                      <motion.div
                        id="consultant-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-8">
                          {/* 業務内容 */}
                          <div>
                            <h4 className="text-sm md:text-base font-medium text-[#554C51] mb-3">業務内容</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">クライアント（金融、公共、製造、小売等）の課題抽出およびAI/IT活用提案</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">プロジェクトマネジメント（要件定義、進捗管理、品質管理） 　等</span>
                              </li>
                            </ul>
                          </div>

                          {/* プロジェクトイメージ */}
                          <div>
                            <h4 className="text-sm md:text-base font-medium text-[#554C51] mb-3">プロジェクトイメージ</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">生成AI活用: 大手通信会社向け生成AIサービス提案・導入</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">業務効率化: 大手生命保険会社のコールセンター業務効率化（AI導入）</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">予測・最適化: 小売チェーン向け販売数予測・発注最適化AI導入</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">公共事業: 内閣機関や自治体との連携プロジェクト</span>
                              </li>
                            </ul>
                          </div>

                          {/* 必須スキル */}
                          <div>
                            <h4 className="text-sm md:text-base font-medium text-[#554C51] mb-3">必須スキル</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">論理的思考力・ドキュメンテーション能力: 抽象的な課題を整理し、資料（PowerPoint/Word等）に落とし込める力。「柔らかい事柄を具体化する力」に相当</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">プロジェクトマネジメント経験: 顧客とのQCD（品質・コスト・納期）調整、スケジュール管理、課題管理の実務経験</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">IT/AIに関する基礎リテラシー: エンジニアと会話ができ、ビジネス要件をシステム要件に翻訳できる能力</span>
                              </li>
                            </ul>
                          </div>

                          {/* 歓迎スキル */}
                          <div>
                            <h4 className="text-sm md:text-base font-medium text-[#554C51] mb-3">歓迎スキル</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">特定業界の業務知識: 金融（生損保・銀行）、小売（スーパー・ドラッグストア）、製造、公共・自治体等のドメイン知識</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">新規事業・サービス開発経験: 「0→1」のフェーズで、不確実な状況を楽しめる経験</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">フルスタック志向: フロントエンドからバックエンド、インフラまで幅広く興味を持てること（少人数組織のため）</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">管理会計・財務の知識: 「ファイナンスで考える力」を持ち、ビジネスの収益性を意識できること</span>
                              </li>
                            </ul>
                          </div>

                          {/* 求める人物像 */}
                          <div>
                            <h4 className="text-sm md:text-base font-medium text-[#554C51] mb-3">求める人物像</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">「コンサルタントの視点」でビジネス課題を捉え、「エンジニアの視点」で解決策を具現化したい方</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">言われたことだけをこなすのではなく、事業主視点で「どうすれば利益が出るか」「組織が強くなるか」を一緒に考えられる方</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">創業メンバーとして、会社のカルチャーや仕組み作りにも関わりたい方</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">業務品質への理解：大手通信会社や官公庁など、高い信頼性が求められるクライアントに対し、誠実かつ高品質対応を理解しよういう考えがある方</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">知的好奇心と探究心: 「24時間同じことを考え続ける」ような粘り強さや、新しい技術（生成AI等）へのキャッチアップ意欲</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">柔軟性とポジティブさ: 「困難な状況でも前向きかつ楽観的に物事を推進する力」。スタートアップ特有の変化やカオスを楽しめる姿勢</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">顧客志向: 技術そのものだけでなく、それを使って「顧客企業の生産性向上」や「実益」を生み出すことにこだわりを持てること</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 職種2: AIエンジニア */}
                <div className="border border-gray-200">
                  <button
                    onClick={() => toggleJob('engineer')}
                    aria-expanded={openJob === 'engineer'}
                    aria-controls="engineer-content"
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-base md:text-lg font-light text-[#554C51]">職種： AIエンジニア</span>
                    <motion.svg
                      animate={{ rotate: openJob === 'engineer' ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-[#554C51]/60 flex-shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {openJob === 'engineer' && (
                      <motion.div
                        id="engineer-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-8">
                          {/* 業務内容 */}
                          <div>
                            <h4 className="text-sm md:text-base font-medium text-[#554C51] mb-3">業務内容</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">AI/LLMを活用した新規サービス開発・実装</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">需要予測や最適化アルゴリズムの策定・モデル構築</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">データ分析および精度評価</span>
                              </li>
                            </ul>
                          </div>

                          {/* プロジェクトイメージ */}
                          <div>
                            <h4 className="text-sm md:text-base font-medium text-[#554C51] mb-3">プロジェクトイメージ</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">生成AI活用: 大手通信会社向け生成AIサービス提案・導入</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">業務効率化: 大手生命保険会社のコールセンター業務効率化（AI導入）</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">予測・最適化: 小売チェーン向け販売数予測・発注最適化AI導入</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">公共事業: 内閣機関や自治体との連携プロジェクト</span>
                              </li>
                            </ul>
                          </div>

                          {/* 必須スキル */}
                          <div>
                            <h4 className="text-sm md:text-base font-medium text-[#554C51] mb-3">必須スキル</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">データ分析・開発言語: Python、SQL等を用いた実務経験</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">AI・機械学習の実装経験: 需要予測、最適化アルゴリズム、またはLLM（大規模言語モデル）を活用したアプリケーション開発経験</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">自走力: 指示待ちではなく、自ら仮説を立てて検証（実装・分析）まで完結できる力</span>
                              </li>
                            </ul>
                          </div>

                          {/* 歓迎スキル */}
                          <div>
                            <h4 className="text-sm md:text-base font-medium text-[#554C51] mb-3">歓迎スキル</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">特定業界の業務知識: 金融（生損保・銀行）、小売（スーパー・ドラッグストア）、製造、公共・自治体等のドメイン知識</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">フルスタック志向: フロントエンドからバックエンド、インフラまで幅広く興味を持てること（少人数組織のため）</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">新規事業・サービス開発経験: 「0→1」のフェーズで、不確実な状況を楽しめる経験</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">管理会計・財務の知識: 「ファイナンスで考える力」を持ち、ビジネスの収益性を意識できること</span>
                              </li>
                            </ul>
                          </div>

                          {/* 求める人物像 */}
                          <div>
                            <h4 className="text-sm md:text-base font-medium text-[#554C51] mb-3">求める人物像</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">「コンサルタントの視点」でビジネス課題を捉え、「エンジニアの視点」で解決策を具現化したい方</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">言われたことだけをこなすのではなく、事業主視点で「どうすれば利益が出るか」「組織が強くなるか」を一緒に考えられる方</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">創業メンバーとして、会社のカルチャーや仕組み作りにも関わりたい方</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">業務品質への理解：大手通信会社や官公庁など、高い信頼性が求められるクライアントに対し、誠実かつ高品質対応を理解しよういう考えがある方</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">知的好奇心と探究心: 「24時間同じことを考え続ける」ような粘り強さや、新しい技術（生成AI等）へのキャッチアップ意欲</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">柔軟性とポジティブさ: 「困難な状況でも前向きかつ楽観的に物事を推進する力」。スタートアップ特有の変化やカオスを楽しめる姿勢</span>
                              </li>
                              <li className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm md:text-base font-light text-[#909397]">顧客志向: 技術そのものだけでなく、それを使って「顧客企業の生産性向上」や「実益」を生み出すことにこだわりを持てること</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

      </div>
    </Layout>
  );
}
