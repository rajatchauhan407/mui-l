import  Grid  from "@mui/material/Grid"
export default function Grids(){
    return <Grid container spacing={2} sx={{
        gap: 2,
        justifyContent: 'center',
    }}>
            <Grid item xs={12} lg={4} sx={{backgroundColor: 'primary.main'}}>
                Hello World
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2} xl={1} sx={{backgroundColor: 'primary.main'}}>
                Hello World
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2} xl={1} sx={{backgroundColor: 'primary.main'}}>
                Hello World
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2} xl={1} sx={{backgroundColor: 'primary.main'}}>
                Hello World
            </Grid>
    </Grid>
}