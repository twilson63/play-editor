import {EditorView, basicSetup} from "codemirror"
import {EditorState, Compartment} from "@codemirror/state"
import {javascript} from "@codemirror/lang-javascript"

let language = new Compartment, tabSize = new Compartment

let state = EditorState.create({
  extensions: [
    basicSetup,
    language.of(javascript()),
    tabSize.of(EditorState.tabSize.of(2))
  ]
})

export default function (el) {
  const editor = new EditorView({
    
    state,
    extensions: [basicSetup, javascript()],
    parent: el
  })

  return {
    value: (s) => {
      if (s) {
        editor.dispatch({
          changes: {
            from: 0,
            to: editor.state.doc.toString().length,
            insert: s
          }
        })
      }
      return editor.state.doc.toString()
    }
  }
}