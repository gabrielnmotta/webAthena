import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IUsuarios } from '../../interface/IUsuarios';
import "./style.scss";

export const Usuarios = () => {


    const [users, setUsers] = useState<IUsuarios[]>([]);
    const excluir = (usuarioExcluir: IUsuarios) => {
        axios.delete(`http://localhost:3000/users/${usuarioExcluir.id}`)
        .then(() => {
            const usuariosAtualizados = users.filter(usuario => usuario.id !== usuarioExcluir.id);
            setUsers(usuariosAtualizados);
        })
    }
    useEffect(() => {
        axios.get<IUsuarios[]>("http://localhost:3000/users")
        .then(resposta => setUsers(resposta.data))
    }, [setUsers]);

    return (
            <div >
                <div >
                    <h1>Usuários</h1>
                </div>
                <div className="container">
                    <div className="table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Telefone</th>
                                    <th>Editar</th>
                                    <th>Excluir</th>
                                    <th><NavLink to={"/user/newUser/"}>Criar Usuario</NavLink></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(usuario => (
                                    <tr key={usuario.id}>
                                        <td>{usuario.displayName}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.phone}</td>
                                        <td><NavLink to={`/user/${usuario.id}`}>Editar</NavLink></td>
                                        <td><button className='botao' onClick={() => excluir(usuario)}>Excluir</button></td> 
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}
