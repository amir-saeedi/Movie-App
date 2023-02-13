import * as React from 'react'
import { Card, CardContent, Typography } from "@mui/material";
import { Navigation, Pagination, A11y, FreeMode, EffectCards } from 'swiper';
import { shuffle } from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle"

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

const MainHeader = ({ props }) => {
    const [color, setColor] = React.useState();
    React.useEffect(() => {
        setColor(shuffle(colors).pop());
    }, []);

    console.log(props)
    return (
        // <Card
        //     sx={{
        //         background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, ${color} 35%, rgba(255,255,255,0.1) 100%)`,
        //         display: "flex",
        //         flexDirection: { xs: "column-reverse", sm: "row" },
        //         justifyContent: "center",
        //         minWidth: "100vw",
        //         height: 400,
        //     }}
        // >
        //     <CardContent>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, EffectCards]}
            effect="cards"
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
            {props.data && props.data.items.map(val => {
                return (<SwiperSlide key={val.id}>
                    {/* {({ isActive }) => (
                        <div>Current slide is {isActive ? 'active' : 'not active'}</div>
                    )} */}
                    <Typography variant='p'>
                        {val.title}
                    </Typography>
                    <img src={val.image} alt={val.img}/>
                </SwiperSlide>
                )
            })}
        </Swiper>
        //     </CardContent>
        // </Card>
    )
}

export default MainHeader

{/* <Swiper
                    style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                    }}
                    speed={600}
                    parallax={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Parallax, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <div
                        slot="container-start"
                        className="parallax-bg"
                        style={{
                            "background-image":
                                "url(https://swiperjs.com/demos/images/nature-1.jpg)",
                        }}
                        data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide>
                        <div className="title" data-swiper-parallax="-300">
                            Slide 1
                        </div>
                        <div className="subtitle" data-swiper-parallax="-200">
                            Subtitle
                        </div>
                        <div className="text" data-swiper-parallax="-100">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                                laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                                Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                                Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
                                ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
                                tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper> */}
