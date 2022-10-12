import IBlocks from "../../../interfaces/IBlocks";
import { IData } from "../../../interfaces/IForecast";
import { useRequestData } from "../../../services/api/apiFake";
import { Forecast } from "../../Forecast";
import "./cardset.scss";

export default function Blockx(props: IBlocks) {

  const {data} = useRequestData<IData[]>('/forecast')
  console.log(data)

  return (
    <div className="left">
      <>
        <span onClick={() => test(props.blockId)} className="title">
          {props.name}
        </span>
        <span>Wind Speed: {Math.round(props.data.windSpeed)}</span>
        <span>Solar Irradiation: {Math.round(props.data.solarIrradiation)}%</span>
        <span>Temperature: {Math.round(props.data.temperature)}°C</span>
        <span>Rain: {Math.round(props.data.rain)}mm</span>
        <span>Relative Humidity: {Math.round(props.data.relativeHumidity)}%</span>
      </>

      {/* <div>
            {data &&
              data.map((e) => {
                return <Forecast forecast={e} key={e.blockId} />;
              })}
          </div> */}
    </div>
  );
}
