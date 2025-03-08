import { useState, useEffect } from "react";

import { Alert, Box } from "@mui/material";

import Form from "../components/Form";
import Item from "../components/Item";

import { useApp } from "../ThemedApp";

export default function Home() {
  const { showForm, setGlobalMsg } = useApp();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Connecting to the API
  useEffect(() => {
    const api = import.meta.env.VITE_API;
    fetch(`${api}/content/posts`)
      .then(async (res) => {
        if (res.ok) {
          setData(await res.json());
          setLoading(false);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      });
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

  if (error) {
    return (
      <Box>
        <Alert severity="warning">Cannot fetch data</Alert>
      </Box>
    );
  }

  if (loading) {
    return <Box sx={{ textAlign: "center" }}>Loading...</Box>;
  }

  return (
    <Box>
      {showForm && <Form add={add} />}
      {data.map((item) => {
        return <Item key={item.id} item={item} remove={remove} />;
      })}
    </Box>
  );
}
