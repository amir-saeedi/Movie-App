import * as React from 'react'
import { Card, CardContent, Typography } from "@mui/material";
import { CardMedia } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import SwiperCore, { Navigation, Pagination, A11y, FreeMode, EffectFade, Autoplay } from 'swiper';
import { shuffle } from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-fade';
// import "swiper/css/bundle"

// import required modules
const colors = [
    "#097974",
    "#090f79",
    "#790933",
    "#79096d",
    "#09791f",
    "#09791f",
    "#793609",
    "#797209",
];
SwiperCore.use([Autoplay]);

const MainHeader = ({ props }) => {
    const [color, setColor] = React.useState();
    React.useEffect(() => {
        setColor(shuffle(colors).pop());
    }, []);
    console.log(props)
    return (
        <Card
            sx={{
                background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, ${color} 35%, rgba(255,255,255,0.1) 100%)`,
                display: "flex",
                flexDirection: { xs: "column-reverse", sm: "row" },
                justifyContent: "center",
                width: "100vw",
                height: 550,
            }}
        >
            <CardContent>
                <Swiper
                    style={{ height: "100%" }}
                    modules={[EffectFade]}
                    effect="fade"
                    loop={true}
                    autoplay={{
                        delay: 7000,
                        disableOnInteraction: false
                    }}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    {props.data && props.data?.items.map(val => {
                        return (<SwiperSlide key={val.id}>
                            {({ isActive }) => (
                                <Card
                                    sx={{
                                        backgroundColor: "rgba(0,0,0,0.4)",
                                        boxShadow: "-1px -1px 2px #737373",
                                        height: "100%", display: "flex"
                                    }}>
                                    <CardContent sx={{ width: "60%" }}>
                                        <CardMedia
                                            className="animate__animated animate__fadeInLeft"
                                            loading="lazy"
                                            component="img"
                                            height="100%"
                                            image={val.image}
                                            alt={val.title}
                                            sx={{
                                                borderRadius: "5px",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat",
                                                backgroundSize: "cover",
                                            }}
                                        />
                                    </CardContent>
                                    <CardContent sx={{ width: "40%", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "30px" }}>
                                        <Typography
                                            variant="h4"
                                            className='animate__animated animate__fadeInLeft animate__delay-1s'
                                            align='center' sx={!isActive ? { display: 'none' } : { color: "#fff" }}>
                                            {val.title}
                                        </Typography >
                                        <Typography className='animate__animated animate__fadeInLeft animate__delay-2s'
                                            align='left' sx={!isActive ? { display: 'none' }
                                            : { color: "#c7c7c7",display:"flex",justifyContent:"start",alignItems:"center",gap:"5px"}}>
                                            <MilitaryTechIcon />
                                            <span>rank: {val.rank}</span>
                                        </Typography>
                                    </CardContent>
                                    <div className={!isActive ? { display: 'none' } : "element-swiper-slide animate__animated animate__fadeInRight"}>
                                        <ArrowForwardIcon className='icon-element-swiper-slide animate__animated animate__fadeInRight animate__delay-1s' />
                                    </div>
                                </Card>
                            )}
                        </SwiperSlide>
                        )
                    })}
                </Swiper>
            </CardContent>
        </Card>
    )
}

export default MainHeader
