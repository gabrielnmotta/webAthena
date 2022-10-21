import "./cards.scss";
import IBlocks from "../../interfaces/IBlocks";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCallback } from "react";
import Blockx from "./Cardset";
import { Button } from "@mui/material";
import { Forecast } from "../Forecast";
import { IData } from "../../interfaces/IForecast";
import { useRequestData } from "../../services/api/apiFake";
import React from "react";
import { useTranslation } from "react-i18next";

export function Cards() {
  const [blocks, setBlocks] = useState<IBlocks[]>([]);
  const [bloco, setBloco] = useState<IBlocks[]>([]);
  const { data } = useRequestData<IData[]>("/forecast");

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

  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };

  const {t} = useTranslation();

  return (
    <div className="previewx">
      <div >
        <button className="button" onClick={back}>
        {t('Back')}
        </button>
      </div>
      {show ? (
        <div className="forecast">
          <button
            aria-hidden
            type="button"
            className="button "
            onClick={() => handleShow()}
          >
            {t('Forecast')}
          </button>

          {bloco.map((blocks) => (
            <div className="block">
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
                  data={blocks.data}
                />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="forecast">
          <button
            aria-hidden
            type="button"
            className="button"
            onClick={() => handleShow()}
          >
            {t('Present')}
          </button>
          {bloco.map((blocks) => (
            <div>
              {data &&
                data
                  .filter((item) => item.blockId === blocks.blockId)
                  .map((e) => {
                    return <Forecast forecast={e} key={e.blockId} />;
                  })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
