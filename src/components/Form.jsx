// import { useContext, useRef } from "react";
// import { AppContext } from "./ThemedApp.jsx";
import { useApp } from "../ThemedApp.jsx";

export default function Form({ add }) {
  const { mode } = useApp();
  const contentRef = useRef();
  const nameRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Not to submit to server yet!
        const content = contentRef.current.value;
        const name = nameRef.current.value;

        add(content, name); // Pass the props to add()

        e.currentTarget.reset(); // Clear Form input
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        background: mode === "dark" ? "#555" : "#def",
      }}
    >
      <input
        ref={nameRef}
        type="text"
        placeholder="Name"
        style={{ padding: 5 }}
      />
      <input
        ref={contentRef}
        type="text"
        placeholder="Content"
        style={{ padding: 5 }}
      />
      <button
        type="submit"
        style={{
          padding: 8,
          background: "#0d6efd",
          color: "white",
          border: "0 none",
        }}
      >
        Post
      </button>
    </form>
  );
}
