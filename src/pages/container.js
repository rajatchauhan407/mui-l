import { Button, Container } from "@mui/material";
import Typography  from "@mui/material/Typography";
import React from "react";
import useCounter from "../customHooks/useCounter";
function Containers(){
    const {count, increment} = useCounter();
     return <React.Fragment>
    <Container 
                maxWidth='xl' 
                sx={{
                    backgroundColor: 'primary.main',
                }}>
        <Typography textAlign={"center"} variant="body1">
            {count}
        </Typography>
        <Button onClick={increment} variant='contained' color='primary' size="small">
            Increment the Number
        </Button> 
    </Container>
    <Container 
                maxWidth='lg' 
                sx={{
                    backgroundColor: 'primary.main',
                }}>
        <Typography textAlign={"center"}>
            Hello World
        </Typography>
    </Container>
    <Container 
                maxWidth='md' 
                sx={{
                    backgroundColor: 'primary.main',
                }}>
        <Typography textAlign={"center"}>
            Hello World
        </Typography>
    </Container>
    <Container 
                maxWidth='sm' 
                sx={{
                    backgroundColor: 'primary.main',
                }}>
        <Typography textAlign={"center"}>
            Hello World
        </Typography>
    </Container>
    <Container 
                maxWidth='xs' 
                sx={{
                    backgroundColor: 'primary.main',
                }}>
        <Typography textAlign={"center"}>
            Hello World
        </Typography>
    </Container>
    {/* <Container 
                maxWidth='' 
                sx={{
                    backgroundColor: 'primary.main',
                }}>
        <Typography textAlign={"center"}>
            Hello World
        </Typography>
    </Container> */}
    </React.Fragment>
}
export default Containers;