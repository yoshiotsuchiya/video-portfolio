# HIROSHI Design — 動画制作・ディレクション ポートフォリオ

HTML / CSS / JavaScriptのみの、1ページ完結の静的サイトです。WordPress、外部ライブラリ、ビルド工程は不要です。

## 今回のデザイン

黒いトップにレンズのコンセプト画像と大きな制作実績を配置し、対応業務・外部実績サイトの案内を白い背景で構成しています。お問い合わせは落ち着いたゴールドを使っています。社名はHIROSHI Designです。

制作実績はページ内のサンプル一覧から、別サイトへのリンクに変更しました。実績リンクは次のNotionページに設定済みです：

https://pewter-breath-e06.notion.site/4785380b8be848a7923882498c5e9bc8

## ファイル構成

- `index.html`：文章、全セクション、SEO・OGP設定
- `style.css`：配色、文字、余白、スマートフォン対応
- `script.js`：外部実績サイトURL、メールアドレス、問い合わせ動作
- `assets/hero-lens.webp`：トップの画像
- `assets/hiroshi-portrait-original.png`：ご提供の元写真（Macを持った正方形の写真）
- `assets/favicon.svg`：ブラウザーのアイコン
- `assets/ogp.png`：SNS共有用画像
- `assets/IMAGE-CREDITS.md`：画像の生成情報
- `.nojekyll`：GitHub Pages用の空ファイル

## ローカルで確認する

ZIPを展開し、`index.html`をブラウザーにドラッグして開きます。編集後は保存してブラウザーを再読み込みしてください。ウィンドウを細くするとスマートフォン用の配置になります。

Pythonがある場合は、このフォルダーで `python3 -m http.server 8080` を実行して `http://localhost:8080` を開く方法もあります。終了はControl + Cです。

## 制作実績サイトの設定

`script.js` の次の行の引用符の中に、実績サイトのURLを入力します。

```js
const PORTFOLIO_URL = 'https://pewter-breath-e06.notion.site/4785380b8be848a7923882498c5e9bc8';
```

`https://`から始まるURLを入れてください。設定するとトップ、メニュー、実績欄のリンクが同時に更新され、別タブで開きます。JavaScriptが無効でも開けるよう、`index.html` の `data-portfolio-link` がある3つのリンクにもURLを設定しています。リンク先を変更する際は、この3か所の `href` も同じURLに更新してください。サイト内にYouTubeを埋め込む処理や実績カードはありません。

## お問い合わせ先の設定

移行元Notionのメールアドレスを設定済みです。変更する場合は `script.js` 冒頭の次の行を更新してください。

```js
const CONTACT_EMAIL = 'hiroshi.design109@gmail.com';
```

会社名、氏名、メールアドレス、相談内容を入力してボタンを押すと、利用者のメールアプリへ内容を引き継ぎます。実際の送信はメールアプリで行います。サイト側で入力情報の保存や直接送信は行いません。

メールアプリが未設定だと開かないことがあります。メールアドレスは画面に直接表示しませんが、静的サイトのソースと起動したメールアプリの宛先からは確認できます。メールアドレス自体を非公開にするには、サーバー経由のフォーム送信などへの変更が必要です。連絡先未設定の間は送信しません。

## 画像の差し替え方法

`assets/hero-lens.webp` をお好みの横長画像に置き換えます。推奨は1536×1024pxのWebP形式です。別のファイル名にする場合は、`index.html`内の同じパスも書き換えてください。画像は枠に合わせて切り抜き表示され、位置は `style.css` の `.hero-image` にある `object-position` で調整できます。

現在の画像はAI生成のコンセプトビジュアルで、実際の所有機材・制作現場・顧客案件を示すものではありません。ファーストビューの画像は表示を優先するため遅延読み込みを行っていません。追加する下部画像には `loading="lazy"` と実寸の `width`・`height` を設定してください。

## 文章・色の変更方法

文章は `index.html` の表示文を直接変更します。社名、プロフィール、対応業務などもここにあります。「2,000本以上」等は提供いただいた情報に基づきます。年齢、生年月日、架空の取引先は掲載していません。

配色は `style.css` 冒頭の `:root` にあります。`--bg` が黒、`--paper` が白いセクション、`--gold` がアクセント色です。変更すると各セクションに反映されます。

## 公開前の設定

1. 設定済みの実績サイトのリンク先を確認する。
2. 設定済みの連絡先を確認する。
3. プロフィールや提供サービスを確認する。
4. `index.html` の `og:url` と `og:image` にある `https://example.com/` を公開URLに変える。

SNS共有画像は `assets/ogp.png`（1200×630px）です。例えば公開先が `https://yourname.github.io/portfolio/` なら、画像URLは `https://yourname.github.io/portfolio/assets/ogp.png` になります。title、description、OGP、faviconの設定は `<head>` にまとまっています。

