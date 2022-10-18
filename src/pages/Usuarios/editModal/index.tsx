import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, Title } from './styles'
import { X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import { IUsuarios } from "../../../interfaces/IUsuarios";
import { useNavigate } from 'react-router-dom';



export const EditModal = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<IUsuarios>();
  const save = () => {
      axios.put(`http://localhost:7010/users/${id}`, {
          displayName,
          email,
          phone,
      }); 
  }
  useEffect(() => {
      axios.get<IUsuarios>(`http://localhost:7010/users/${id}`)
      .then(resposta => setUser(resposta.data))
  }
  , [id, setUser]);
  useEffect(() => {
      if (user) {
          setDisplayName(user.displayName);
          setEmail(user.email);
          setPhone(user.phone);
      }
  }
  , [user, setDisplayName, setEmail, setPhone]);
 
 
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Title>Edit</Title>
        <form>
            <input placeholder="Name" type="text" value={displayName} onChange={event => setDisplayName(event.target.value)} />
            <input placeholder="Email" type="text" value={email} onChange={event => setEmail(event.target.value)} />
            <input placeholder="Phone Number" type="text" value={phone} onChange={event => setPhone(event.target.value)} />
            <button type="submit" onClick={save}>Edit</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}