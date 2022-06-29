import React from "react"
import { Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import { Link, useMatch, useNavigate, useResolvedPath } from "react-router-dom"
import { useDrawerContext } from "../../contexts"
import logoImg from '../../assets/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';

interface IListItemMenuProps {
    to: string;
    icon: string;
    label: string;
    onClick: (() => void) | undefined;
}

const ListMenuLink: React.FC<IListItemMenuProps> = ({ icon, label, to, onClick }) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    }

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
                <Link to="/"></Link>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    )
}

export const SideMenu: React.FC = ({ children }) => {
    const theme = useTheme();
    const hideMenuSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const { isDrawerOpen, toggleDrawerOpen, drawerOption } = useDrawerContext();
    return (
        <>
            <Drawer open={isDrawerOpen} variant={"temporary"} onClose={toggleDrawerOpen}>
                <Box
                    width={theme.spacing(20)}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    margin={2}
                >

                    <img src={logoImg} width="100px" />

                    {/* {`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy" */}
                </Box>
                <Box
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    alignItems="center"
                    justifyContent="center"
                    width={theme.spacing(20)}
                    margin={2}
                >
                    <Typography>Menu</Typography>
                    <List component="nav">
                        {drawerOption.map(drawerOption => (
                            <ListMenuLink
                                to={drawerOption.path}
                                key={drawerOption.path}
                                icon={drawerOption.icon}
                                label={drawerOption.label}
                                onClick={hideMenuSmallScreen ? toggleDrawerOpen : undefined}
                            />
                        ))}
                    </List>
                </Box>
                <Box display="flex" justifyContent="space-evenly">
                    <a href="https://www.tiktok.com" target="_black">
                        <Icon fontSize="large" color="secondary">tiktok</Icon>
                    </a>
                    <a href="https://www.instagram.com" target="_black">
                        <InstagramIcon fontSize="large" color="secondary" />
                    </a>
                </Box>
            </Drawer>
            <Box
                height='100vh' marginLeft={hideMenuSmallScreen ? 0 : theme.spacing(2)} marginRight={hideMenuSmallScreen ? 0 : theme.spacing(2)}>
                {children}
            </Box>
        </>
    )
}