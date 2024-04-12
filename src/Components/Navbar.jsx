import React from 'react'
import {Flex, Text,Box, Spacer,Button} from '@chakra-ui/react'
import { BsBell } from 'react-icons/bs'

const Navbar = () => {
  return (
    <Flex display={{base:'none',md:'flex'}} alignItems='center' bgColor='#3182CE' color='white'  textAlign='center' py={3}>
      <Spacer />
      <Box>Enable browser notifications to avoid missing out on important activity</Box> 
      <Spacer />
      <Button bg='blue.600' color='white' gap={2} _hover={{color:'black'}}>
        <BsBell/>
        Enable Notifications
      </Button>
    </Flex>
  )
}

export default Navbar