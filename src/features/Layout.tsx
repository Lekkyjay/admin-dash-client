import { Outlet } from 'react-router-dom'
import { Box, useMediaQuery } from '@mui/material'
import Navbar from './Navbar'
import { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { selectUserId } from './theme/themeSlice';
import Sidebar from './Sidebar';
import { useGetUserQuery } from './theme/api';

export default function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useAppSelector(selectUserId)
  const { data } = useGetUserQuery(userId)
  // console.log({data})
  // const user = { name: 'Lekky Jay', occupation: 'Dev' }

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}     //while loading empty object will be provided
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} user={data || {}} />
        <Outlet />
      </Box>
    </Box>
  )
}
