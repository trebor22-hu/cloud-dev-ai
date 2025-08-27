import React from "react";

function OutputPanel({ output }) {
  return (
    <div style={{ background: "#15161d", padding: "1rem", borderRadius: "8px", marginTop: "1rem" }}>
      <h2>Resultados</h2>
      <pre style={{ color: "#fff" }}>{output}</pre>
    </div>
  );
}
export default OutputPanel;
