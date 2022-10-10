import { Code, Heading, ListItem, Text, UnorderedList, useColorMode, VStack, Flex, Kbd } from '@chakra-ui/react'
import React from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor'

const HelloWorldJava = () => {
  const { colorMode } = useColorMode();
    
  return (
    <VStack>
      <Heading className='Heading'>Hello World!</Heading>
      <Text>Dalam pemrograman kita bisa melakukan print sebuah nilai atau variabel ke dalam sebuah terminal perhatikan program java berikut ini : </Text>
      <div data-color-mode={colorMode === "dark" ? "dark" : "light"}>
          <CodeEditor
          value={(`public class helloWorld {\n  public static void main(String[] args) {\n    //kode ini akan print kalimat 'hello world' ke terminal\n    System.out.print("Hello World");\n }\n}`)}
          language="java"
          placeholder="Please enter JS code."
          padding={15}
          style={{
              fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              fontSize: 12
          }}
          disabled
          />
      </div>
      <UnorderedList textAlign={'left'}>
        <ListItem>
          <Text>Nama file dari program tersebut adalah helloWorld</Text>
        </ListItem>
        <ListItem>
          <Text>diikuti dengan fungsi main <Code children="public static void main(String[] args) {}" /></Text>
        </ListItem>
        <ListItem>
          <Text><Code children='System.out.print("Hello World");' /> akan menghasilkan output sebagai berikut : </Text>
        </ListItem>
      </UnorderedList>
      <div data-color-mode={colorMode === "dark" ? "dark" : "light"}>
          <CodeEditor
          value={(`OUPUT : \nHello World`)}
          language="java"
          placeholder="Please enter JS code."
          padding={15}
          style={{
              fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              fontSize: 12
          }}
          disabled
          />
      </div>
      <Heading size={'sm'} className="Heading">Jenis-jenis Print : </Heading>
      <Text>Print dibagi menjadi dua secara umum yaitu</Text>
      <Flex gap={2}>
        <VStack>
        <Text fontWeight={'bold'}>print</Text>
          <div data-color-mode={colorMode === "dark" ? "dark" : "light"}>
            <CodeEditor
            value={(`System.out.print("Hello World");\nSystem.out.print("Hello World");`)}
            language="java"
            placeholder="Please enter JS code."
            padding={15}
            style={{
                fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                fontSize: 12
            }}
            disabled
            />
          </div>
          <div data-color-mode={colorMode === "dark" ? "dark" : "light"}>
            <CodeEditor
            value={(`OUTPUT : \nHello WorldHello World`)}
            language="java"
            placeholder="Please enter JS code."
            padding={15}
            style={{
                fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                fontSize: 12
            }}
            disabled
            />
          </div>
        </VStack>
        <VStack>
          <Text fontWeight={'bold'}>println</Text>
          <div data-color-mode={colorMode === "dark" ? "dark" : "light"}>
            <CodeEditor
            value={(`System.out.println("Hello World");\nSystem.out.println("Hello World");`)}
            language="java"
            placeholder="Please enter JS code."
            padding={15}
            style={{
                fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                fontSize: 12
            }}
            disabled
            />
          </div>
          <div data-color-mode={colorMode === "dark" ? "dark" : "light"}>
            <CodeEditor
            value={(`OUTPUT : \nHello World\nHello World\n`)}
            language="java"
            placeholder="Please enter JS code."
            padding={15}
            style={{
                fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                fontSize: 12
            }}
            disabled
            />
          </div>
        </VStack>
      </Flex>
      <Text>Dari kedua jenis print tersebut bisa disimpulkan bahwa <Code children="print"/> akan menampilkan hasil tanpa <Kbd>enter</Kbd> sebaliknya <Code children="println"/> akan menampilkan hasil dengan <Kbd>enter</Kbd></Text>
    </VStack>
  )
}

export default HelloWorldJava