## GitHub Pagesへの公開方法

1. GitHubアカウントを作成し、「New repository」で新しい公開リポジトリを作ります。例：`portfolio`。
2. 「Add file」→「Upload files」で、このREADMEと同じ階層にあるファイルと `assets` フォルダーをアップロードします。`index.html` がリポジトリ直下になるようにしてください。ZIPのままアップロードしないでください。
3. 「Commit changes」で保存します。
4. リポジトリの「Settings」→「Pages」を開きます。
5. 「Build and deployment」のSourceで「Deploy from a branch」を選び、Branchを `main`、フォルダーを `/(root)` にしてSaveします。
6. 公開処理の完了後、Pages画面に出るURLを開きます。通常は `https://ユーザー名.github.io/リポジトリ名/` です。
7. 公開URLをOGP設定に反映して、ファイルを更新します。以後、同じ場所のファイルを更新して保存すると再公開されます。

手順の参照先：[GitHub公式・公開元の設定](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。無料プランでは公開リポジトリを使う構成です。

NetlifyやCloudflare Pagesにも、同じ静的ファイルを配置できます。ビルド工程は不要で、配信するフォルダーの直下に `index.html` がある構成にしてください。

## 独自ドメイン設定の概要

1. ドメイン取得サービスで独自ドメインを用意します。ホスティングが無料でもドメインは通常別料金です。
2. GitHub Pages設定の「Custom domain」に利用するドメイン名を入力して保存します。
3. ドメイン取得サービスのDNS設定でGitHubの案内に沿ってレコードを登録します。`www` などのサブドメインならCNAMEを `ユーザー名.github.io` に向けます。リポジトリ名は含めません。ルートドメインでは公式のA/AAAAレコードの案内に従います。
4. DNS反映と証明書の準備を待ち、「Enforce HTTPS」を有効にします。
5. OGPのURLを独自ドメインへ変更します。

最新のレコード値や確認方法：[GitHub公式・独自ドメインの管理](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)。

## 実装上の配慮

外部ライブラリ、外部フォント、自動再生動画を使っていません。キーボードのフォーカス表示、本文へのスキップリンク、フォームのラベルと必須項目検証、OSの動きを抑える設定に対応しています。画像は軽量なWebPで、表示領域を確保しています。

## Notionからの移行内容

[移行元のHIROSHI Designページ](https://pewter-breath-e06.notion.site/HIROSHI-Design-246bbed6008e80168a3df2c4028f4cd2)から、以下を整理して反映しました。

- 即レス×即対応、通常1分以内の返信を心がける姿勢、土日祝・夜間の連絡対応
- 納期厳守、報連相、仕上げ編集、編集者との連携による大量発注対応
- 制作実績は概数として「2,000本以上」と表示
- 中央大学卒業、会社員経験、動画編集スクール講師、SNS登録者2万人超、YouTube運営経験
- AI活用、研修・オンライン講座、Instagram運用などの対応業務
- 制作内容・ボリューム・ご予算に応じた個別見積もりの案内
- 代表者名、初回Zoom相談無料、メール作成による問い合わせ導線

制作本数は概数で伝えるご希望に合わせて「2,000本以上」に統一し、細かな内訳は掲載していません。ソフト使用年数は経年変化するため記載していません。返信時間は常時保証ではなく姿勢として表現しています。料金は更新前の情報とのご指示により移行せず、個別見積もりの案内にしています。

この作業ではNotion側のページを削除・変更していません。実績ページへのリンクは引き続き利用します。LINE・Slackは連絡可能という案内のみで、未提供のURLは作成していません。

## プロフィール写真

`assets/hiroshi-portrait-original.png` はご提供の元写真です。本人・Mac・服装はこの元画像を使い、CSSで彩度・明るさを少し抑えています。元ファイルに変更はありません。

写真は斜めの枠とゴールドの縁でデザインしています。左右の不足分には `assets/portrait-background.webp` を背景として配置し、ぼかして馴染ませています。この背景は内蔵画像生成ツールで元写真から拡張した画像です。生成画像の人物部分は元写真を重ねて隠しています。

枠の形は `style.css` の `.portrait-window` と `.portrait-composition::before` の `clip-path` で変更できます。プロフィール画像の色調は `.portrait-original` の `filter` で調整します。画像は遅延読み込みに対応しています。

## 連絡先の掲載方針

Chatwork ID・所在地の詳細・メールアドレスの直接表示は削除しています。メールアドレスはメール作成機能の宛先としてのみ設定しています。移行元Notionの公開内容は変更していません。

代表者名は本人指定のローマ字表記「YOSHIO TSUCHIYA」に統一しています。写真の代替テキストも同じ表記です。
