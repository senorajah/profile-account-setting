import React from 'react'
import { Drawer,Typography,Box,Button } from '@mui/material'
import { useState } from 'react'

const Profile = () => {
    const [IsDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
    <Button 
    size='medium'
    edge='start'
    color='inherit'
    onClick={()=> setIsDrawerOpen(true)}
    
    >
        Profile</Button>
    <Drawer 
    anchor='left'
    open={IsDrawerOpen}
    onClose={()=> setIsDrawerOpen(false)} 
    >
        <Box p={2} width='500px' textAlign='center' role='presentation'>
            <Typography variant='h6' component='div'>profile</Typography>
        </Box>
    </Drawer>
    </>
    
  )
}

export default Profile