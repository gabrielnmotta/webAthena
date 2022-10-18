import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IUsuarios } from "../../interfaces/IUsuarios";
import "./style.scss";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import * as Dialog from '@radix-ui/react-dialog'
import { NewUserModal } from './newModal/index';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Usuarios = () => {
  const [users, setUsers] = useState<IUsuarios[]>([]);
  const excluir = (usuarioExcluir: IUsuarios) => {
    axios
      .delete(`http://localhost:7010/users/${usuarioExcluir.id}`)
      .then(() => {
        const usuariosAtualizados = users.filter(
          (usuario) => usuario.id !== usuarioExcluir.id
        );
        setUsers(usuariosAtualizados);
      });
  };
  useEffect(() => {
    axios
      .get<IUsuarios[]>("http://localhost:7010/users")
      .then((resposta) => setUsers(resposta.data));
  }, [setUsers]);

  return (
    <div className="cont">

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">ID</StyledTableCell>  
              <StyledTableCell align="center">Nome</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Telefone</StyledTableCell>
              <StyledTableCell align="center">Editar</StyledTableCell>
              <StyledTableCell align="center">Excluir</StyledTableCell>
              <StyledTableCell align="center">
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Button variant="contained" color="success">Create</Button>
                  </Dialog.Trigger>
                  <NewUserModal/>
                </Dialog.Root>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {users.map(usuario => (
            <StyledTableRow key={usuario.id}>
              <StyledTableCell component="th" scope="row" align="center">
                {usuario.id}
              </StyledTableCell>
              <StyledTableCell align="center">{usuario.displayName}</StyledTableCell>
              <StyledTableCell align="center">{usuario.email}</StyledTableCell>
              <StyledTableCell align="center">{usuario.phone}</StyledTableCell>
              <StyledTableCell align="center"><Button variant="outlined" startIcon={<EditIcon />}><NavLink to={`/user/${usuario.id}`}>Editar</NavLink></Button></StyledTableCell>
              <StyledTableCell align="center"><Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => excluir(usuario)} color="error">Delete</Button></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

        </Table>
      </TableContainer>
    </div>
  );
};
