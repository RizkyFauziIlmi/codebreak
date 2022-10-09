import { CheckCircleIcon, SettingsIcon } from '@chakra-ui/icons'
import { VStack, Text, Heading, useColorMode, ListItem, UnorderedList, Code, Button, useToast, ListIcon, List, Flex, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, Modal, ModalHeader, ModalOverlay, ModalCloseButton, ModalBody, ModalContent, useBoolean, Kbd } from '@chakra-ui/react'
import CodeEditor from '@uiw/react-textarea-code-editor'
import React from 'react'

export const BasicStructure = () => {
    const [code] = React.useState("//Import library disini\nimport java.util.Scanner;\n\npublic class namaFile {\n   //Memberitahu compiler bahwa fungsi main sebagai awal code\n   public static void main(String[] args) {\n       //Kode kamu mulai disini\n  }\n}")
    const {colorMode} = useColorMode();
    const [exerciseCode, setExerciseCode] = React.useState("")
    const alert = useDisclosure();
    const hint = useDisclosure();
    const toast = useToast();
    const cancelRef = React.useRef();
    const [testSatu, setTestSatu] = useBoolean();
    const [testDua, setTestDua] = useBoolean();
    const [testTiga, setTestTiga] = useBoolean();
    const id = "id"; 
    const syaratSatu = exerciseCode.includes("import java.util.Scanner;");
    const syaratDua = exerciseCode.includes("public class ") && exerciseCode.includes("class strukturDasar");
    const syaratTiga = exerciseCode.includes("public static void main(String[] args) {}");

    const testCode = () => {
        if (syaratSatu) {
            setTestSatu.on()    
        } else {
            setTestSatu.off()
        }
        if (syaratDua) {
            setTestDua.on()
        } else {
            setTestDua.off()
        }
        if (syaratTiga) {
            setTestTiga.on()
        } else {
            setTestTiga.off()
        }
        if (syaratSatu && syaratDua && syaratTiga) {
            if (!toast.isActive(id)) {
                toast({
                    id,
                    title: "Benar!",
                    description: "Kerja Bagus, kamu hebat!",
                    status: "success",
                    isClosable: true
                })
            }
        }
    }

  return (
    <VStack>
        <Heading className='Heading'>Struktur Dasar Java</Heading>
        <Text>Dalam setiap bahasa pemrograman ada struktur dasar yang memberitahukan compiler bagian-bagian dalam sebuah code misalnya :</Text>
        <div data-color-mode={colorMode === "dark" ? "dark" : "light"}>
            <CodeEditor
            value={code}
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
        <Heading className='Heading' size={'sm'}>Latihan Kode : </Heading>
            <div data-color-mode={colorMode === "dark" ? "dark" : "light"}>
                <CodeEditor
                value={exerciseCode}
                language="java"
                placeholder="Tulis ulang Kode Java disini!"
                onChange={(event) => setExerciseCode(event.target.value)}
                padding={15}
                style={{
                    fontFamily:
                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                    fontSize: 12
                }}
                />
            </div>
            <Text fontSize={'xs'} opacity={0.5}>* Tulis ulang kode tanpa comment '//'</Text>
            <List fontWeight={'bold'}>
                <ListItem> 
                    <ListIcon as={testSatu ? CheckCircleIcon : SettingsIcon} color={testSatu ? 'green.500' : 'inherit'} />
                    <Code children="import" /> Scanner di awal code dan diakhiri <Code children=";" />
                </ListItem>
                <ListItem> 
                    <ListIcon as={testDua ? CheckCircleIcon : SettingsIcon} color={testDua ? 'green.500' : 'inherit'} />
                    Menulis <Code children="public class"/> diikuti namaFile yaitu (strukturDasar) diakhiri <Code children="{}" />
                </ListItem>
                <ListItem>
                    <ListIcon as={testTiga ? CheckCircleIcon : SettingsIcon} color={testTiga ? 'green.500' : 'inherit'}/>
                    Menulis fungsi main sebagai tanda code dimulai <Code children="public static void main(String[] args) {}" /> di dalam public class
                </ListItem>
            </List>
            <Flex gap={2}>
                <Button onClick={alert.onOpen}>
                    Hint
                </Button>
                <AlertDialog
                    motionPreset='slideInBottom'
                    leastDestructiveRef={cancelRef}
                    onClose={alert.onClose}
                    isOpen={alert.isOpen}
                    isCentered
                >
                    <AlertDialogOverlay />
                    <AlertDialogContent>
                        <AlertDialogHeader>Apakah Kamu Yakin Liat Hint?</AlertDialogHeader>
                        <AlertDialogCloseButton />
                        <AlertDialogBody>
                            Apakah kamu yakin melihat hint atau ingin mencoba lagi
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={alert.onClose}>
                                Tidak
                            </Button>
                            <Button colorScheme={'red'} ml={3} onClick={() => {
                                hint.onOpen()
                                alert.onClose()
                            }}>
                                Yakin
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                <Button onClick={testCode}>
                    Test
                </Button>
            </Flex>
        <Heading size={'sm'} className='Heading'>Kesimpulan : </Heading>
        <UnorderedList textAlign={'left'}>
            <ListItem>
                <Text>Bagian paling atas code sebagai tempat <Code children="import"/> berbagai library yang berguna</Text>
            </ListItem>
            <ListItem>
                <Text>Awal code di mulai dengan <Code children="public class"/> dan diikuti 'Nama File Tanpa <Kbd>space</Kbd>'</Text>
            </ListItem>
            <ListItem>
                <Text>Berikutnya mendeklarasikan fungsi main <Code children="public static void main(String[] args) {}"/> di dalam <Code children="public class"/></Text>
            </ListItem>
            <ListItem>
                <Text>Dan kode kamu ada di dalam fungsi main</Text>
            </ListItem>
        </UnorderedList>
        <Modal isOpen={hint.isOpen} onClose={hint.onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hint</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div data-color-mode={colorMode === "dark" ? "dark" : "light"}>
                    <CodeEditor
                    value={("import java.util.Scanner;\n public class strukturDasar {\n  public static void main(String[] args) {\n\n    }\n}")}
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  )
}
