import React from "react";
// import StyledButton from "../components/button";
import { Button, Typography } from "@mui/material";
import './components.css';
function MyComponents() {
  return (
    <div className="compo">
      <h1>My Components</h1>
      <Button 
        variant="contained"
        color="secondary" 
        sx={{
          width:{
            xs: "100%",
            md: "50%",
            lg: "25%"
          }
        }}
        ><Typography variant="h1">
           My Button
        </Typography>
        </Button>
        <Typography variant='h1'>Hello World</Typography>
        <Typography variant='h2'>Hello World</Typography>
        <Typography variant='h3'>Hello World</Typography>
        <Typography variant='h4'>Hello World</Typography>
        <Typography variant='h5'>Hello World</Typography>
        <Typography variant='h6'>Hello World</Typography>
    </div>
  );
}
export default MyComponents;