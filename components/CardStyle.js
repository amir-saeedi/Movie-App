import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TheatersIcon from '@mui/icons-material/Theaters';
import { Box } from '@mui/material';

export default function CardStyle({ props }) {
    console.log(props)
    return (
        <Card sx={{ maxWidth: 800, paddingBottom: "5px", backgroundColor: "#444" }}>
            <CardHeader
                sx={{ color: "#fff" }}
                title={props.title}
            />
            <CardContent sx={{ display: "flex", height: "100%" }}>
                <CardMedia
                    component="img"
                    loading="lazy"
                    height="350px"
                    image={props.image}
                    alt={props.title}
                    sx={{
                        width: "40%",
                        borderRadius: "5px",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                />
                <Box sx={{
                    width: "60", paddingLeft: 3,
                    display: "flex", flexDirection: "column",
                    justifyContent: "space-between"
                }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TheatersIcon sx={{ color: "#fff", fontSize: 20 }} />
                        <Typography variant='p' fontSize={12} color="text.secondary" fontWeight="bold" textAlign={"justify"} sx={{ paddingLeft: 1 }}>
                            Directors:
                            <Typography variant="span" fontSize={12} sx={{ color: "#fff", paddingLeft: 1 }}>
                                {props.directors}
                            </Typography>
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TheatersIcon sx={{ color: "#fff", fontSize: 20 }} />
                        <Typography variant='p' fontSize={12} color="text.secondary" fontWeight="bold" textAlign={"justify"} sx={{ paddingLeft: 1 }}>
                            Directors:
                            <Typography variant="span" fontSize={12} sx={{ color: "#fff", paddingLeft: 1 }}>
                                {props.directors}
                            </Typography>
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TheatersIcon sx={{ color: "#fff", fontSize: 20 }} />
                        <Typography variant='p' fontSize={12} color="text.secondary" fontWeight="bold" textAlign={"justify"} sx={{ paddingLeft: 1 }}>
                            Directors:
                            <Typography variant="span" fontSize={12} sx={{ color: "#fff", paddingLeft: 1 }}>
                                {props.directors}
                            </Typography>
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TheatersIcon sx={{ color: "#fff", fontSize: 20 }} />
                        <Typography variant='p' fontSize={12} color="text.secondary" fontWeight="bold" textAlign={"justify"} sx={{ paddingLeft: 1 }}>
                            Directors:
                            <Typography variant="span" fontSize={12} sx={{ color: "#fff", paddingLeft: 1 }}>
                                {props.directors}
                            </Typography>
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TheatersIcon sx={{ color: "#fff", fontSize: 20 }} />
                        <Typography variant='p' fontSize={12} color="text.secondary" fontWeight="bold" textAlign={"justify"} sx={{ paddingLeft: 1 }}>
                            Directors:
                            <Typography variant="span" fontSize={12} sx={{ color: "#fff", paddingLeft: 1 }}>
                                {props.directors}
                            </Typography>
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TheatersIcon sx={{ color: "#fff", fontSize: 20 }} />
                        <Typography variant='p' fontSize={12} color="text.secondary" fontWeight="bold" textAlign={"justify"} sx={{ paddingLeft: 1 }}>
                            Directors:
                            <Typography variant="span" fontSize={12} sx={{ color: "#fff", paddingLeft: 1 }}>
                                {props.directors}
                            </Typography>
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TheatersIcon sx={{ color: "#fff", fontSize: 20 }} />
                        <Typography variant='p' fontSize={12} color="text.secondary" fontWeight="bold" textAlign={"justify"} sx={{ paddingLeft: 1 }}>
                            Directors:
                            <Typography variant="span" fontSize={12} sx={{ color: "#fff", paddingLeft: 1 }}>
                                {props.directors}
                            </Typography>
                        </Typography>
                    </Box>
                    {/* <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions> */}
                </Box>
            </CardContent>
        </Card>
    );
}
