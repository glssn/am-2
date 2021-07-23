
import React from 'react';
import {useDisclosure,
  Button,
Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalFooter,
ModalCloseButton,} from "@chakra-ui/react"
import {SignupForm} from "./UserForm"


function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Register new email</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <SignupForm />

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BasicUsage;
