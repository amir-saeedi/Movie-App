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
    return (
        <>
            <CssBaseline />
            <header>
                <Navbar />
                <Searchbar />
            </header>
            <main className={styles.main}>
                <header>
                    {props.data &&
                        <MainHeader props={props} />
                    }
                </header>
                <Card
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column-reverse", sm: "row" },
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Card sx={{ maxWidth: { xs: "100%", sm: "30%" }, background: "#444", }}>
                        <Container maxWidth="xl">
                            <CardContent>
                                <QuickAccessList />
                            </CardContent>
                        </Container>
                    </Card>
                    <Card sx={{ margin: "auto" }}>
                        <Container maxWidth="xl" sx={{ margin: "auto" }}>
                            <CardStyle />
                        </Container>
                    </Card>
                </Card>
            </main>
        </>
    );
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch("https://imdb-api.com/en/API/BoxOffice/k_szu1gars")
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}
