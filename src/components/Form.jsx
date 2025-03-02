import { useRef } from "react";
// import { AppContext } from "./ThemedApp.jsx";
// import { useApp } from "../ThemedApp.jsx";

import { Box, TextField, Button } from "@mui/material";

import PropTypes from "prop-types";

export default function Form({ add }) {
  // const { mode } = useApp();
  const contentRef = useRef();
  // const nameRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Not to submit to server yet!
        const content = contentRef.current.value; // Get input value
        // const name = nameRef.current.value;

        if (!add) return; // If add() is not passed, return
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
          multiline
          sx={{ mb: 1 }}
        />
        <Button variant="contained" type="submit">
          Post
        </Button>
      </Box>
    </form>
  );
}

Form.propTypes = {
  add: PropTypes.func.isRequired, // Ensure 'add' is a function
}
