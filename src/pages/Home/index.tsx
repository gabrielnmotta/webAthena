import './home.scss'
import { Navbar } from "../../components/NavBar/Nav";
import { Sidebar } from "../../components/Sidebar/index";
import { Widgets } from '../../components/Widgets'
import { Usuarios } from '../Usuarios';

export function Home() {
  return (
    <div className="home">
        <Sidebar />
      
      <div className="homeContainer">
      <Navbar />
      <div className="widgets">
          <Widgets />
        </div>
        <div className="charts">
          <Usuarios/>
        </div>

      </div>
    </div>
  );
}
