import React, { useState } from "react";

function FileManager({ files, currentFile, onSwitch, onAdd }) {
  const [newFile, setNewFile] = useState("");
  return (
    <div style={{ background: "#282c34", padding: "1rem", borderRadius: "8px" }}>
      <h2>Archivos</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {files.map((f) => (
          <li key={f.name} style={{ marginBottom: "0.5rem" }}>
            <button
              style={{
                background: currentFile === f.name ? "#4fc3f7" : "#15161d",
                color: "#fff",
                border: "none",
                padding: "0.25rem 0.5rem",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
              }}
              onClick={() => onSwitch(f.name)}
            >
              {f.name}
            </button>
          </li>
        ))}
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (newFile.trim()) onAdd(newFile);
          setNewFile("");
        }}
        style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}
      >
        <input
          value={newFile}
          onChange={e => setNewFile(e.target.value)}
          placeholder="Archivo nuevo"
          style={{ flex: 1, borderRadius: "4px", border: "none", padding: "0.25rem" }}
        />
        <button type="submit" style={{ background: "#a3e635", color: "#222", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>Agregar</button>
      </form>
    </div>
  );
}
export default FileManager;