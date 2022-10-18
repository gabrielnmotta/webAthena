import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, Title } from './styles'
import { X } from 'phosphor-react'
import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'



export const NewUserModal = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const save = () => {
        axios.post('http://localhost:7010/users', {
            displayName,
            email,
            phone,
        });

  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Title>Create</Title>

        <form>
            <input placeholder="Name" type="text" value={displayName} onChange={event => setDisplayName(event.target.value)} />
            <input placeholder="Email" type="text" value={email} onChange={event => setEmail(event.target.value)} />
            <input placeholder="Phone Number" type="text" value={phone} onChange={event => setPhone(event.target.value)} />
            <button type="submit" onClick={save}>Create</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}