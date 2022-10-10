import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  List,
  ListIcon,
  ListItem,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { FaJava, FaPython, FaTerminal } from "react-icons/fa";
import HelloWorldJava from "../components/Java/HelloWorldJava";
import VariableJava from "../components/Java/VariableJava";
import SwapTwoVariable from "../components/Java/SwapTwoVariable";
import { BasicStructure } from "../components/Java/BasicStructure";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from 'framer-motion'
import { Index } from "../components/Index";

export const Main = () => {
  const [material, setMaterial] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const displayAccordion = useBreakpointValue(
    {
      base: 'none',
      md: 'inherit'
    },
    {
      fallback: 'md'
    }
  )

  const displayMenu = useBreakpointValue(
    {
      base: 'inherit',
      md: 'none'
    },
    {
      fallback: 'md'
    }
  )

  const datasMain = [
    {
      langguage: "Java",
      bg: "red",
      color: "white",
      buttons: [
        {
          heading: "Struktur Dasar",
          hook: "strukturdasarjava",
          conditioning: material === "strukturdasarjava",
          icon: FaJava,
          preicon: FaTerminal, 
          jsx: <BasicStructure />,
        },
        {
          heading: "Hello World",
          hook: "helloworldjava",
          conditioning: material === "helloworldjava",
          icon: FaJava,
          preicon: FaTerminal,
          jsx: <HelloWorldJava />,
        },
        {
          heading: "Variabel",
          hook: "variabeljava",
          conditioning: material === "variabeljava",
          icon: FaJava,
          preicon: FaTerminal,
          jsx: <VariableJava />,
        },
        {
          heading: "Menukar Dua Variabel",
          hook: "menukarduavariabeljava",
          conditioning: material === "menukarduavariabeljava",
          icon: FaJava,
          preicon: FaTerminal,
          jsx: <SwapTwoVariable />,
        },
      ],
    },
    {
      langguage: "Phython",
      bg: "yellow",
      color: "white",
      buttons: [
        {
          heading: "Hello World",
          hook: "helloworldpython",
          conditioning: material === "helloworldpython",
          icon: FaPython,
          preicon: FaTerminal,
          jsx: <HelloWorldJava />,
        },
        {
          heading: "Variable",
          hook: "variablepython",
          conditioning: material === "variablepython",
          icon: FaPython,
          preicon: FaTerminal,
        },
      ],
    },
  ];

  const showMaterial = () => {
    if (material === "strukturdasarjava") {
      return <BasicStructure />
    } else if (material === "helloworldjava") {
      return <HelloWorldJava />;
    } else if (material === "variabeljava") {
      return <VariableJava />;
    } else if (material === "menukarduavariabeljava") {
      return <SwapTwoVariable />;
    } else if (material === "helloworldpython") {
      return <p>ok</p>;
    } else if (material === "variablepython") {
      return <p>ok2</p>;
    } else {
      return <Index />
    }
  };

  return (
    <Flex width={"100vw"} overflow={'hidden'}>
      <Box width={'max-content'} display={displayAccordion}>
        <Accordion defaultIndex={0} width={'max-content'}>
          {datasMain.map((data) => {
            return (
              <AccordionItem key={data.langguage}>
                <h2>
                  <AccordionButton
                    _expanded={{ bg: data.bg, color: data.color }}
                  >
                    <Box flex="1" textAlign="left">
                      <Text fontWeight={"bold"}>{data.langguage}</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <List spacing={3}>
                    {data.buttons.map((button) => {
                      return (
                        <ListItem key={button.heading}>
                          <ListIcon
                            as={
                              button.conditioning ? button.icon : button.preicon
                            }
                          />
                          <Button
                            variant={"outline"}
                            onClick={() => {
                              setMaterial(button.hook);
                            }}
                          >
                            {button.heading}
                          </Button>
                        </ListItem>
                      );
                    })}
                  </List>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
      <motion.div
        drag
        dragConstraints={{ top: -5, left: -5, right: 50, bottom: 50 }}
        style={{ zIndex: 9999, position: 'absolute' }}
      >
        <IconButton ref={btnRef} onClick={onOpen} variant={'solid'} display={displayMenu} ml={2} mt={2} icon={<HamburgerIcon />} />
      </motion.div>
      <Drawer
        isOpen={isOpen}
        placement={'right'}
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'xs'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
          <Accordion defaultIndex={0} width={'100%'}>
          {datasMain.map((data) => {
            return (
              <AccordionItem key={data.langguage}>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: data.bg, color: data.color }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontWeight={"bold"}>{data.langguage}</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <List spacing={3}>
                      {data.buttons.map((button) => {
                        return (
                          <ListItem key={button.heading}>
                            <ListIcon
                              as={
                                button.conditioning ? button.icon : button.preicon
                              }
                            />
                            <Button
                              variant={"outline"}
                              onClick={() => {
                                setMaterial(button.hook);
                              }}
                            >
                              {button.heading}
                            </Button>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box width={"100%"} textAlign={'center'} p={material === "" ? 0 : 10}>
        {showMaterial()}
      </Box>
    </Flex>
  );
};
