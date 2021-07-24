import React from 'react';
import {Button, Modal} from "react-bootstrap"
import FormExampleFieldError from './UserFormSem'


function BasicUsage() {
  const [open, setOpen] = React.useState(false)
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Sign up</Modal.Header>
      <Modal.Content>
        <FormExampleFieldError />
      </Modal.Content>

    </Modal>
  )
}

export default BasicUsage;
