import React, { useState,useRef } from 'react'
import LogoSvg from '../assets/logo1.svg'
import ArchiveSvg from '../assets/archive.svg'
import Lock from '../assets/lock.svg'
import {Flex,Box,Text,Img,InputGroup,InputRightAddon,Input,Button,Drawer,DrawerBody,DrawerContent,DrawerOverlay,DrawerFooter,DrawerCloseButton,DrawerHeader,InputLeftElement,useDisclosure} from '@chakra-ui/react'
import {FaBell,FaSearch,FaRegClock, FaRegCommentAlt,FaCaretDown,FaCaretRight,FaBuilding, FaShoppingCart,FaUserPlus,FaBars} from 'react-icons/fa'
import {MdLock, MdPeopleOutline,MdOutlineArchive} from 'react-icons/md'



const Sidebar = () => {
  const [caret,setCaret] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <>
    <Box py={5} px={2} bg='gray.50' w='auto' display={{base:'none',md:'block'}}>
      <Flex direction='column' justifyContent='space-between' gap={4} >

      <Flex justifyContent='space-between' alignItems='center 'p={2}>
        <Flex justifyContent='center' alignItems='center' gap={2}>
          <Img src='https://assets.slite.com/illustrations/team-avatar-placeholder.jpeg' blockSize={6} rounded='full'/>
          <Text fontWeight='semibold'>refero team</Text>
        </Flex>
        <FaBell />
      </Flex>

      <InputGroup gap={2} rounded='14px' >
      <InputLeftElement pointerEvents='none' rounded='14px'>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3yfDoR4Hp94rYW_1MEvxxlhTEqHo8kS2wjv4BdBMxg&s' boxSize={4}/>
    </InputLeftElement>
      <Input bg='white' fontSize='smaller' placeholder='Ask your AI assistant' rounded='14px'/>
      <InputRightAddon bg='white'><FaSearch size={12} rounded='14px'/></InputRightAddon>
      </InputGroup>

      <Box bg='gray.200' p={3} rounded='10px'>
        <Text fontWeight='bold' fontSize='small'>Your team used 8/50 free docs</Text>
        <Text fontSize='small' color='#6A707C'>Upgrade to create unlimited docs</Text>
      </Box>

      <Flex alignItems='center' gap={2} px={3}>
        <FaRegClock size={14}/>
        <Text fontWeight='semibold' fontSize='14px'>Catch Up</Text>
      </Flex>
      
      <Flex alignItems='center' gap={2} px={3}>
        <FaRegCommentAlt size={14}/>
        <Text fontWeight='semibold' fontSize='small'>Discussions</Text>
      </Flex>

      <Flex direction='column' p={3} gap={3}>
        <Text fontWeight='semibold'>Favorites</Text>
        <Text fontWeight='semibold' fontSize='14px'>👋 Getting Started</Text> 
      </Flex>

      <Flex direction='column' p={3} gap={3}>
        <Text fontWeight='semibold'>My channels</Text>
        <Flex onClick={()=>setCaret(!caret)} gap={2} alignItems='center'> {caret ? <FaCaretDown color='#6A707C'/> : <FaCaretRight color='#6A707C'/>}
        <Img src={Lock} />
        <Text fontWeight='semibold' fontSize='14px'>My Private Channels</Text> 
        </Flex>
        {caret &&<Text fontWeight='semibold' fontSize='14px' px={6}>👋 Getting Started</Text> }

        <Flex gap={2} alignItems='center'><FaCaretRight color='#6A707C'/>
        <Img src={LogoSvg}/>
        <Text fontWeight='semibold' fontSize='14px'>Engineering</Text> 
        </Flex>

        <Flex gap={2} alignItems='center'><FaCaretRight color='#6A707C'/>
        <Img src={LogoSvg} />
        <Text fontWeight='semibold' fontSize='14px'>Products</Text> 
        </Flex>
       
      

      </Flex>
      <Flex direction='column' py={3} px={2.5} gap={4}>
        <Flex alignItems='center' gap={2} px={0.5}><FaUserPlus size={16}/>
        <Text fontWeight='semibold' color='darkslategray' fontSize='14px'>Add People</Text> 
        </Flex>
        <Flex alignItems='center' gap={2} >
          <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtYhdrqNLhjMjmVN-0jsibTNTYK1fqm92wJ7EMg01sg&s' boxSize={4}/>
          <Text fontWeight='semibold' fontSize='14px' color='darkslategray' px={0.5}>Templates</Text>
          </Flex>
        <Flex alignItems='center' gap={2} px={0.5}><MdPeopleOutline size={18}/>
        <Text fontWeight='semibold' color='darkslategray' fontSize='14px' >Shared with me</Text>
        </Flex>

        <Flex alignItems='center' gap={2} px={0.5}><Img src={ArchiveSvg} boxSize={4}/>
        <Text fontWeight='semibold' color='darkslategray' fontSize='14px' px={0.5}>Archived</Text>
        </Flex>
        
      </Flex>

     </Flex>
    </Box>
    <Box display={{base:'flex',md:'none'}} flexDirection='column' justifyContent='start' py={6} px={1}>
    <FaBars ref={btnRef} onClick={onOpen} opacity={0.7}/>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent >

          <DrawerBody onClick={onClose}>
          <Box py={5} px={2} bg='gray.50' w='auto'>
      <Flex direction='column' justifyContent='space-between' gap={4} >

      <Flex justifyContent='space-between' alignItems='center 'p={2}>
        <Flex justifyContent='center' alignItems='center' gap={2}>
          <Img src='https://assets.slite.com/illustrations/team-avatar-placeholder.jpeg' blockSize={6} rounded='full'/>
          <Text fontWeight='semibold'>refero team</Text>
        </Flex>
        <FaBell />
      </Flex>

      <InputGroup gap={2} rounded='14px' >
      <InputLeftElement pointerEvents='none' rounded='14px'>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV3yfDoR4Hp94rYW_1MEvxxlhTEqHo8kS2wjv4BdBMxg&s' boxSize={4}/>
    </InputLeftElement>
      <Input bg='white' fontSize='smaller' placeholder='Ask your AI assistant' rounded='14px'/>
      <InputRightAddon bg='white'><FaSearch size={12} rounded='14px'/></InputRightAddon>
      </InputGroup>

      <Box bg='gray.200' p={3} rounded='10px'>
        <Text fontWeight='bold' fontSize='small'>Your team used 8/50 free docs</Text>
        <Text fontSize='small' color='#6A707C'>Upgrade to create unlimited docs</Text>
      </Box>

      <Flex alignItems='center' gap={2} px={3}>
        <FaRegClock size={14}/>
        <Text fontWeight='semibold' fontSize='14px'>Catch Up</Text>
      </Flex>
      
      <Flex alignItems='center' gap={2} px={3}>
        <FaRegCommentAlt size={14}/>
        <Text fontWeight='semibold' fontSize='small'>Discussions</Text>
      </Flex>

      <Flex direction='column' p={3} gap={3}>
        <Text fontWeight='semibold'>Favorites</Text>
        <Text fontWeight='semibold' fontSize='14px'>👋 Getting Started</Text> 
      </Flex>

      <Flex direction='column' p={3} gap={3}>
        <Text fontWeight='semibold'>My channels</Text>
        <Flex onClick={()=>setCaret(!caret)} gap={2} alignItems='center'> {caret ? <FaCaretDown color='#6A707C'/> : <FaCaretRight color='#6A707C'/>}
        <Img src={Lock} />
        <Text fontWeight='semibold' fontSize='14px'>My Private Channels</Text> 
        </Flex>
        {caret &&<Text fontWeight='semibold' fontSize='14px' px={6}>👋 Getting Started</Text> }

        <Flex gap={2} alignItems='center'><FaCaretRight color='#6A707C'/>
        <Img src={LogoSvg}/>
        <Text fontWeight='semibold' fontSize='14px'>Engineering</Text> 
        </Flex>

        <Flex gap={2} alignItems='center'><FaCaretRight color='#6A707C'/>
        <Img src={LogoSvg} />
        <Text fontWeight='semibold' fontSize='14px'>Products</Text> 
        </Flex>
       
      

      </Flex>
      <Flex direction='column' py={3} px={2.5} gap={4}>
        <Flex alignItems='center' gap={2} px={0.5}><FaUserPlus size={16}/>
        <Text fontWeight='semibold' color='darkslategray' fontSize='14px'>Add People</Text> 
        </Flex>
        <Flex alignItems='center' gap={2} >
          <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtYhdrqNLhjMjmVN-0jsibTNTYK1fqm92wJ7EMg01sg&s' boxSize={4}/>
          <Text fontWeight='semibold' fontSize='14px' color='darkslategray' px={0.5}>Templates</Text>
          </Flex>
        <Flex alignItems='center' gap={2} px={0.5}><MdPeopleOutline size={18}/>
        <Text fontWeight='semibold' color='darkslategray' fontSize='14px' >Shared with me</Text>
        </Flex>

        <Flex alignItems='center' gap={2} px={0.5}><Img src={ArchiveSvg} boxSize={4}/>
        <Text fontWeight='semibold' color='darkslategray' fontSize='14px' px={0.5}>Archived</Text>
        </Flex>
        
      </Flex>

     </Flex>
    </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>

    </>)
}

export default Sidebar