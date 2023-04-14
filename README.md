
[CROCUS](https://masaki-cb.github.io/crocus/)のソースコード

Githab  
https://github.com/masaki-cb/crocus

## バージョン
2023-02-14 時点の　以下のバージョンで、正常動作を確認しています。
node.js のバージョンが低い、あるいは高い場合、エラーが出る場合があります。
その場合は、ネット等で情報を収集し対応してください。

* node.js v18.14.0
* npm 6.14.11
* yarn 1.22.19

## 開発
1. `yarn install`
2. `yarn start`

* npm, yarn のインストールが必要です。


## ビルドデプロイ
1. `yarn build`
2. GitHubにプッシュ
3. GitHubの　ヘッダー Actions　の　「pages build and deployment」 が緑チェックになっていたらデプロイ完了
4. デプロイURLにアクセス

備考  
* デプロイURLはGitHubのプロジェクト（crocus）の　Settings - Pages にあります。
* yarn build コマンドで　docs フォルダが生成されます。このフォルダが最終生成物になります。このフォルダは .env パスで決定されます。


## データの追加方法

### 手順

1. datasetフォルダにデータを入れて、python プログラムを実行し、データファイル　data.json を作成する。
2. data フォルダにフォルダを作成する。　フォルダ名はURLにも使用されるので、空白・日本語等不可。半角英数字にすること。
3. 作成したフォルダに　data.json を入れる。
4. 他のフォルダ(oboe)より　description.jsonをコピーして　作成したフォルダに入れる。
5. コピーした　description.json を修正する
6. public フォルダに　2で作成したフォルダ名と同じものを作成し、データファイル一式を入れる。（フォルダ名は固定　Music_Score、Performance_Recordings_mp3）
7. yarn start で　ブラウザに表示されるので翻訳をチェック
8. 未翻訳の場合は、　locales/ja.json と　locales/en.json にデータを追加。en.json のみ、翻訳を追加する。
9. ブラウザチェックを繰り返す
10. yarn build でデプロイデータを作成。結果は　docs フォルダに格納される。
11. GitHubに登録する場合は新規フォルダ・ファイルをAddして commit push (merge)

### description.json　（発表文献、プロジェクトメンバー、謝辞）

json 形式となっている。文法ミスがあった場合はエラーが発生するので注意してください。   
python や　javascript と異なり、配列の最後等に不要なカンマは許されないので注意してください。  
たとえば、[a,b,c,]　のように　値が無いのにカンマを追加するのは文法エラーとなります。  
また、たとえば{"a":1,"b":2,} のように次にキーが無いのにカンマを追加するのは文法エラーです。  

トップページに表示される発表文献、プロジェクトメンバー、謝辞は  
src\data\description.json  
です。

オーボエ演奏講評データ等、各講評データページに表示される発表文献、プロジェクトメンバー、謝辞は
src\data\***\description.json  
です。

オーボエ演奏講評データの場合は
src\data\oboe\description.json  
です。

#### 必須項目
* title

#### references等、表示したくない場合
title以外は必須ではない。表示したくないものについては、referencesごと削除してください。


### 翻訳
ソースコードの　`t()`でくくると中身は辞書があれば翻訳される。辞書は locales内の　en.json および　ja.json です。  
現在は、日本語を主として書いてあるので、英語のみ翻訳を記載してください。


## 開発メモ

### フォルダ構成


```
.env            yarn build としたときの出力フォルダを設定している。このパスと　GitHubのデプロイパスを一致させる必要があります。
.gitignore      gitで無視するファイル、フォルダを指定
config          webpackの実行用　編集の必要なし。
dataset         講評データを作成するための python プログラムと、データが入っています。
                講評データを作成する場合は、データを入れ替えて　python を実行。data.json が作成されるので [データの追加方法]-[手順]を見てデータを追加すること            　
docs            yarn build としたときの出力フォルダ。GitHubでデプロイしたときに実行される。
node_modules    yarn install を行ったときに生成される、ライブラリ格納パス。 削除してＯＫ
package.json    設定ファイル。
public          公開されるファイルを格納する。yarn build すると docs 内にコピーされる。
README.md       本文書
scripts         webpackの実行用。編集の必要なし。
src             ソースコードフォルダ
	404.html            404用
	App.css             css
	App.module.scss     
	App.test.js         
	App.tsx             各講評ページ用のソース
	components          部品ソースが入っている。
		AboutThis.tsx       AboutThisを表示するためのソース。description.json の　aboutThisを表示する
		AudioPlayer.tsx     音声を再生するためのソース
		ErrorFallback.tsx   エラー表示用
		Footer.tsx          フッター。プロジェクトメンバーと謝辞を表示するためのソース。
		                    description.json の　projectMembersとacknowledgmentを表示する
		LinkDataset.tsx     Menuの各講評へのリンク、および、各ページのリンクを表示するためのソース
		                    description.jsonのlinkDatasetを表示する。
		molecules
            BarChart.tsx    棒グラフ用のソース
		organisms
			ChartZone.module.scss       棒グラフエリアのスタイルシート
			ChartZone.tsx               棒グラフエリアのソース
			CritiqueDetail.module.scss  講評エリアのスタイルシート
			CritiqueDetail.tsx          講評エリアのソース
			CritiqueTable.module.scss   講評テーブルのスタイルシート
			CritiqueTable.tsx           講評テーブルソース
			Navbar.tsx                  ナビゲーション用のソース
			README.md
			usePersist.tsx	            ナビゲーションの言語設定保存にはローカルストレージを使用している	
		ScoreViewer.tsx                 スコア表示用ソース
		TextList.tsx                    リファレンス表示用ソース。description.json の referencesを表示している
		TopTitle.tsx                    トップタイトル表示ソース
	
	consts
	    Critique.ts         批評定義             
	CROCUS.png              クロッカス画像
	CROCUS_small.png        クロッカス画像
	data
        guitar              ギター講評用（仮）
            data.json           datasetのpython プログラムで作成したデータ（仮）
            description.json    ページ表示用の文章や文字列データ（仮）
        oboe                オーボエ講評用
            data.json           datasetのpython プログラムで作成したデータ
            description.json    ページ表示用の文章や文字列データ
        piano               ピアノ講評用（仮）
            data.json           datasetのpython プログラムで作成したデータ（仮）
            description.json    ページ表示用の文章や文字列データ（仮）
        description.json    メニューページ用のデータ（仮）
	index.css               スタイルシート
	index.js                URLのルーティンを記載するソース
	index.scss              スタイルシート
	locales                 翻訳データ格納
        en.json             翻訳データ　英語
        ja.json             翻訳データ　日本語
	Menu.tsx                メニューソース
	react-app-env.d.ts      React用
	reportWebVitals.js      WebVitals計測用   
	setupTests.js           
	types
        Critique.d.ts       構造体定義
        react-table.d.ts	TypeScript用構造体定義
	utils
        Critique.ts         棒グラフ文字列用
        tagParser.ts        講評タグ表示用
tsconfig.json   TypeScriptの設定ファイル
yarn.lock   yarn install すると生成される。削除してＯＫ
```


#### ハッシュのないURL

トップページのメニューから各講評データのページがあるが、

http://〇〇〇.〇〇〇/crocus/#/doc/oboe/  
http://〇〇〇.〇〇〇/crocus/#/doc/piano/  
のようにURLに　ハッシュ# が入るURLとしています。

React では、URLに＃を入れる方法と入れないものがありますが、入れない場合は、サーバ設定が必要となります。
（単一URLしかない場合は、サーバ設定は必要ありません。）

Reactは、index.htmlのみの単一ページを URLにハッシュを入れることで複数のページがあるように見せています。
ハッシュがない場合は、HistoryAPIを使ってあたかも複数ページ存在するかのようになっていますが、そのままでは、トップページ以外でリロードした場合は、404 となります。
404 とならないようにするためには、サーバ設定が必要で、404となった場合、index.htmlにリダイレクトするようにするか、
あるいは、404時に、404.html が表示されるようなケースでは、index.html　をコピーして 404.html にすれば中身が表示できます。

本ソースコードでは、　ハッシュがあるタイプのコーディングとなっていますが、  
http://〇〇〇.〇〇〇/crocus/doc/oboe/  
のようにハッシュ無しとしたい場合は、以下のようにする必要があります。

##### ソースコードの変更

index.js を以下のようにしてください。

index.js の上の方で ライブラリをインポートしている個所を以下のように変更してください。
変更前
```
import {
HashRouter, Routes, Route,
} from "react-router-dom";
```
変更後
```
import {
BrowserRouter, Routes, Route,
} from "react-router-dom";
```

index.js のルーティング部分を以下のように変更してください。

変更前
```
    <React.StrictMode>
      <HashRouter>  <-------　ここを　BrowserRouter　に　変更する
        <Routes>
          <Route path={`/index.html`} element={<Menu />} />
          <Route path={`/`} element={<Menu />} />
          <Route path={`/doc/:id`} element={<App />} />
        </Routes>
      </HashRouter>　<-------　ここを　BrowserRouter　に　変更する
    </React.StrictMode>,

```

変更後

```
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path={`/index.html`} element={<Menu />} />
          <Route path={`/`} element={<Menu />} />
          <Route path={`/doc/:id`} element={<App />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>,
```
package.json の一部を以下のようにして下さい。

```
  "homepage": "/",
```
##### nginx の設定

Reactでは、トップページ以外をリロードした場合、404が返ってきます。  
そうならないようにWebアプリケーションサーバの設定が必要になります。  
ここでは、nginx の設定方法を記載します。  
404なったとき、　index.html にリダイレクトするような設定を追加します。

```
server {
    listen       80;
    
    location / {
        index  index.html index.htm;
        try_files $uri /index.html; <------- これを追加 
    }
}

```

#### 公開URLの先頭にパスがある場合

GitHubではデフォルトのデプロイだとプロジェクト名が付きます。
例えば  プロジェクト名が　crocus で
https://***.github.io/crocus/  
のように公開URLに　/crocus/  　が着く場合は

package.json にて
```
  "homepage": "/crocus/",
``` 
とします。

ただし、このようなURLの場合は、URLはハッシュタイプにした方がいいでしょう。
（ハッシュタイプにしない場合は、特定パス以下で404が発生した場合、特定パスのindex.htmlにリダイレクトするような設定が必要です。）



