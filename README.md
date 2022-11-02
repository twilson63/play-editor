# Simple Javascript Editor

This editor is composed with code-mirror 6 and is build to create simple javascript editors for web applications. The UX does not get
any easier. The editor is bundled for `esm` supported browsers.

## Current Version

`https://arweave.net/qe9Vpq-Yq6rwqld6dAGRRuuWhNAQo9i_ieQxfY0YEtU`

> The editor is deployed on arweave, a permenate storage network and will be available forever. The file is minified and can be downloaded or served via this url.

## Usage

```js
import Editor from "https://arwweave.net/qe9Vpq-Yq6rwqld6dAGRRuuWhNAQo9i_ieQxfY0YEtU";

const editor = Editor(document.getElementById("editor"));

// set editor value
editor.value("function hello(world) { return `hello ${world}`; }");
// get value
const currentText = editor.value();
```
