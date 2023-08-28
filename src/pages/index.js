// import BoxMaterial from "../components/box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Box, Stack } from "@mui/material";
import useWindowSize from "../customHooks/useWindowSize";
import LiftUp from "./lift";
function Home(){
    const size = useWindowSize();
    console.log(size);
    return <><Stack spacing={12} py={2} px={2}direction="row" sx={{

    }}
        divider={<Divider orientation="vertical" flexItem color="primary.main"/>}>
        <Button variant='contained' color='primary' size="small">
            Hello World 1
        </Button>
        <Button variant='contained' color='primary' size="medium">
            Hello World
        </Button>
        <Button variant='contained' color='primary' size="large">
            Hello World
        </Button>
    </Stack>
    <Divider orientation="horizontal" flexItem color="primary.main"/>
    <Box>
        <p>Width:{size.width}</p>
        <p>Height:{size.height}</p>
    </Box>

        <LiftUp
            value="Hello"
        />
    </>;
    
}
export default Home;