import { createTheme } from "@mui/material";
import colors from "./base/colors";
import breakpoints from "./base/breakpoints";
import typography from "./base/typography";
import { CreateComponents } from "./base/create-component";

let components = CreateComponents();
export default createTheme({
    components,
    palette:{...colors},
    typography:{...typography},
    breakpoints:{...breakpoints}
});