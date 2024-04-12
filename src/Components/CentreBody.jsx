import React from 'react'
import {Box,Img,Flex,Text,Spacer,Center,Heading} from '@chakra-ui/react'
import logoSvg from '../assets/logo1.svg'
import { FaChevronLeft,FaChevronRight,FaRegComment,FaStar,FaEllipsisV } from 'react-icons/fa'
import Lock from '../assets/lock.svg'

const CentreBody = () => {
  return (
    <>
    <Box p={5} display='flex' w='98%' position={{base:'fixed',md:'static'}} bg='white' zIndex={{base:1,md:0}} top={0} >
    <Flex  gap={6} alignItems='center'>
        <Img src={logoSvg} /> 
        < FaChevronLeft color='lightgrey'/><FaChevronRight color='lightgrey'/>
        <Box gap={2} display={{base:'none',md:'flex'}}>
        <Img src={Lock}/>
        <Text fontSize='medium' fontWeight='semibold' color='#6A707C'>My Private Channel</Text>
        <Text fontWeight='semibold' color='#6A707C'>/</Text>
        <Text fontWeight='semibold' color='#6A707C'>👋 Getting Started</Text>
        </Box>
        </Flex>
        <Spacer />
        <Flex alignItems='center' gap={4}>
        <Text fontSize='medium' fontWeight='semibold' color='#6A707C'>share</Text>
        <FaRegComment color='#6A707C'/>
        <FaStar color='orange' />
        <FaEllipsisV color='#6A707C'/>
        </Flex>
        </Box>
    <Center py={2} mt={{base:16,md:0}}>
        <Box display='flex' flexDirection='column' gap={16} m='auto' w={{base:'98%',md:'50%'}}>
            <Flex direction='column' gap={5}>
        <Heading color='#3F4F4A'>Getting Started</Heading>
        <Flex bg='#F6F7F9' p={4} gap={2}>
            <Img src='https://assets.slite.com/emojis/14.0.0/google/64/1f512.png' boxSize={6}/>
            <Text>
        This doc is in your <b> private channel</b>, where you can store your private work. You can share docs one by one from here, but to properly organize your team's knowledge base, use <b>workspace channels</b>.
       <br /><br /> You can make channels <b>public</b> to make all docs visible to everyone on the team, or<b> private channel</b> if you want the channel's docs to only be visible by a selection of teammates.</Text>
        </Flex>
        </Flex>
        <Flex direction='column' gap={5}>
        <Heading fontSize='28px'  color='#3F4F4A'>Collaborate with your team with these three features</Heading>
        <Text fontSize='21px' fontWeight='bold'>✍️ Docs</Text>
        <Img  src='https://i.postimg.cc/kXYdHL1b/new.png'/>
        <Flex bg='#F6F7F9' p={3} gap={3}>
            <Text>💡</Text>
            <Text color='#6A707C'>Give it a go by typing / below</Text>
        </Flex>
        </Flex>
        </Box>
        
    </Center>
    </> )
}

export default CentreBody