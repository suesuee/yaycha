import {
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

import PropTypes from "prop-types";

export default function UserList({ title }) {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3 }}>
        {title}
      </Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar />
          </ListItemAvatar>
          <ListItemText
            primary="Alice @alice"
            secondary="Alice's profile bio"
          />
        </ListItem>
      </List>
    </Box>
  );
}

UserList.propTypes = {
  title: PropTypes.string.isRequired, // Ensure 'add' is a function
};
