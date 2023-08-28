import  Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({theme }) => ({
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark
    }
}));
export default StyledButton;


