import { useUserProvider } from './ContextUser';
import "./style.scss";

export const Usuarios = () => {
    
    const {editar, criar,excluir,users} = useUserProvider();
    
    return (
        <div>
            <div>
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
                                <th>Novo usuário</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(usuario => (
                                <tr key={usuario.id}>
                                    <td>{usuario.displayName}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.phone}</td>
                                    <td><button className='botao' onClick={() => editar(usuario)}>Editar</button></td>
                                    <td><button className='botao' onClick={() => excluir(usuario)}>Excluir</button></td>
                                    <td><button className='botao' onClick={() => criar(usuario)}>Criar Usuario</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
