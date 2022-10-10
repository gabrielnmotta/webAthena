import IBlocks from "../../../interfaces/IBlocks";
import "./cardset.scss";

export default function Blockx(props: IBlocks) {
  return (
    <div className="left">
      <>
        <span onClick={() => test(props.blockId)} className="title">
          {props.name}
        </span>
        <span>Wind Speed: {props.data.windSpeed}</span>
        <span>Solar Irradiation: {props.data.solarIrradiation}</span>
        <span>Temperature: {props.data.temperature}</span>
        <span>Rain: {props.data.rain}</span>
        <span>Relative Humidity: {props.data.relativeHumidity}</span>
      </>
    </div>
  );
}
