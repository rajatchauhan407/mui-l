import { Container } from '@mui/material';
import Box from '@mui/material/Box';
function Boxes(){
    return  <Container sx={{
        boxSizing: "border-box",
    }}>
        <Box sx={{
                backgroundColor: 'primary.main',
                height:"400px",
                width:{
                    xs: "100%",
                    md: "50%",
                    lg: "25%"
                },
                mx: {
                    xs:0,
                    md:4,
                    lg:6
                },
            }}>

            </Box>
    </Container>
    
}

export default Boxes;