import * as React from "react"
import Head from 'next/head';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Card, CssBaseline, Typography } from "@mui/material";
import { Container } from "@mui/system";
//
import Navbar from '@/components/Navbar';
import Searchbar from '@/components/Searchbar';


const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
    return (
        <>
            <CssBaseline />
            <header>
                <Navbar />
                <Searchbar />
            </header>
            <main className={styles.main}>
                <Card sx={{ display: "flex", flexDirection: { xs: "column-reverse", sm: "row" }, justifyContent: "space-between", minWidth: "100%" }}>
                    <Card sx={{ maxWidth: { xs: "100%", sm: "300px" } }}>
                        <Container maxWidth="xl">
                            <Typography variant="h3" color="text-primary" align="center" gutterBottom>
                                Hello, bo
                            </Typography>
                        </Container>
                    </Card>
                    <Card sx={{}}>
                        <Container maxWidth="xl">
                            <Typography variant="h3" color="text-primary" align="center" gutterBottom>
                                Hello, boys
                            </Typography>
                        </Container>
                    </Card>
                </Card>
            </main>
        </>
    )
}

// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch("https://imdb-api.com/en/API/Top250Movies/k_szu1gars")
//     const data = await res.json()

//     // Pass data to the page via props
//     return { props: { data } }
// }

