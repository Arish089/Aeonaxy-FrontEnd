
import {Heading,Box,Text,Button,Flex} from '@chakra-ui/react'
import './App.css'
import Sidebar from './Components/Sidebar'
import MainBody from './Components/MainBody'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <Flex>
      <Sidebar />
      <MainBody />
    </Flex>
    </>)
}

export default App
