import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/icons-material';

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0  #dadce0
`;

const Heding = styled(Typography)`
    color: #5F6368;
    font-size: 24px;
    margin-left: 25px;

`;

const HeaderBar = ({ open, handleDrawer }) => {
    const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeKlogo.com.png';
    return (
        <>
            <Header position="fixed" open={open}>

                <Toolbar>
                    <IconButton
                        onClick={handleDrawer}
                        edge="start"
                        sx={{
                            marginRight: '20px'
                        }}
                    >
                        <Menu />
                    </IconButton>
                    <img src={logo} alt='logo' style={{ width: 30 }} />
                    <Heding>  Keep </Heding>

                </Toolbar>
            </Header>
        </>
    )
}

export default HeaderBar;
