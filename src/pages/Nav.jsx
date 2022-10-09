import { Button, Collapse, Flex, Heading, IconButton, Image, Text, useBoolean, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import java from '../images/java.png'
import javascript from '../images/javascript.png'
import python from '../images/python.png'

export const Nav = () => {
    const [javaHover, setJavaHover] = useBoolean(false);
    const [javascriptHover, setJavascriptHover] = useBoolean(false);
    const [pythonHover, setPythonHover] = useBoolean(false);
    const {colorMode, toggleColorMode} = useColorMode();

    const buttonsRestApi = [
        {
            programmingLangguage: 'Java',
            img: java,
            colorScheme: 'orange',
            hook: javaHover,
            setHook: setJavaHover,
            width: '40px'
        },
        {
            programmingLangguage: 'JavaScript',
            img: javascript,
            colorScheme: 'whatsapp',
            hook: javascriptHover,
            setHook: setJavascriptHover,
            width: '25px'
        },
        {
            programmingLangguage: 'Phyton',
            img: python,
            colorScheme: 'yellow',
            hook: pythonHover,
            setHook: setPythonHover,
            width: '25px'
        }
    ]
  return (
    <Flex width={'100%'} alignItems={'center'} justifyContent={'space-around'} p={2} boxShadow={'lg'}>
        <Heading onClick={() => document.location.reload()} cursor={'pointer'}>CodeBreak</Heading>
            <Flex>
                {buttonsRestApi.map((button) => {
                    return(
                        <Button key={button.programmingLangguage} variant={'ghost'} colorScheme={button.colorScheme} onMouseEnter={() => {button.setHook.on()}} onMouseLeave={() => {button.setHook.off()}}>
                            <Image src={button.img} width={button.width} />
                            <Collapse in={button.hook} animateOpacity>
                                {button.hook ? <Text transition={'all 1s'}>{button.programmingLangguage}</Text> : ''}
                            </Collapse>
                        </Button>
                    )
                })}
            </Flex>
        <IconButton variant={'ghost'} aria-label='theme button' icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode} />
    </Flex>
    
  )
}
