'use strict';
// 公開前に実際のメールアドレスを設定。未設定のまま外部へ送信しません。
const CONTACT_EMAIL = 'hiroshi.design109@gmail.com';
const form = document.querySelector('#contact-form');
const status = document.querySelector('#contact-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!CONTACT_EMAIL) {
    status.textContent = 'お問い合わせ先は準備中です。公開前にメールアドレスを設定してください。';
    return;
  }
  const data = new FormData(form);
  const body = `会社名：${data.get('company') || '未記入'}\n氏名：${data.get('name')}\nメールアドレス：${data.get('email')}\n\n相談内容：\n${data.get('message')}`;
  location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('動画制作に関するお問い合わせ')}&body=${encodeURIComponent(body)}`;
  status.textContent = 'メールアプリで内容を確認して送信してください。開かない場合は、お使いの端末でメールアプリを設定してください。';
});
document.querySelector('#year').textContent = new Date().getFullYear();

// 外部実績サイトのURLをここへ。未設定の間は同ページの案内へ移動します。
const PORTFOLIO_URL = 'https://pewter-breath-e06.notion.site/4785380b8be848a7923882498c5e9bc8';
if (PORTFOLIO_URL) {
  try {
    const portfolio = new URL(PORTFOLIO_URL);
    if (portfolio.protocol !== 'https:' && portfolio.protocol !== 'http:') {
      throw new Error('実績サイトはhttpまたはhttpsのURLを指定してください。');
    }
    document.querySelectorAll('[data-portfolio-link]').forEach(link => {
      link.href = portfolio.href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.removeAttribute('aria-disabled');
      link.setAttribute('aria-label', '制作実績を見る（別タブで開く）');
    });
    const caption = document.querySelector('[data-portfolio-caption]');
    if (caption) caption.textContent = '別タブで開きます';
  } catch {
    const caption = document.querySelector('[data-portfolio-caption]');
    if (caption) caption.textContent = '実績サイトのリンク先を確認中です';
  }
}

// URL準備中の案内ボタンは外部遷移させません。
document.querySelectorAll('[data-portfolio-link][aria-disabled="true"]').forEach(link => {
  link.addEventListener('click', event => event.preventDefault());
});


// AI相談の入口。入力済みの相談文は保持します。
document.querySelectorAll('[data-ai-contact]').forEach(link => {
  link.addEventListener('click', () => {
    const message = form.elements.namedItem('message');
    if (!message.value.trim()) message.value = 'AI動画制作・導入支援について相談したいです。\n\n現在の課題：\n希望する支援：';
  });
});
