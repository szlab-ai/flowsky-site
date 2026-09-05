export const languages = ['en', 'zh', 'ja'] as const;
export type Lang = typeof languages[number];
export const htmlLang = { en: 'en', zh: 'zh-Hans', ja: 'ja' } as const;
export const contact = 'szlab.ai@outlook.com';
type Copy = {
  nav: { features: string; terms: string; privacy: string; support: string; contact: string };
  tagline: string; subtitle: string; status: string; platforms: string;
  featuresTitle: string; features: { title: string; description: string }[];
  howTitle: string; steps: { title: string; description: string }[];
  privacyTitle: string; privacyText: string; privacyLink: string;
  availability: string; independence: string; appleCredit: string;
  descriptions: { terms: string; privacy: string; support: string };
};
export const ui: Record<Lang, Copy> = {
  en: {
    nav: { features: 'Features', terms: 'Terms of Use', privacy: 'Privacy Policy', support: 'Support', contact: 'Contact' },
    tagline: 'Bluesky, on the big screen.',
    subtitle: 'Browse feeds, explore posts, and enjoy photos and videos from your sofa. An independent Bluesky client designed for Apple TV.',
    status: 'Coming to the App Store', platforms: 'For Apple TV · tvOS 18 or later',
    featuresTitle: 'Made for your television',
    features: [
      { title: 'Follow the conversation', description: 'Browse feeds and open posts, profiles and replies at your own pace.' },
      { title: 'Photos, with room to breathe', description: 'Open photos on the big screen and browse the images in a post.' },
      { title: 'Video from your sofa', description: 'Watch videos directly on Apple TV with playback controls built for the remote.' },
      { title: 'A native TV experience', description: 'Move through posts and settings with the Siri Remote and tvOS focus navigation.' },
      { title: 'Sign in with your phone', description: 'Scan a QR code to authorize your Bluesky account. No typing your password on the TV.' },
      { title: 'A small login relay', description: 'The relay handles temporary pairing only. Your feed and media come from their providers.' },
    ],
    howTitle: 'From your phone to your television',
    steps: [
      { title: 'Open FlowSky on Apple TV', description: 'Start sign-in in the app to display a pairing QR code.' },
      { title: 'Scan and authorize', description: 'Use your phone to scan the code and authorize with your Bluesky account provider.' },
      { title: 'Settle in and explore', description: 'Return to the TV and use your remote to browse feeds, photos and videos.' },
    ],
    privacyTitle: 'Your login stays in your hands',
    privacyText: 'Credentials are stored in Apple Keychain on your Apple TV. Temporary relay records expire after five minutes or are deleted after the callback is retrieved. The app has no advertising or third-party analytics SDK.',
    privacyLink: 'Read the full privacy policy',
    availability: 'Currently supports accounts hosted by Bluesky, including custom domain handles. App interface languages: English and Simplified Chinese. Distribution is planned outside China mainland.',
    independence: 'FlowSky is independently developed by SZLab and is not affiliated with or endorsed by Bluesky.',
    appleCredit: 'Apple, Apple TV, Siri Remote and App Store are trademarks of Apple Inc.',
    descriptions: { terms: 'FlowSky terms, app license, subscriptions and purchase support.', privacy: 'How FlowSky handles account credentials, temporary login pairing, purchases and support information.', support: 'Help with FlowSky for Apple TV: sign-in, purchases, subscriptions and contacting the developer.' },
  },
  zh: {
    nav: { features: '功能', terms: '使用条款', privacy: '隐私政策', support: '支持', contact: '联系' },
    tagline: '把 Bluesky，搬到大屏上。',
    subtitle: '坐在沙发上浏览动态、探索帖子，欣赏图片与视频。专为 Apple TV 打造的独立 Bluesky 客户端。',
    status: '即将上架 App Store', platforms: '适用于 Apple TV · tvOS 18 或更高版本',
    featuresTitle: '为电视上的浏览而设计',
    features: [
      { title: '慢慢看，也能跟上动态', description: '浏览动态，打开帖子和个人资料，展开回复，按自己的节奏阅读。' },
      { title: '让图片舒展开来', description: '在大屏上打开照片，浏览同一条帖子里的多张图片。' },
      { title: '坐在沙发上看视频', description: '直接在 Apple TV 播放视频，使用适合遥控器的播放控制。' },
      { title: '原生的电视体验', description: '用 Siri Remote 和 tvOS 焦点导航，在帖子与设置之间轻松移动。' },
      { title: '拿起手机就能登录', description: '扫描二维码授权 Bluesky 账户，无需在电视上输入密码。' },
      { title: '只中转临时登录信息', description: '中继只处理临时配对，动态与媒体由应用直接向内容提供方请求。' },
    ],
    howTitle: '从手机，到电视',
    steps: [
      { title: '在 Apple TV 打开 FlowSky', description: '在应用里发起登录，电视会显示配对二维码。' },
      { title: '扫码并授权', description: '使用手机扫描二维码，在 Bluesky 账户提供方完成授权。' },
      { title: '回到沙发，开始浏览', description: '回到电视，用遥控器浏览动态、图片与视频。' },
    ],
    privacyTitle: '登录凭据留在你的设备上',
    privacyText: '凭据保存在 Apple TV 的 Apple 钥匙串中。中继的临时配对记录在五分钟后过期，成功取回回调时提前删除。应用没有广告或第三方分析 SDK。',
    privacyLink: '阅读完整隐私政策',
    availability: '当前支持由 Bluesky 托管的账户，包括使用自定义域名 handle 的账户。应用界面支持英语和简体中文。计划在中国大陆以外地区提供。',
    independence: 'FlowSky 由 SZLab 独立开发，与 Bluesky 无关联，也未获其背书。',
    appleCredit: 'Apple、Apple TV、Siri Remote 和 App Store 是 Apple Inc. 的商标。',
    descriptions: { terms: 'FlowSky 的应用许可、订阅购买、恢复与退款说明。', privacy: '了解 FlowSky 如何处理账户凭据、临时登录配对、购买与支持信息。', support: 'FlowSky Apple TV 使用帮助：登录、购买、订阅及联系开发者。' },
  },
  ja: {
    nav: { features: '機能', terms: '利用規約', privacy: 'プライバシーポリシー', support: 'サポート', contact: 'お問い合わせ' },
    tagline: 'Bluesky を、大画面で。',
    subtitle: 'ソファでくつろぎながらフィードや投稿を眺め、写真や動画を楽しむ。Apple TV のための独立した Bluesky クライアント。',
    status: 'App Store で公開予定', platforms: 'Apple TV 向け · tvOS 18 以降',
    featuresTitle: 'テレビで楽しむための設計',
    features: [
      { title: '会話をゆっくり追いかける', description: 'フィード、投稿、プロフィール、返信を、自分のペースで閲覧できます。' },
      { title: '写真をのびのびと', description: '写真を大画面で開き、投稿に含まれる画像を順に楽しめます。' },
      { title: 'ソファで動画を楽しむ', description: 'Apple TV で動画を再生。リモコンに合わせた操作で視聴できます。' },
      { title: 'テレビに自然な操作', description: 'Siri Remote と tvOS のフォーカス操作で、投稿や設定を移動できます。' },
      { title: 'スマートフォンでログイン', description: 'QR コードを読み取って Bluesky アカウントを認証。テレビでパスワードを入力する必要はありません。' },
      { title: '一時的なログイン中継', description: '中継サービスはペアリングのみを処理。フィードやメディアは各提供元から取得します。' },
    ],
    howTitle: 'スマートフォンから、テレビへ',
    steps: [
      { title: 'Apple TV で FlowSky を開く', description: 'アプリでログインを開始すると、ペアリング用の QR コードが表示されます。' },
      { title: '読み取って認証する', description: 'スマートフォンで QR コードを読み取り、Bluesky のアカウント提供元で認証します。' },
      { title: 'あとは、くつろぐだけ', description: 'テレビに戻り、リモコンでフィード、写真、動画を楽しみましょう。' },
    ],
    privacyTitle: 'ログイン情報は、お使いの端末に',
    privacyText: '認証情報は Apple TV の Apple キーチェーンに保存されます。一時的な中継記録は5分後に期限切れとなり、コールバック取得後はそれ以前に削除されます。アプリには広告や第三者の解析 SDK はありません。',
    privacyLink: 'プライバシーポリシーを読む',
    availability: '現在は Bluesky がホストするアカウントに対応し、独自ドメインのハンドルも利用できます。アプリの表示言語は英語と簡体字中国語です。中国本土を除く地域での配信を予定しています。',
    independence: 'FlowSky は SZLab が独立して開発しており、Bluesky との提携関係や Bluesky による推奨はありません。',
    appleCredit: 'Apple、Apple TV、Siri Remote、App Store は Apple Inc. の商標です。',
    descriptions: { terms: 'FlowSky の使用許諾、サブスクリプション、購入と返金について。', privacy: 'FlowSky の認証情報、一時的なログイン中継、購入、お問い合わせ情報の取り扱い。', support: 'Apple TV 向け FlowSky のログイン、購入、サブスクリプション、お問い合わせのご案内。' },
  },
};
