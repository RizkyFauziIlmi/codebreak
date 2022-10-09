import {
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  OrderedList,
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

export const Main = () => {
  const [material, setMaterial] = React.useState("");

  const datasMain = [
    {
      langguage: "Java",
      bg: "red",
      color: "white",
      buttons: [
        {
          heading: "Basic Structure",
          hook: "basicstructurejava",
          conditioning: material === "basicstructurejava",
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
          heading: "Variable",
          hook: "variablejava",
          conditioning: material === "variablejava",
          icon: FaJava,
          preicon: FaTerminal,
          jsx: <VariableJava />,
        },
        {
          heading: "Swap Two Varible",
          hook: "swaptwovariablejava",
          conditioning: material === "swaptwovariablerjava",
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
    if (material === "basicstructurejava") {
      return <BasicStructure />
    } else if (material === "helloworldjava") {
      return <HelloWorldJava />;
    } else if (material === "variablejava") {
      return <VariableJava />;
    } else if (material === "swaptwovariablejava") {
      return <SwapTwoVariable />;
    } else if (material === "helloworldpython") {
      return <p>ok</p>;
    } else if (material === "variablepython") {
      return <p>ok2</p>;
    }
  };

  return (
    <Flex width={"100vw"}>
      <Box width={'max-content'}>
        <Accordion allowToggle defaultIndex={0} width={'max-content'}>
          {datasMain.map((data) => {
            return (
              <AccordionItem>
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
                        <ListItem>
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
      <Box width={"100%"}>
        {showMaterial()}
      </Box>
    </Flex>
  );
};
