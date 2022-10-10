
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const NewUser = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const save = () => {
        axios.post('http://localhost:3000/users', {
            displayName,
            email,
            phone,
        });
        
    }
    
    return (
            <div className="form">
                <form>
                    <div className="input">
                        <label>Nome</label>
                        <input type="text" value={displayName} onChange={event => setDisplayName(event.target.value)} />
                    </div>
                    <div className="input">
                        <label>Email</label>
                        <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
                    </div>
                    <div className="input">
                        <label>Telefone</label>
                        <input type="text" value={phone} onChange={event => setPhone(event.target.value)} />
                    </div>
                    <NavLink to="/user" type="submit" onClick={save}>Salvar</NavLink>
                    <NavLink to="/user">Voltar</NavLink>

                </form>
            </div>
    )
}


