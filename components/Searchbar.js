import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { AppBar, Backdrop, Button, Card, FormHelperText, Input, InputLabel, TextField, Toolbar, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import TheatersIcon from '@mui/icons-material/Theaters';
import TvIcon from '@mui/icons-material/Tv';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
//
import { FormControl } from '@mui/material';
import Link from 'next/link';

export default function Searchbar() {
    return (
        <AppBar position='static' sx={{ pt: { sx: 0, md: 10 } }}>
            <Container maxWidth="xl">
                <Toolbar sx={{ display: { xs: 'none', md: 'flex' } }} disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <Paper
                            component="form"
                            onSubmit={(e) => { console.log(e) }}
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, mb: 1 }}
                        >
                            <IconButton sx={{ p: '10px' }} aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <TextField id="standard-basic" sx={{ mb: 2, ml: 1, flex: 1 }} name="search" label="Search name" variant="standard" />
                            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Container maxWidth="xl">
                            <Card sx={{ display: "flex", background: "transparent", boxShadow: "none", gap: 3 }}>
                                <Typography variant='h6'>
                                    <Link href={"/hello"}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#c7c7c7" }}>
                                            <TheatersIcon />
                                            <Typography>Top Movies</Typography>
                                        </Box>
                                    </Link>
                                </Typography>
                                <Typography variant='h6'>
                                    <Link href={"/hello"}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#c7c7c7" }}>
                                            <TvIcon />
                                            <Typography>Top TVs</Typography>
                                        </Box>
                                    </Link>
                                </Typography>
                                <Typography variant='h6'>
                                    <Link href={"/hello"}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, color: "#c7c7c7" }}>
                                            <ElectricBoltIcon />
                                            <Typography>Coming Soon</Typography>
                                        </Box>
                                    </Link>
                                </Typography>
                            </Card >
                            {/* <Card sx={{ display: "flex", background: "transparent", boxShadow: "none", gap: 2 }}>
                                <Typography variant='h6'>
                                    <Link href={"/hello"}>
                                        #Best Movie
                                    </Link>
                                </Typography>
                                <Typography variant='h6'>
                                    <Link href={"/hello"}>
                                        #Best Movie
                                    </Link>
                                </Typography>
                                <Typography variant='h6'>
                                    <Link href={"/hello"}>
                                        #Best Movie
                                    </Link>
                                </Typography>
                            </Card> */}
                        </Container>
                    </Box>
                </Toolbar>
            </Container>
        </ AppBar>
    );
}
