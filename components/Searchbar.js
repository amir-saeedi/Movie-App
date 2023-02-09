import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { AppBar, Toolbar } from '@mui/material';
import { Box, Container } from '@mui/system';

export default function Searchbar() {
    return (
        <AppBar position='static' sx={{ pt: 10 }}>
            <Container maxWidth="xl">
                <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }} disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mb: 1 }}
                        >
                            <IconButton sx={{ p: '10px' }} aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        hello
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
