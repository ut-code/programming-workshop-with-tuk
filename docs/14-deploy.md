---
title: 作ったウェブアプリを公開する
---

import Term from "@site/src/components/Term";
import commitAndPushVideo from "./14-deploy-application/commit-and-push.mp4";
import enableGitHubPagesVideo from "./14-deploy-application/enable-github-pages.mp4";

## GitHub Pages

GitHub Pages を使用すると、作ったウェブアプリを簡単に公開できます。

## GitHub にソースコードを Push する

ソースコードを**コミット**して変更を記録し、その記録を <Term type="github">GitHub</Term> に**プッシュ**すると、GitHub 上にソースコードを公開することができます。

:::danger
この操作を実行すると、ソースコードが世界中に公開されます。機密情報が含まれないように十分注意してください。
:::

<video src={commitAndPushVideo} controls />

## GitHub Pages を有効にする

リポジトリの設定画面から、**GitHub Pages**を有効にします。これにより、リポジトリ内のファイルがウェブサイトとして公開されます。

この設定を有効にしたのち、実際にウェブサイトが公開されるまで、若干のタイムラグが発生します。

<video src={enableGitHubPagesVideo} controls />

## おわりに

おめでとうございます。あなただけの Web アプリケーションを作成することができました。発行された URL は、インターネットに接続可能なあらゆる場所や端末から利用できます。ぜひ URL を家族や友人に教えて、自慢してみてください。

![ありがとうございました](./14-deploy-application/undraw_well_done.svg)
