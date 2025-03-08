import { useState, useEffect } from "react";

import { Box } from "@mui/material";

import Form from "../components/Form";
import Item from "../components/Item";

import { useApp } from "../ThemedApp";

export default function Home() {
  const { showForm, setGlobalMsg } = useApp();

  const [data, setData] = useState([]);

  // Connecting to the API
  useEffect(() => {
    const api = import.meta.env.VITE_API;
    fetch(`${api}/content/posts`)
      .then(async (res) => {
        const result = await res.json();

        setData(
          result.map((post) => ({
            ...post,
            created: post.created || new Date().toISOString(), // Ensure crated exists
            user: {
              id: post.user?.id || 0,
              name: post.user?.name || "Anonymous",
              username: post.user?.username || "unknown",
              created: post.user?.created || new Date().toISOString(),
            },
          }))
        );
      })
      .catch((error) => console.error("Error fetching posts: ", error));
  }, []);

  const remove = (id) => {
    setData(data.filter((item) => item.id !== id));
    setGlobalMsg("An item deleted.");
  };

  const add = (content, name) => {
    const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    setData([{ id, content, name }, ...data]);
    setGlobalMsg("An item added.");
  };

  return (
    <Box>
      {showForm && <Form add={add} />}
      {data.map((item) => {
        return <Item key={item.id} item={item} remove={remove} />;
      })}
    </Box>
  );
}
