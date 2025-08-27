import React, { useState } from "react";

function ChatPanel({ messages, onSend }) {
  const [input, setInput] = useState("");
  return (
    <div style={{ background: "#282c34", padding: "1rem", borderRadius: "8px", height: "350px", display: "flex", flexDirection: "column" }}>
      <h2>Chat IA</h2>
      <div style={{ flex: 1, overflowY: "auto", marginBottom: "1rem" }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ color: msg.role === "user" ? "#4fc3f7" : "#a3e635", textAlign: msg.role === "user" ? "right" : "left" }}>
            <strong>{msg.role === "user" ? "Tú:" : "IA:"}</strong> {msg.content}
          </div>
        ))}
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (input.trim()) onSend(input);
          setInput("");
        }}
        style={{ display: "flex", gap: "0.5rem" }}
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Pregunta a la IA..."
          style={{ flex: 1, padding: "0.5rem", borderRadius: "4px", border: "none" }}
        />
        <button type="submit" style={{ background: "#4fc3f7", color: "#222", border: "none", padding: "0.5rem 1rem", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>Enviar</button>
      </form>
    </div>
  );
}
export default ChatPanel;