import { NextApiRequest, NextApiResponse } from "next";

const dummyLeaderboards: any[] = [
  {
    id: "0d8ff9fe-f176-47b8-a540-351ec4cc2976",
    name: "Region",
    mode: 1,
    capacity: 10,
    created_at: "2022-05-01",
    updated_at: "2022-05-02",
  },
  {
    id: "329ad2d4-8507-40fd-a6df-05f90e2c4229",
    name: "Global",
    mode: 0,
    capacity: 10,
    created_at: "2022-05-03",
    updated_at: "2022-05-04",
  },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const url = "http://localhost:8080/api/v1/leaderboards";
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Authorization": "Basic dXNlcjo=", //"Basic dXNlcjpwYXNz",
      },
    };

    res.status(200).send({ leaderboards: dummyLeaderboards })

    // fetch(url, options)
    //   .then((resp) => resp.json())
    //   .then((data) => res.status(200).send(data))
    //   .catch((err) => {
    //     console.error(err);
    //     res.status(400).send(err);
    //   });
}