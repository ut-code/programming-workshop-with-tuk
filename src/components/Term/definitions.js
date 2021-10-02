export default {
  references: {
    prepare: "事前準備",
    index: "ようこそ",
    html: "HTML",
    css: "ウェブサイトの見た目を整える",
    javascript: "JavaScriptことはじめ",
    expressions: "値と式と演算子",
    variables: "変数",
    boolean: "論理値と論理演算子",
    "if-statement": "条件分岐",
    functions: "関数",
    dom: "DOM",
    events: "イベント",
    project: "プロジェクト",
    deploy: "作ったウェブアプリを公開する",
  },
  terms: {
    fork: {
      name: "フォーク",
      definition:
        "GitHub において、他人が公開しているリポジトリを複製すること。この操作により、元のリポジトリに対して影響を与えることなくソースコードを変更できる。",
      reference: "prepare",
    },
    git: {
      name: "Git",
      definition: "分散型バージョン管理システムのひとつ。",
      reference: "prepare",
    },
    github: {
      name: "GitHub",
      definition:
        "Git を用いて、プログラムの保存、共有、公開などができる、開発者のための総合プラットフォーム。",
      reference: "prepare",
    },
    gitpod: {
      name: "Gitpod",
      definition:
        "GitHub 等に保存されているプログラムをブラウザ上で編集するためのサービス。",
      reference: "prepare",
    },
    repository: {
      name: "リポジトリ",
      definition: "ソースコードやそれに付随する情報のまとまり。",
      reference: "prepare",
    },
    html: {
      name: "HTML",
      definition: "ウェブページの構造を表すためのマークアップ言語。",
      reference: "html",
    },
    htmlNest: {
      name: "ネスト (HTML)",
      definition: "HTML要素の中に他の要素を入れること。",
      reference: "html",
    },
    javascript: {
      name: "JavaScript",
      definition:
        "ウェブサイトに動きを与えるために生まれたスクリプト言語。現在は機能が拡張され、ウェブサイト以外にも応用されるようになった。",
      reference: "javascript",
    },
    startTag: {
      name: "開始タグ",
      definition:
        "要素の先頭を表す。 <div>内容</div> ならば <div> が開始タグ。属性をつけることができる。",
      reference: "html",
    },
    tag: {
      name: "タグ",
      definition:
        "< から > までで囲まれた領域。<a> を「aタグ」のように読んでいる。",
      reference: "html",
    },
    attribute: {
      name: "属性",
      definition: "HTML要素の特徴を指定する値。開始タグの中に含まれる。",
      reference: "html",
    },
    element: {
      name: "HTML 要素",
      definition: "HTMLの開始タグから終了タグまでの領域。",
      reference: "html",
    },
    endTag: {
      name: "終了タグ",
      definition:
        "要素の終端を表す。 <div>内容</div> ならば </div> が終了タグ。",
      reference: "html",
    },
    css: {
      name: "CSS",
      definition:
        "ウェブサイトの見た目をカスタマイズするための言語。 HTML 要素 の style 属性は CSS を用いて記述する。",
      reference: "css",
    },
    styleAttribute: {
      name: "style 属性",
      definition:
        "表示可能な多くの HTML 要素に対して設定できる、見た目をカスタマイズするための属性。",
      reference: "css",
    },
    cssProperty: {
      name: "プロパティ (CSS)",
      definition:
        "CSS により設定できる見た目の種類。例えば color は文字色、font-size は文字の大きさ。",
      reference: "css",
    },
    javascriptStatement: {
      name: "文",
      definition:
        "JavaScriptにおいて、セミコロンによって区切られた命令の単位。ただしセミコロンは省略可能。",
      reference: "javascript",
    },
    javascriptValue: {
      name: "値 (JavaScript)",
      definition:
        "JavaScript上で扱われる単一のデータ。数値や文字列、論理値、オブジェクトなど。",
      reference: "expressions",
    },
    javascriptString: {
      name: "文字列 (JavaScript)",
      definition:
        "JavaScriptにおける値の一種。ダブルクォーテーションで囲んでプログラム上に直接記述できる。",
      reference: "expressions",
    },
    javascriptNumber: {
      name: "数値 (JavaScript)",
      definition: "JavaScriptにおける値の一種。プログラム中に直接記述できる。",
      reference: "expressions",
    },
    javascriptOperator: {
      name: "演算子 (Javascript)",
      definition:
        "JavaScript において、主に値に対して作用し、別の値を得るための記号。",
      reference: "expressions",
    },
    javascriptExpression: {
      name: "式 (JavaScript)",
      definition: "JavaScript において、値を生成するまとまり。",
      reference: "expressions",
    },
    javascriptEvaluation: {
      name: "評価 (JavaScript)",
      definition: "JavaScriptの実行エンジンが式から値を生成する動作。",
      reference: "expressions",
    },
    javascriptOperatorPriority: {
      name: "演算子の優先順位 (JavaScript)",
      definition:
        "複数の演算子を含む式の評価順序を決定するための指標。例えば、乗算演算子は加算演算子より優先順位が高いため、 3 + 4 * 5 は 3 + (4 * 5) と評価される。",
      reference: "expression",
    },
    javascriptVariable: {
      name: "変数",
      definition: "JavaScriptで値を一時的に保存しておくための入れ物。",
      reference: "variables",
    },
    javascriptDeclaration: {
      name: "宣言 (JavaScript)",
      definition: "JavaScriptで変数を使用するために必要な記述。",
      reference: "variables",
    },
    javascriptAssignment: {
      name: "代入 (JavaScript)",
      definition:
        "変数に値を設定する操作。それまで入っていた値は消えてしまう。",
      reference: "variables",
    },
    camelCase: {
      name: "キャメルケース",
      definition:
        "複数の単語にわたるフレーズを、2語目以降の先頭の文字を大文字にして結合する命名規則",
      reference: "variables",
    },
    javascriptBoolean: {
      name: "論理値 (JavaScript)",
      definition:
        "JavaScriptにおける値の一種で、真偽を表すもの。true または false の2種類しかない。",
      reference: "boolean",
    },
    javascriptControlFlow: {
      name: "制御構造 (JavaScript)",
      definition:
        "JavaScriptにおいて、通常上から下に実行される文の実行順序を変化させるための言語構造。",
      reference: "if-statement",
    },
    javascriptFunction: {
      name: "関数 (JavaScript)",
      definition: "引数や返り値を持つ文のまとまり。",
      reference: "functions",
    },
    javascriptParameter: {
      name: "引数 (JavaScript)",
      definition: "JavaScriptの関数に対し、呼び出し時に与えることのできる値。",
      reference: "functions",
    },
    javascriptPass: {
      name: "～ (値) を ～ (関数) に渡す",
      definition: "JavaScriptの関数に値を引数として設定して実行すること。",
      reference: "functions",
    },
    javascriptReturnValue: {
      name: "戻り値 (JavaScript)",
      definition: "JavaScriptの関数呼び出し式の評価結果となる値。",
      reference: "functions",
    },
    javascriptReturn: {
      name: "～ (値) を返す (JavaScript)",
      definition:
        "関数の実行が終了し、式の評価結果の値が確定すること。return 文により実現できる。",
      reference: "functions",
    },
    javascriptObject: {
      name: "オブジェクト (JavaScript)",
      definition:
        "JavaScriptにおける値の一種。内部にプロパティとを複数格納できる。",
      reference: "dom",
    },
    dom: {
      name: "DOM",
      definition:
        "HTML 構造を JavaScript のオブジェクトとして扱うための枠組み。",
      reference: "dom",
    },
    javascriptProperty: {
      name: "プロパティ (JavaScript)",
      definition: "JavaScriptのオブジェクトがその内部に持っている値。",
      reference: "dom",
    },
  },
};
