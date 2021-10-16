---
title: DOM
---

import Term from "@site/src/components/Term";

## <Term type="javascriptObject">オブジェクト</Term>

<p><Term type="javascript">JavaScript</Term> で扱うことのできる<Term type="javascriptValue">値</Term>の種類として、これまで<Term type="javascriptNumber">数値</Term>、<Term type="javascriptString">文字列</Term>、<Term type="javascriptBoolean">論理値</Term>を扱ってきました。</p>

<p><Term strong type="javascriptObject">オブジェクト</Term>もまた、<Term type="javascript">JavaScript</Term> の<Term type="javascriptValue">値</Term>ですが、今まで扱ってきた<Term type="javascriptValue">値</Term>とは少し性質が異なります。</p>

## <Term type="html">HTML</Term> 要素を <Term type="javascript">JavaScript</Term> で取得する

<p><Term strong type="dom">DOM</Term>（Document Object Model）は、<Term type="html">HTML</Term> 構造を <Term type="javascript">JavaScript</Term> の<Term type="javascriptObject">オブジェクト</Term>として扱うための枠組みです。<Term type="html">HTML</Term> と <Term type="css">CSS</Term> のほとんどの機能は <Term type="javascript">JavaScript</Term> から制御することができます。</p>

`document.getElementById` <Term type="javascriptFunction">関数</Term>は、<Term type="javascriptParameter">引数</Term>として <Term type="element">HTML 要素</Term>の `id` <Term type="attribute">属性</Term>に指定された値を<Term type="javascriptString">文字列</Term>として<Term type="javascriptPass">渡す</Term>ことで、その<Term type="element">要素</Term>を表す<Term type="javascriptObject">オブジェクト</Term>を<Term type="javascriptReturn">返し</Term>ます。

```html title="index.html"
<div id="greeting">Hello World</div>
```

```js title="script.js"
let element = document.getElementById("greeting");
element.textContent = "Hello DOM";
```

<p><Term type="javascriptVariable">変数</Term> <code>element</code> には、<code>index.html</code> に記述された <code>div</code> <Term type="element">要素</Term>に対応する<Term type="javascriptObject">オブジェクト</Term>が<Term type="javascriptAssignment">代入</Term>されています。</p>

![DOM](./11-dom/dom.png)

オブジェクトは、複数の<Term strong type="javascriptProperty">プロパティ</Term>と呼ばれる<Term type="javascriptValue">値</Term>を持ちます。<Term type="javascriptProperty">プロパティ</Term>にはそれぞれ名前がついており、`document.getElementById` が<Term type="javascriptReturn">返す</Term><Term type="javascriptObject">オブジェクト</Term>の<Term type="javascriptProperty">プロパティ</Term>は、それぞれが<Term type="element">HTML 要素</Term>の特徴を表しています。

:::note
<p><Term type="javascriptObject">オブジェクト</Term>の<Term type="javascriptProperty">プロパティ</Term>は、<Term type="css">CSS</Term> における<Term type="cssProperty">プロパティ</Term>と似ているものの、全く異なるものです。文脈により何を意味しているのかが変わるので注意してください。</p>
:::

`document.getElementById` が<Term type="javascriptReturn">返す</Term><Term type="javascriptObject">オブジェクト</Term>には、たくさんの<Term type="javascriptProperty">プロパティ</Term>が含まれています。下はその一部分です。

| プロパティ    | 説明                                                 |
| ------------- | ---------------------------------------------------- |
| `textContent` | <Term type="element">要素</Term>内部のテキスト       |
| `innerHTML`   | <Term type="element">要素</Term>内部の HTML          |
| `tagName`     | <Term type="tag">タグ</Term>の名前                   |
| `style`       | <Term type="element">要素</Term>に設定されたスタイル |

`element.textContent` のドット記号は、<Term type="javascriptObject">オブジェクト</Term>の<Term type="javascriptProperty">プロパティ</Term>にアクセスするための記法です。`textContent` <Term type="javascriptProperty">プロパティ</Term>は、<Term type="element">HTML 要素</Term>の内部のテキストを表します。<Term type="javascriptObject">オブジェクト</Term>の<Term type="javascriptProperty">プロパティ</Term>は通常の<Term type="javascriptVariable">変数</Term>のように取得や<Term type="javascriptAssignment">代入</Term>が可能で、上の例では `textContent` <Term type="javascriptProperty">プロパティ</Term>に対して `"Hello DOM"` という<Term type="javascriptString">文字列</Term>を代入することで、`div` <Term type="element">要素</Term>の内部のテキストを変更しています。

## <Term type="element">HTML 要素</Term>のスタイルを変更する

`document.getElementById` <Term type="javascriptFunction">関数</Term>が返す<Term type="javascriptObject">オブジェクト</Term>の `style` <Term type="javascriptProperty">プロパティ</Term>は、その要素の <Term type="styleAttribute">`style` 属性</Term>と対応します。`style` <Term type="javascriptProperty">プロパティ</Term>に格納されている<Term type="javascriptValue">値</Term>自体も<Term type="javascriptObject">オブジェクト</Term>となっており、その各<Term type="javascriptProperty">プロパティ</Term>が CSS の<Term type="cssProperty">プロパティ</Term>に対応します。

```js title="script.js"
element.style.backgroundColor = "red";
```

このプログラムは、取得した<Term type="element">要素</Term>の背景色を赤色に変更します。

![JavaScriptからスタイルを操作する](./11-dom/change-styles.png)

<p><Term type="css">CSS</Term> の<Term type="cssProperty">プロパティ</Term>名である <code>background-color</code> は、内部にハイフンが含まれているため、<code>element.style.background-color</code>のように指定してしまうと、ハイフンが減算<Term type="javascriptOperator">演算子</Term>として解釈されてしまいます。<code>style</code> <Term type="javascriptProperty">プロパティ</Term>では、<Term type="css">CSS</Term> の<Term type="cssProperty">プロパティ</Term>名は<Term type="camelCase">キャメルケース</Term>として指定する必要があることに注意してください。</p>
