import Head from 'next/head'
import { Stack, ThemeProvider, createTheme } from '@mui/material'

import { Dashboard } from '@/components/Dashboard'
import { Chatbar } from '@/components/Chatbar'
import ResponsiveAppBar from '@/components/ResponsiveAppBar'
import { purple } from '@mui/material/colors'

const outerTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Gridus Social</title>
        <meta
          name="description"
          content="Gridus Social is an AI-powered social media analytics platform."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={outerTheme}>
        <ResponsiveAppBar />
        <Stack direction="row" spacing={2}>
          <Stack spacing={2}>
            <Dashboard />
          </Stack>
          <Chatbar />
        </Stack>
      </ThemeProvider>
    </>
  )
}
