import DOMPurify from 'isomorphic-dompurify';

/**
 * HTMLをサニタイズしてXSS攻撃を防ぐ
 * microCMSから取得したHTMLコンテンツを安全に表示するために使用
 *
 * @param html - サニタイズするHTML文字列
 * @returns サニタイズされたHTML文字列
 */
export function sanitizeHtml(html: string): string {
  // DOMPurifyの設定
  const config = {
    // 許可するタグ
    ALLOWED_TAGS: [
      'p', 'br', 'span', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'strong', 'em', 'u', 'strike', 'a', 'img', 'ul', 'ol', 'li',
      'blockquote', 'code', 'pre', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
      'iframe'
    ],
    // 許可する属性
    ALLOWED_ATTR: [
      'href', 'target', 'rel', 'src', 'alt', 'title', 'class', 'id',
      'width', 'height', 'style', 'frameborder', 'allowfullscreen'
    ],
    // 許可するURIスキーム
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  };

  return DOMPurify.sanitize(html, config);
}
