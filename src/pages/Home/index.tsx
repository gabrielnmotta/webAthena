import './home.scss'
import { Forecast } from '../../components/Forecast/index';
import { useRequestData } from "../../services/api/apiFake";
import { IData } from "../../interfaces/IForecast";



export function Home() {

  const {data} = useRequestData<IData[]>('/forecast')

  return (
    <div className="inside">
      {
        data && data.map((e) => {
        return(
        <Forecast forecast={e} key={e.blockId}/>
        
  );})}
      
    </div>
  );
}
