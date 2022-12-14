import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { IUsuarios } from "../../../interfaces/IUsuarios";

export const Edit = () => {
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
  };
  useEffect(() => {
    axios
      .get<IUsuarios>(`http://localhost:7010/users/${id}`)
      .then((resposta) => setUser(resposta.data));
  }, [id, setUser]);
  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
      setEmail(user.email);
      setPhone(user.phone);
    }
  }, [user, setDisplayName, setEmail, setPhone]);
  return (
    <div className="settings">
      <div className="container">
        <div className="details__form">
          <div className="form">
            <form>
              <div className="input">
                <label>Name</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(event) => setDisplayName(event.target.value)}
                />
              </div>
              <div className="input">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="input">
                <label>Tellphone</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <NavLink to="/user" type="submit" onClick={save}>
                <Button color="success">Save</Button>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
