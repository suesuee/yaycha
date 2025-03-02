import { useState } from "react";
// import { AppContext } from "./ThemedApp.jsx";

import { Box, Container } from "@mui/material";

import Header from "./components/Header.jsx";
import Item from "./components/Item.jsx";
import Form from "./components/Form.jsx";

import { useApp } from "./ThemedApp.jsx";

export default function App() {
  const { showForm, setGlobalMsg } = useApp();
  // const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([
    { id: 3, content: "Yay, interesting.", name: "Chris" },
    { id: 2, content: "React is fun.", name: "Bob" },
    { id: 1, content: "Hello, World!", name: "Alice" },
  ]);

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
    setGlobalMsg("An item deleted,");
  };

  const add = (content, name) => {
    const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    setData([{ id, content, name }, ...data]); // 1st ...data is what we have, { } is what we added
    setGlobalMsg("An item added.");
  };

  return (
    <Box>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        {showForm && <Form add={add} />}

        {data.map((item) => (
          <Item key={item.id} item={item} remove={remove} />
        ))}
      </Container>
    </Box>
  );
}
