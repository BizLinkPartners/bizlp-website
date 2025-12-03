const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 画像最適化の設定
const IMAGE_QUALITY = 85; // JPEG品質 (0-100)
const MAX_WIDTH = 1920; // 最大幅（ピクセル）

// 最適化する画像のリスト
const imagesToOptimize = [
  {
    input: path.join(__dirname, '../public/image/profile.jpg'),
    output: path.join(__dirname, '../public/image/profile-optimized.jpg'),
    quality: IMAGE_QUALITY,
    maxWidth: 1200
  },
  {
    input: path.join(__dirname, '../public/image/logo.jpg'),
    output: path.join(__dirname, '../public/image/logo-optimized.jpg'),
    quality: IMAGE_QUALITY,
    maxWidth: 600
  }
];

async function optimizeImage(config) {
  const { input, output, quality, maxWidth } = config;

  try {
    // 入力ファイルが存在するか確認
    if (!fs.existsSync(input)) {
      console.log(`⚠️  スキップ: ${path.basename(input)} (ファイルが見つかりません)`);
      return;
    }

    // 元のファイルサイズを取得
    const originalStats = fs.statSync(input);
    const originalSize = originalStats.size;

    // 画像を最適化
    await sharp(input)
      .resize(maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true // 元の画像より大きくしない
      })
      .jpeg({
        quality: quality,
        progressive: true, // プログレッシブJPEG
        mozjpeg: true // mozjpegエンコーダーを使用（より高い圧縮率）
      })
      .toFile(output);

    // 最適化後のファイルサイズを取得
    const optimizedStats = fs.statSync(output);
    const optimizedSize = optimizedStats.size;

    // 圧縮率を計算
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);

    console.log(`✅ 最適化完了: ${path.basename(input)}`);
    console.log(`   元のサイズ: ${(originalSize / 1024).toFixed(2)} KB`);
    console.log(`   最適化後: ${(optimizedSize / 1024).toFixed(2)} KB`);
    console.log(`   削減率: ${reduction}%\n`);

  } catch (error) {
    console.error(`❌ エラー: ${path.basename(input)} の最適化に失敗しました`);
    console.error(`   ${error.message}\n`);
  }
}

async function main() {
  console.log('=================================');
  console.log('画像最適化スクリプト');
  console.log('=================================\n');

  for (const config of imagesToOptimize) {
    await optimizeImage(config);
  }

  console.log('=================================');
  console.log('最適化が完了しました');
  console.log('=================================');
  console.log('\n次のステップ:');
  console.log('1. 最適化された画像を確認してください');
  console.log('2. 問題なければ、元の画像を最適化版に置き換えてください:');
  console.log('   - profile-optimized.jpg → profile.jpg');
  console.log('   - logo-optimized.jpg → logo.jpg\n');
}

main();
