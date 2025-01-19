import { useState } from "react";
// import { AppContext } from "./ThemedApp.jsx";
import { useApp } from "./ThemedApp.jsx";
import List from "./List.jsx";
import Item from "./components/Item.jsx";
import Form from "./components/Form.jsx";

export default function App() {
  const { mode, setMode, showForm, setShowForm } = useApp();
  // const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([
    { id: 1, content: "Hello, World!", name: "Alice" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 3, content: "Yay, interesting.", name: "Chris" },
  ]);

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const add = (content, name) => {
    const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    setData([...data, { id, content, name }]); // 1st ...data is what we have, { } is what we added
  };

  return (
    <div
      style={{
        minHeight: 1500,
        background: mode === "dark" ? "black" : "white",
        color: mode === "dark" ? "white" : "black",
        paddingTop: 20,
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0 0 20px 0",
          }}
        >
          Yaycha
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button
              onClick={() => setShowForm(!showForm)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 50,
                border: "0 none",
                background: showForm ? "#dc3545" : "blue",
                color: "white",
              }}
            >
              {showForm ? "x" : "+"}
            </button>
            <button
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              style={{
                marginLeft: 8,
                padding: "0 20px",
                height: 32,
                borderRadius: 32,
                border: "0 none",
                background: mode === "dark" ? "#333" : "#ddd",
                color: mode === "dark" ? "white" : "black",
              }}
            >
              {" "}
              {mode === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </h1>

        {showForm && <Form add={add} />}

        <List>
          {data.map((item) => {
            return <Item key={item.id} item={item} remove={remove} />;
          })}
        </List>
      </div>
    </div>
  );
}
