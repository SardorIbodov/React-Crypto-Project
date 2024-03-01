import { cryptoData, cryptoAssets } from "./data";

export async function fakeFetchCrypto() {
  const token = "VdfKKBUdgdDxCO5bj2t5Cj1Z4+fi3r2+AreTB5leNOY=";
  const options = {
    headers: {
      accept: "application/json",
      "X-API-KEY": token,
    },
  };
  const result = await fetch("https://openapiv1.coinstats.app/coins", options);
  const coins = await result.json();
  return coins;
}

export function fetchAssests() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 0);
  });
}
