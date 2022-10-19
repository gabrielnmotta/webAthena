import { Button } from "@mui/material";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import IBlocks from "../../interfaces/IBlocks";
import "./maps.scss";
import Mapset from "./Mapset";

export function Maps() {
  const [blocks, setBlocks] = useState<IBlocks[]>([]);
  const [bloco, setBloco] = useState<IBlocks[]>([]);

  useEffect(() => {
    axios
      .get<IBlocks[]>("http://localhost:7010/blocks")
      .then((resposta) =>
        setBlocks(resposta.data.filter((item) => item.blockId !== "0"))
      );
  }, []);

  useEffect(() => {
    setBloco(blocks.filter((blocks) => blocks.blockParent === "0"));
  }, [blocks]);

  const test = useCallback(
    (blockID: string, name: string) => {
      console.log(name);
      setBloco(blocks.filter((blocks) => blocks.blockParent === blockID));
    },
    [blocks]
  );

  

  const back = useCallback(() => {
    bloco.forEach((item) => {
      const fvck = blocks.filter((linhagem) => {
        return item.blockParent === linhagem.blockId;
      });
      fvck.forEach((list) => {
        setBloco(
          blocks.filter((blocks) => list.blockParent === blocks.blockParent)
        );
      });
    });
  }, [bloco, blocks]);

  return (
    <div className="preview">
      <div className="button">
        <button onClick={back}>Back</button>
      </div>
      <div>

      {bloco.map((blocks) => (
        <button
          onClick={() => test(blocks.blockId, blocks.name)}
          className="title"
        >
          <Mapset
            blockId={blocks.blockId}
            name={blocks.name}
            abrv={""}
            blockParent={""}
            leafParent={false}
            date={0}
            data={{
              windSpeed: blocks.data.windSpeed,
              solarIrradiation: blocks.data.solarIrradiation,
              temperature: blocks.data.temperature,
              rain: blocks.data.rain,
              relativeHumidity: blocks.data.relativeHumidity,
            }}
          />
        </button>
      ))}
      </div>
      
    </div>
  );
}
