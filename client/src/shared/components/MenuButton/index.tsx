import { Button, Icon } from "@mui/material";
import { useDrawerContext } from "../../contexts";


export const MenuButton = () => {
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Button
            sx={{
                width: 64,
                height: 36
            }}
            variant="contained"
            color="primary"
            onClick={toggleDrawerOpen}>

            <Icon>
                menu
            </Icon>
        </Button >
    );
}
