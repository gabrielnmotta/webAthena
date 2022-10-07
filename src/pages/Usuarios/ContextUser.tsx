import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { IUsuarios } from "../../interface/IUsuarios";

type UserContextData = {
    users: IUsuarios[];
    setUsers: (users: IUsuarios[]) => void;
    editar: (user: IUsuarios) => void;
    criar: (user: IUsuarios) => void;
    excluir: (user: IUsuarios) => void;

}


export const UserContext = createContext({} as UserContextData);


type IProps = { children: React.ReactNode };
export const useUserProvider = () => {
    const context = useContext(UserContext);
    return context;}
export const UserProvider: React.FC<IProps> = ({ children }) => {
    
    const [users, setUsers] = useState<IUsuarios[]>([]);

    useEffect(() => {
        axios.get<IUsuarios[]>("http://localhost:3000/users")
        .then(resposta => setUsers(resposta.data))
    }, [setUsers]);


    const editar = (usuarioEditar: IUsuarios) => {
        axios.put(`http://localhost:3000/users/${usuarioEditar.id}`, usuarioEditar)
        .then(() => {
            const usuariosAtualizados = users.map(usuario => usuario.id === usuarioEditar.id ? usuarioEditar : usuario);
            setUsers(usuariosAtualizados);
        })
    }
    const criar = (usuarioCriar: IUsuarios) => {
        axios.post("http://localhost:3000/users", usuarioCriar)
        .then(resposta => {
            const usuariosAtualizados = [...users, resposta.data];
            setUsers(usuariosAtualizados);
        })
    }
    
    const excluir = (usuarioExcluir: IUsuarios) => {
        axios.delete(`http://localhost:3000/users/${usuarioExcluir.id}`)
        .then(() => {
            const usuariosAtualizados = users.filter(usuario => usuario.id !== usuarioExcluir.id);
            setUsers(usuariosAtualizados);
        })
    }
    

    
    return(
        <UserContext.Provider value={{criar,editar,excluir,setUsers,users}}>
            {children}
        </UserContext.Provider>
    )
}

