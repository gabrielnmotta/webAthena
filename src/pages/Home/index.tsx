import './home.scss'
import { Navbar } from "../../components/NavBar/Nav";
import { Sidebar } from "../../components/Sidebar/index";
import { Widgets } from '../../components/Widgets'

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
          <h3 className="teste2">asdjlkhasdjhkasd</h3>
        </div>

      </div>
    </div>
  );
}
