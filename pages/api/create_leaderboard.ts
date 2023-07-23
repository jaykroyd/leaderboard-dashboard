import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const url = "http://localhost:8080/api/v1/leaderboards";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": "Basic dXNlcjo=", //"Basic dXNlcjpwYXNz",
      },
      body: JSON.stringify({
        name: "test",
        capacity: 10,
        mode: 0,
      }),
    };

    fetch(url, options)
      .then((resp) => resp.json())
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
}