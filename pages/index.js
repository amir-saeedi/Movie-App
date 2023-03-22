import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

import styles from "@/styles/Home.module.css";
import { Card, CardContent, CssBaseline, Typography } from "@mui/material";
import { Container } from "@mui/system";
//
import Navbar from "@/components/Navbar";
import Searchbar from "@/components/Searchbar";
import QuickAccessList from "@/components/sidebar/QuickAccessList";
import CardStyle from "@/components/CardStyle";
import MainHeader from "@/components/main/MainHeader";

const inter = Inter({ subsets: ["latin"] });


export default function Home(props) {
    console.log(props)
    return (
        <>
            {props.error ? <Typography variant="h3">{props.error}</Typography>
                : <>
                    <CssBaseline />
                    <header>
                        <Navbar />
                        <Searchbar />
                    </header>
                    <main className={styles.main}>
                        <header>
                            {props.data &&
                                <MainHeader props={props.data} />
                            }
                        </header>
                        <main>
                            <Card
                                sx={{
                                    display: "flex",
                                    flexDirection: { xs: "column-reverse", sm: "row" },
                                    justifyContent: "space-between",
                                    width: "100%",
                                    background: "transparent"
                                }}
                            >
                                <Card sx={{ maxWidth: { xs: "100%", sm: "30%" }, background: "#111", }}>
                                    <Container maxWidth="xl">
                                        <CardContent>
                                            <QuickAccessList />
                                        </CardContent>
                                    </Container>
                                </Card>
                                <CardContent sx={{ margin: "auto" }}>
                                    <Card>
                                        <Container maxWidth="xl" sx={{ margin: "auto", display: "flex", flexDirection: "column", gap: 3, backgroundColor: "#444" }}>
                                            {props.data1 && props.data1.items && props.data1.items.map((val, index) => {
                                                if (index < 3) {
                                                    return <CardStyle props={val} />
                                                }
                                            })}
                                        </Container>
                                    </Card>
                                </CardContent>
                            </Card>
                        </main>
                    </main>
                </>}
        </>
    );
}

export async function getServerSideProps() {
    try {
        // Fetch data from external API
        const res = await fetch("https://imdb-api.com/en/API/BoxOffice/k_szu1gars")
        const data = await res.json()
        const res1 = await fetch("https://imdb-api.com/en/API/InTheaters/k_szu1gars")
        const data1 = await res1.json()
        // Pass data to the page via props
        return {
            props: {
                data: data,
                data1: data1
            }
        }
    } catch (error) {
        // console.error(error)
        return {
            props: {
                error: "there is have error please reload page :)",
            }
        }
    }
}
