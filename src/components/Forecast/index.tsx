import axios from "axios";
import { useEffect } from "react";
import { IData } from "../../interfaces/IForecast";

 export function Forecast() {

    const x = useEffect(() => {
        axios.get<IData>("http://localhost:7010/forecast")
        console.log(x)
    },[])

  return (
    <div>

    </div>
  )
}
