import './home.scss'
import { Forecast } from '../../components/Forecast/index';
import { useRequestData } from "../../services/api/apiFake";
import { IData } from "../../interfaces/IForecast";
import { Cards } from '../../components/Cards/index';



export function Home() {

  const {data} = useRequestData<IData[]>('/forecast')

  return (
    <div className="inside">
     
  <Cards/>
      
    </div>
  );
}
