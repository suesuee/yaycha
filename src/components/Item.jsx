import { Box, Card, CardContent, Typography, IconButton } from "@mui/material";
import {
  Alarm as TimeIcon,
  AccountCircle as UserIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { green } from "@mui/material/colors";
import PropTypes from "prop-types";
import { formatRelative } from "date-fns";

export default function Item({ item, remove, primary }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ mb: 2 }}>
      {primary && <Box sx={{ height: 50, bgcolor: green[500] }} />}

      <CardContent
        onClick={() => navigate(`/comments/${item.id}`)}
        sx={{ cursor: "pointer" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* Display Post Timestamp */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TimeIcon fontSize="small" color="success" />
            <Typography variant="caption" sx={{ color: green[500] }}>
              {item.created
                ? formatRelative(new Date(item.created), new Date())
                : "No date"}
            </Typography>
          </Box>

          {/* Delete Button */}
          <IconButton
            sx={{ color: "text.fade" }}
            size="small"
            onClick={(e) => {
              remove(item.id);
              e.stopPropagation();
            }}
          >
            <DeleteIcon color="inherit" fontSize="inherit" />
          </IconButton>
        </Box>

        {/* Post Content */}
        <Typography sx={{ my: 3 }}>{item.content}</Typography>

        {/* Display User Info */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <UserIcon fontSize="small" color="info" />
          <Typography variant="caption">
            {item.user?.name || "Anonymous"}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
      .isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      created: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date),
      ]).isRequired,
    }).isRequired,
  }).isRequired,
  remove: PropTypes.func.isRequired,
  primary: PropTypes.bool,
};
