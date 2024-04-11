import React, {   useState } from "react";
import Editor from "@monaco-editor/react";
import Languageselector from "./languageselector";
import { settemplate } from "../runcode";
import "../static/editor.css";
import Output from "./output";
const Editorbox = () => {
  const [language, setLanguage] = useState('javascript');
  const [codevalue, setcode] = useState();

  const [filename, setfilename] = useState("file");

  function onselect(e) {
    setLanguage(e.target.value);
    setcode(settemplate(e.target.value));
} 

  function editfilename(e) {
    e.preventDefault();
    document.querySelector("#name").contentEditable = true;
    setfilename(filename);
  }

  function handleEditorChange(value) {
    setcode(value);
  }
  return (
    <>
      <div className="editor-container">
        <div className="editor">
          <div className="filename">
            <span id="name">{filename}</span>
            <div className="fe" onClick={editfilename}></div>
            <Languageselector language={language} onselect={onselect} />
          </div>
          <Editor
            height="90vh"
            defaultLanguage={language}
            language={language}
            theme="vs-dark"
            value={codevalue}
            onChange={handleEditorChange}
          />
          <span id="fileid">fileId : 134g2</span>
        </div>

        {/* <div className="output">
          <h2>Output</h2>
          <button id="run" type="submit">Run ▶</button>
          <div className="output-box">"Hello world"</div>
        </div> */}
        <Output code={codevalue} lang={language} />
      </div>
    </>
  );
};

export default Editorbox;
