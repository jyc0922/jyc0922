import { data } from "react-router-dom";
import { getServerUrl } from "./getServerUrl";

const postAndPut = (methodName: string) => (path: string, body: object) => {
  return fetch(getServerUrl(path), {
    method: methodName,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
  });
};

export const post = postAndPut("POST");
export const put = postAndPut("PUT");
