import { Box } from '@mui/material'
import React from 'react'
import BreakdownChart from './BreakdownChart'
import Header from './Header'

export default function Breakdown() {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subtitle="Breakdown of Sales By Category" />
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  )
}
