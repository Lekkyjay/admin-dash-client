import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './Navbar'
import { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { selectUserId } from './theme/themeSlice';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useAppSelector(selectUserId)
  const user = { name: 'Lekky Jay', occupation: 'Dev' }

  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} user={user} />
        <Outlet />
      </Box>
    </Box>
  )
}
