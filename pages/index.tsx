import Head from 'next/head'
import { Stack } from '@mui/material'
import { Card } from '@tremor/react'

import { Dashboard } from '@/components/Dashboard'
import { Chatbar } from '@/components/Chatbar'
import { MiniDrawer } from '@/components/MiniDrawer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js OpenAI Template</title>
        <meta
          name="description"
          content="Next.js Template for building OpenAI applications with Supabase."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack direction="row" spacing={2}>
        <MiniDrawer />
        <Stack spacing={2}>
          <Card />
          <Dashboard />
        </Stack>
        <Chatbar />
      </Stack>
    </>
  )
}
