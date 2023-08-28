import { Box } from "@mui/material";
import { Typography } from "@mui/material";
function BoxMaterial() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "primary.main",
        "&:hover": {
          backgroundColor: "secondary.main",
        },
        borderRadius: 2,
        cursor: "pointer",
        color: "white.main",
      }}
    >
    <Typography 
        variant='h3'
        >
        Hello World
    </Typography>
    </Box>
  );
}
export default BoxMaterial;