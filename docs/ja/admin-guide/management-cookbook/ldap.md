# LDAP 連携

## 概要
LDAP サーバーを登録することで、LDAP によるログインが可能となります。

## LDAP サーバー設定
1. 管理画面のセキュリティ設定ページ(/admin/security)にアクセスし、認証機構設定の LDAP タグを開きます。
2. 「Use LDAP」を ON にし、必要事項を入力します。
  - サーバ URL: `ldaps://ホスト:ポート/BaseDN` というフォーマットで入力します。
    - スキーマは `ldap` or `ldaps`
    - ポートは省略化
  - Bind モード: LDAP サーバーに接続してユーザー検索する際の挙動を選べます。
    - Manager Bind: 予め特定の DN を設定しておき、それを用いて LDAP ユーザーを検索するモード。`uid=admin` などに権限がある場合はこちらを選択してください。
    - User Bind: GROWI のログインフォームに入力したユーザー名から動的に DN を作成し、それを用いて LDAP ユーザーを検索するモード。
  - Bind DN
    - ディレクトリサービスに認証する際のアカウント DN を入力してください。
  - Bind DN パスワード
    - Manager Bind の場合のみ、使用するパスワードを入力してください。（注: MongoDB 内には当該 DN の平文パスワードが保存されます）
  - 検索フィルター
    - 検索フィルターを用いると、認証されるユーザーを一意に決定させることができます。
    - ログイン時のユーザー名を使用するには {{username}} の形式を使用してください。
    - 空欄の場合は `(uid={{username}})` が使用されます。
    - 例1: `(uid={{username}})`
      - ログインフォームに入力したユーザー名が uid 属性と一致する LDAP ユーザーをピックアップ
    - 例2: `(|(uid={{username}})(mail={{username}}))`
      - ログインフォームに入力したユーザー名が uid 属性または mail 属性と一致する LDAP ユーザーをピックアップ
    - 例3: `(&(uid={{username}})(memberOf=cn=manager,ou=group,dc=example,dc=com))`
      - アクセス可能なユーザーを絞る
3. 設定が反映されているか確認します。
  - ログアウトし、ログイン画面(/login)にアクセスします。
  - LDAP に登録されているアカウントでログインできれば設定完了です。
    
## Attribute Mapping (オプション)
LDAP アカウントをもとに GROWI アカウントを新規作成する際に、GROWI アカウントの以下の情報に対して LDAP アカウントのどの値( `uid`, `cn` 等)を紐づけるか指定できます。

- username: デフォルトでは LDAP アカウントの `uid` が適用されます。
- Mail: デフォルトでは LDAP アカウントの `mail` が適用されます。
- Name: 未指定の場合 Name は空欄になります。

## グループ検索フィルター（オプション）
(TBD)