import { useRef } from "react";
// import { AppContext } from "./ThemedApp.jsx";
// import { useApp } from "../ThemedApp.jsx";

import { Box, TextField, Button } from "@mui/material";

export default function Form({ add }) {
  // const { mode } = useApp();
  const contentRef = useRef();
  // const nameRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Not to submit to server yet!
        const content = contentRef.current.value;
        // const name = nameRef.current.value;

        add(content, "Alice"); // Pass the props to add()

        e.currentTarget.reset(); // Clear Form input
      }}
    >
      <Box sx={{ mb: 4, textAlign: "right" }}>
        <TextField
          inputRef={contentRef}
          type="text"
          placeholder="Content"
          fullWidth
          multilinesx={{ mb: 1 }}
        />
        <Button variant="contained" type="submit">
          Post
        </Button>
      </Box>
    </form>
  );
}
