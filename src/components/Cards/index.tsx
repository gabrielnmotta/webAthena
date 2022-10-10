import "./cards.scss";
import IBlocks from "../../interfaces/IBlocks";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCallback } from "react";
import Blockx from "./Cardset";
import { Button } from "@mui/material";

export function Cards() {
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
        <Button variant="contained" onClick={back}>Voltar</Button>
      </div>
      {bloco.map((blocks) => (
        <button
          onClick={() => test(blocks.blockId, blocks.name)}
          className="title"
        >
          <Blockx
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
  );
}
