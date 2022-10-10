import { Button, Flex, Heading, Image, Link, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import jumbotron from '../images/jumbotron.jpg'
import instagram from '../images/instagram.png'
import github from '../images/github.png'
import whatsapp from '../images/whatsapp.png'
import gmail from '../images/gmail.png'

export const Index = () => {
    const { colorMode } = useColorMode();

  return (
    <>
        <Heading className='Heading'>Website Apa Ini ?</Heading>
        <Image src={jumbotron} objectFit={"cover"} width={"100%"} mt={5} opacity={colorMode === "dark" ? 0.6 : 1} padding={0}/>
        <Heading size={'sm'} className="Heading">Isi</Heading>
        <Text>Isi dari website ini adalah materi-materi bahasa pemrograman yang dibahas dengan rinci dan jelas.</Text>
        <Heading size={'sm'} className="Heading">Tujuan</Heading>
        <Text>Website ini bertujuan untuk menjadi pedoman ataupun referensi untuk teman-teman saya dan bahkan orang lain dalam mempelajari bahasa pemrograman.</Text>
        <Heading size={'sm'} className="Heading">Kontak Saya</Heading>
        <Flex p={5} gap={3} overflowX={'auto'} justifyContent={'center'}>
            <Flex className='scale' flexDir={'column'} justifyContent={'center'} alignItems={'center'} gap={1} boxShadow={'dark-lg'} borderRadius={'5px'} p={5}>
                <Image src={instagram} width={'50px'}/>
                <Link href='https://www.instagram.com/fauzirizkyw/' target={'_blank'}>
                    <Button colorScheme={'facebook'}>
                        Instagram
                    </Button>
                </Link>
            </Flex>
            <Flex className='scale' flexDir={'column'} justifyContent={'center'} alignItems={'center'} gap={1} boxShadow={'dark-lg'} borderRadius={'5px'} p={5}>
                <Image src={github} width={'50px'}/>
                <Link href='https://github.com/RizkyFauziIlmi' target={'_blank'}>
                    <Button colorScheme={'gray'}>
                        Github
                    </Button>
                </Link>
            </Flex>
            <Flex className='scale' flexDir={'column'} justifyContent={'center'} alignItems={'center'} gap={1} boxShadow={'dark-lg'} borderRadius={'5px'} p={5}>
                <Image src={whatsapp} width={'50px'}/>
                <Link href='https://wa.me/6289627030604' target={'_blank'}>
                    <Button colorScheme={'whatsapp'}>
                        Whatsapp
                    </Button>
                </Link>
            </Flex>
            <Flex className='scale' flexDir={'column'} justifyContent={'center'} alignItems={'center'} gap={1} boxShadow={'dark-lg'} borderRadius={'5px'} p={5}>
                <Image src={gmail} width={'50px'}/>
                <Link href='mailto:rizkyfauziilmi@gmail.com' target={'_blank'}>
                    <Button colorScheme={'red'}>
                        Gmail
                    </Button>
                </Link>
            </Flex>
        </Flex>
    </>
  )
}
