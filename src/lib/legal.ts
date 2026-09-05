export type Language = "en" | "zh-Hans" | "ja";
export type Page = "terms" | "privacy" | "support";
type Section = { title: string; paragraphs: string[] };
type Translation = {
  updated: string;
  contact: string;
  navigation: Record<Page, string>;
  pages: Record<Page, Section[]>;
};

// Plain text only. The renderer escapes every field before inserting it into HTML.
export const translations: Record<Language, Translation> = {
  en: {
    updated: "Updated September 5, 2026",
    contact: "Contact the FlowSky developer",
    navigation: { terms: "Terms of Use", privacy: "Privacy Policy", support: "Support" },
    pages: {
      terms: [
        { title: "About FlowSky", paragraphs: ["FlowSky for Bluesky is an independent Apple TV client. It is not affiliated with or endorsed by Bluesky. Your use of Bluesky and content hosted by other providers is also subject to those providers’ terms. Respect other people’s rights when viewing or sharing content."] },
        { title: "App license", paragraphs: ["Apple’s Standard End User License Agreement applies to the app. You can read it using the link below. These pages explain FlowSky’s service and purchase arrangements; they do not replace the standard license or your rights under applicable law."] },
        { title: "FlowSky Pro purchases", paragraphs: ["Available plans, included features and localized prices are shown in the app and Apple’s purchase confirmation. Monthly and yearly plans are auto-renewable subscriptions. Payment is charged to your Apple Account when you confirm a purchase. Subscriptions renew unless canceled at least 24 hours before the current period ends; Apple may charge for renewal within the final 24 hours.", "The lifetime plan is a one-time, non-consumable purchase for Pro access while FlowSky and its supported services remain available. Buying it does not automatically cancel an existing monthly or yearly subscription. Manage or cancel that subscription separately in your Apple Account settings."] },
        { title: "Restore, cancel and request a refund", paragraphs: ["Use Restore Purchases in FlowSky with the Apple Account used for the purchase. Manage subscriptions in your Apple Account settings. Apple handles billing and refund requests; refund eligibility is determined by Apple and applicable law."] },
        { title: "Service availability", paragraphs: ["FlowSky depends on Apple, Bluesky and other content providers. Their availability, APIs and content can change. A purchase does not guarantee that a third-party service or a particular item of content will remain available."] }
      ],
      privacy: [
        { title: "Scope", paragraphs: ["This policy describes how the FlowSky developer handles information in FlowSky for Bluesky and its login relay. Apple, Bluesky, Cloudflare, GitHub and other providers process information under their own policies when you use their services."] },
        { title: "Your account and information on the device", paragraphs: ["You authorize your Bluesky account through your provider’s sign-in page on your phone. FlowSky does not ask you to send your Bluesky password to the developer. The app stores OAuth credentials in Apple Keychain on the Apple TV, and keeps preferences, cached profile information and purchase entitlement information on the device. Media and feed data may also be cached locally.", "The app requests account, feed and media information from Bluesky and relevant content hosts. Those services receive network requests and information needed to handle them. Signing out removes FlowSky’s saved OAuth credentials and profile cache; it does not delete your Bluesky account or content."] },
        { title: "Temporary login relay", paragraphs: ["A Cloudflare-hosted relay connects the phone authorization flow to the Apple TV. It temporarily holds pairing information, the authorization URL (which may include your account handle), the expected issuer, a hash of the polling secret, and the authorization callback or error. Pairing records expire after five minutes and are deleted earlier after the callback is successfully retrieved.", "The phone authorization flow uses a short-lived, secure pairing cookie. The relay does not receive or store OAuth access tokens, refresh tokens, the PKCE verifier, DPoP private keys, or feed and media content. Cloudflare may process IP addresses and request metadata to deliver and protect its service. Application observability is disabled in the relay’s deployment configuration."] },
        { title: "Purchases", paragraphs: ["Apple processes payments. FlowSky uses StoreKit transaction information to verify purchases and determine Pro access, and stores an entitlement summary on the device. The developer does not receive your payment card details and does not operate a separate purchase server."] },
        { title: "Support and these pages", paragraphs: ["If you contact support, the developer receives your email address and the information you choose to send, and uses them to respond and resolve the request. Keep passwords, authorization codes, tokens and private content out of support messages. Support correspondence is retained as needed to handle the request and meet applicable obligations.", "These support and policy pages use no analytics scripts, advertising, or cookies. GitHub Pages hosts this website and processes network requests, including IP addresses, to deliver and protect the service. The app currently contains no third-party analytics or advertising SDK. The developer does not sell personal information or use it for targeted advertising."] },
        { title: "Your choices and changes", paragraphs: ["Use FlowSky’s sign-out option to remove saved login credentials. Manage your account, content and account deletion with Bluesky or your account provider; manage purchases with Apple. Contact the developer below about information supplied to support or privacy questions. This policy will be updated when relevant data practices change."] }
      ],
      support: [
        { title: "Sign in on Apple TV", paragraphs: ["Start sign-in in FlowSky, then scan the QR code with your phone and complete authorization with your Bluesky account provider. Keep the Apple TV and phone connected to the internet. If pairing expires, start again to create a new code.", "The current version supports accounts hosted by Bluesky, including accounts that use a custom domain handle. Accounts hosted on third-party or self-hosted PDS servers are not currently supported."] },
        { title: "Purchases and subscriptions", paragraphs: ["Open Settings → FlowSky Pro to view plans or restore purchases. Use the Apple Account that made the purchase. You can manage or cancel subscriptions in your Apple Account settings. If you buy lifetime access while subscribed, cancel the existing subscription separately to avoid future renewals.", "If plans do not load, check your internet connection and Apple Account, then retry. TestFlight purchases use Apple’s sandbox and do not charge real money; test purchases do not carry over to the App Store version."] },
        { title: "Get help", paragraphs: ["Email the developer using the contact link below. Include the app version, tvOS version, what you were doing and the error text. A screenshot can help, but remove account details and private content first. Never send passwords, authorization codes or tokens."] }
      ]
    }
  },
  "zh-Hans": {
    updated: "更新于 2026 年 9 月 5 日",
    contact: "联系 FlowSky 开发者",
    navigation: { terms: "使用条款", privacy: "隐私政策", support: "支持" },
    pages: {
      terms: [
        { title: "关于 FlowSky", paragraphs: ["FlowSky for Bluesky 是独立的 Apple TV 客户端，与 Bluesky 无关联，也未获其背书。使用 Bluesky 以及其他提供方托管的内容时，还须遵守相应提供方的条款。浏览或分享内容时，请尊重他人的权利。"] },
        { title: "应用许可", paragraphs: ["本应用适用 Apple 标准最终用户许可协议，可通过下方链接阅读。本页面说明 FlowSky 的服务与购买安排，不取代该标准许可协议或您依法享有的权利。"] },
        { title: "FlowSky Pro 购买", paragraphs: ["可选方案、所含功能和本地价格以应用及 Apple 购买确认页面所示为准。月付和年付为自动续期订阅，确认购买后由 Apple 账户扣款。如未在当前周期结束至少 24 小时前取消，订阅将自动续期；Apple 可在最后 24 小时内收取续期费用。", "买断为一次性购买的非消耗型项目，在 FlowSky 及其支持的服务可用期间提供 Pro 权益。购买买断不会自动取消已有的月付或年付订阅，请在 Apple 账户设置中另行管理或取消。"] },
        { title: "恢复、取消与退款", paragraphs: ["使用购买时的 Apple 账户，在 FlowSky 中选择「恢复购买」。订阅可在 Apple 账户设置中管理或取消。付款与退款请求由 Apple 处理，退款资格依 Apple 规则及适用法律确定。"] },
        { title: "服务可用性", paragraphs: ["FlowSky 依赖 Apple、Bluesky 及其他内容提供方，其服务、接口和内容可能发生变化。购买不保证第三方服务或某一内容始终可用。"] }
      ],
      privacy: [
        { title: "适用范围", paragraphs: ["本政策说明 FlowSky 开发者如何在 FlowSky for Bluesky 及其登录中继中处理信息。使用 Apple、Bluesky、Cloudflare、GitHub 及其他提供方的服务时，相应提供方按其自身政策处理信息。"] },
        { title: "账户与设备上的信息", paragraphs: ["您通过手机上账户提供方的登录页面授权 Bluesky 账户，FlowSky 不要求您向开发者发送 Bluesky 密码。应用将 OAuth 凭据保存在 Apple TV 的 Apple 钥匙串中，并在设备上保存偏好设置、资料缓存和购买权益信息；媒体与动态数据也可能在本地缓存。", "应用向 Bluesky 和相关内容托管方请求账户、动态和媒体信息，这些服务会收到处理请求所需的信息与网络请求。退出登录会移除 FlowSky 保存的 OAuth 凭据及资料缓存，但不会删除您的 Bluesky 账户或内容。"] },
        { title: "临时登录中继", paragraphs: ["托管于 Cloudflare 的中继连接手机授权流程与 Apple TV，临时保存配对信息、授权网址（可能包含账户 handle）、预期授权发行方、轮询密钥的哈希，以及授权回调或错误。配对记录在五分钟后过期；成功取回回调时会提前删除。", "手机授权流程使用短时有效的安全配对 Cookie。中继不接收或保存 OAuth 访问令牌、刷新令牌、PKCE verifier、DPoP 私钥，也不转存动态或媒体内容。Cloudflare 可能为提供和保护服务而处理 IP 地址及请求元数据。中继部署配置已关闭应用可观测性日志。"] },
        { title: "购买", paragraphs: ["付款由 Apple 处理。FlowSky 使用 StoreKit 交易信息验证购买、判断 Pro 权益，并在设备上保存权益摘要。开发者不会收到您的银行卡信息，也不运营单独的购买服务器。"] },
        { title: "支持与本网站", paragraphs: ["联系支持时，开发者会收到您的邮箱地址及主动提供的信息，用于答复和处理问题。请勿在支持消息中包含密码、授权码、令牌或私密内容。支持往来信息仅在处理请求及履行适用义务所需期间保留。", "这些支持与政策页面不使用分析脚本、广告或 Cookie，本网站托管于 GitHub Pages，其为提供和保护服务仍需处理网络请求及 IP 地址。应用目前没有第三方分析或广告 SDK。开发者不出售个人信息，也不将其用于定向广告。"] },
        { title: "您的选择与政策更新", paragraphs: ["可通过 FlowSky 的退出登录功能移除已保存的登录凭据。请向 Bluesky 或账户提供方管理账户、内容和账户删除，向 Apple 管理购买。有关支持消息中的个人信息或隐私问题，请通过下方方式联系开发者。相关数据处理方式变化时，本政策将更新。"] }
      ],
      support: [
        { title: "在 Apple TV 登录", paragraphs: ["在 FlowSky 发起登录，用手机扫描二维码并在 Bluesky 账户提供方完成授权。请保持 Apple TV 与手机联网。如果配对过期，请重新发起以生成新二维码。", "当前版本支持由 Bluesky 托管的账户，包括使用自定义域名 handle 的账户；暂不支持第三方或自建 PDS 托管的账户。"] },
        { title: "购买与订阅", paragraphs: ["进入「设置 → FlowSky Pro」查看方案或恢复购买，并使用购买时的 Apple 账户。可在 Apple 账户设置中管理或取消订阅。已有订阅时购买买断，请另行取消原订阅以避免继续续费。", "若无法加载方案，请检查网络和 Apple 账户后重试。TestFlight 购买使用 Apple 沙盒，不会真实扣费，测试购买不会继承到 App Store 正式版。"] },
        { title: "获取帮助", paragraphs: ["通过下方邮箱联系开发者，请提供应用版本、tvOS 版本、操作步骤及错误文字。截图有助于排查，但请先移除账户信息与私密内容。切勿发送密码、授权码或令牌。"] }
      ]
    }
  },
  ja: {
    updated: "更新日：2026年9月5日",
    contact: "FlowSky の開発者に連絡",
    navigation: { terms: "利用規約", privacy: "プライバシーポリシー", support: "サポート" },
    pages: {
      terms: [
        { title: "FlowSky について", paragraphs: ["FlowSky for Bluesky は独立した Apple TV クライアントであり、Bluesky との提携関係や Bluesky による推奨はありません。Bluesky や他の事業者が提供するコンテンツの利用には、各事業者の規約も適用されます。閲覧や共有の際は、他者の権利を尊重してください。"] },
        { title: "アプリの使用許諾", paragraphs: ["本アプリには Apple の標準エンドユーザー使用許諾契約が適用されます。下記のリンクからご確認いただけます。本ページは FlowSky のサービスと購入の仕組みを説明するもので、標準使用許諾契約や適用法に基づく権利に代わるものではありません。"] },
        { title: "FlowSky Pro の購入", paragraphs: ["利用可能なプラン、含まれる機能、お住まいの地域の価格は、アプリと Apple の購入確認画面に表示されます。月額・年額プランは自動更新サブスクリプションです。購入を確定すると Apple Account に請求されます。期間終了の24時間前までに解約しない限り自動更新され、終了前の24時間以内に更新料金が請求される場合があります。", "買い切りプランは一度だけ支払う非消耗型の購入で、FlowSky と対応サービスが利用可能な間、Pro の利用権を提供します。購入しても、既存の月額・年額サブスクリプションは自動的に解約されません。Apple Account の設定で別途管理・解約してください。"] },
        { title: "復元・解約・返金", paragraphs: ["購入時の Apple Account を使用して、FlowSky の「購入を復元」を選択してください。サブスクリプションは Apple Account の設定で管理・解約できます。請求と返金申請は Apple が扱い、返金の可否は Apple の規定と適用法に基づきます。"] },
        { title: "サービスの提供", paragraphs: ["FlowSky は Apple、Bluesky および他のコンテンツ提供元に依存しています。これらのサービス、API、コンテンツは変更される場合があります。購入によって、第三者のサービスや特定のコンテンツの継続的な提供が保証されるものではありません。"] }
      ],
      privacy: [
        { title: "対象範囲", paragraphs: ["本ポリシーは、FlowSky for Bluesky とログイン中継サービスにおける FlowSky 開発者の情報の取り扱いを説明します。Apple、Bluesky、Cloudflare、GitHub および他の事業者のサービスを利用する際は、各事業者のポリシーに基づいて情報が処理されます。"] },
        { title: "アカウントと端末内の情報", paragraphs: ["Bluesky アカウントの認証は、スマートフォン上のアカウント提供元のログイン画面で行います。FlowSky の開発者に Bluesky のパスワードを送る必要はありません。アプリは OAuth 認証情報を Apple TV の Apple キーチェーンに保存し、設定、プロフィールのキャッシュ、購入の利用権情報を端末内に保持します。メディアやフィードのデータも端末内にキャッシュされる場合があります。", "アプリは Bluesky と関連するコンテンツ配信元にアカウント、フィード、メディアの情報をリクエストします。各サービスはその処理に必要な情報とネットワークリクエストを受け取ります。ログアウトすると FlowSky が保存した OAuth 認証情報とプロフィールのキャッシュが削除されますが、Bluesky のアカウントや投稿は削除されません。"] },
        { title: "一時的なログイン中継", paragraphs: ["Cloudflare 上の中継サービスがスマートフォンの認証と Apple TV をつなぎます。ペアリング情報、認証 URL（アカウントのハンドルを含む場合があります）、認証発行元、ポーリング用シークレットのハッシュ、認証コールバックまたはエラーを一時的に保持します。記録は5分後に期限切れとなり、コールバックの取得に成功した場合はそれ以前に削除されます。", "スマートフォンの認証では、有効期間の短い安全なペアリング Cookie を使用します。中継サービスは OAuth のアクセストークン、更新トークン、PKCE verifier、DPoP 秘密鍵、フィードやメディアの内容を受信・保存しません。Cloudflare はサービスの提供と保護のために IP アドレスやリクエストのメタデータを処理する場合があります。中継のデプロイ設定ではアプリの可観測性ログを無効にしています。"] },
        { title: "購入", paragraphs: ["決済は Apple が処理します。FlowSky は StoreKit の取引情報を使って購入を検証し、Pro の利用権を確認します。利用権の概要は端末内に保存されます。開発者がカード情報を受け取ることはなく、独自の購入サーバーも運用していません。"] },
        { title: "サポートと本サイト", paragraphs: ["サポートに連絡すると、開発者はメールアドレスとお客様が送信した情報を受け取り、回答や問題解決に使用します。パスワード、認証コード、トークン、非公開の内容を送らないでください。お問い合わせの記録は、対応と適用される義務の履行に必要な期間保持します。", "これらのサポート・ポリシーページは解析スクリプト、広告、Cookie を使用しませんが、本サイトをホストする GitHub Pages は、サービスの提供と保護のために IP アドレスを含むネットワークリクエストを処理します。現在のアプリには第三者の解析・広告 SDK は含まれていません。開発者は個人情報を販売せず、ターゲティング広告にも使用しません。"] },
        { title: "お客様の選択と更新", paragraphs: ["保存したログイン認証情報は、FlowSky のログアウト機能で削除できます。アカウント、投稿、アカウント削除は Bluesky またはアカウント提供元で、購入は Apple で管理してください。サポートに送信した情報やプライバシーについては、下記から開発者にご連絡ください。関連する情報の取り扱いが変わった場合、本ポリシーを更新します。"] }
      ],
      support: [
        { title: "Apple TV でログイン", paragraphs: ["FlowSky でログインを開始し、スマートフォンで QR コードを読み取って Bluesky のアカウント提供元で認証を完了してください。Apple TV とスマートフォンをインターネットに接続してください。ペアリングの有効期限が切れた場合は、もう一度開始して新しいコードを発行します。", "現在のバージョンは Bluesky がホストするアカウントに対応しています。独自ドメインのハンドルを使うアカウントも対象です。第三者や自己ホストの PDS 上のアカウントには、現在対応していません。"] },
        { title: "購入とサブスクリプション", paragraphs: ["「設定 → FlowSky Pro」でプランの確認や購入の復元ができます。購入時の Apple Account を使用してください。サブスクリプションは Apple Account の設定で管理・解約できます。契約中に買い切りプランを購入した場合、継続課金を避けるには既存のサブスクリプションを別途解約してください。", "プランを読み込めない場合は、インターネット接続と Apple Account を確認してから再試行してください。TestFlight の購入は Apple のサンドボックスで行われ、実際の請求は発生しません。テスト購入は App Store 版には引き継がれません。"] },
        { title: "お問い合わせ", paragraphs: ["下記のリンクから開発者にメールでご連絡ください。アプリのバージョン、tvOS のバージョン、操作内容、エラーメッセージをお知らせください。スクリーンショットを送る場合は、アカウント情報や非公開の内容を取り除いてください。パスワード、認証コード、トークンは送信しないでください。"] }
      ]
    }
  }
};
