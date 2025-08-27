import React from "react";
import Editor from "@monaco-editor/react";

function EditorPanel({ code, onChange, onSave, onRun }) {
  return (
    <div className="editor-panel" style={{ background: "#282c34", padding: "1rem", borderRadius: "8px", flex: 1 }}>
      <h2>Editor de Código</h2>
      <Editor
        height="300px"
        defaultLanguage="javascript"
        value={code}
        onChange={onChange}
        theme="vs-dark"
      />
      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <button onClick={onRun}>Ejecutar Código</button>
        <button onClick={onSave}>Guardar Archivo</button>
      </div>
    </div>
  );
}
export default EditorPanel;