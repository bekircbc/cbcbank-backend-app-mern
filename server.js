import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4433;

app.get("/", (req, res) => {
  return res.json(getData());
});
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

function getData() {
  return {
    accounts: [
      {
        id: "ks",
        owner: "Keyser Söze",
        iban: "DE4935",
        movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
        interestRate: 1.2,
        pin: 1111,
        movementsDates: [
          "2021-11-18T21:31:17.178Z",
          "2021-12-23T07:42:02.383Z",
          "2021-01-28T09:15:04.904Z",
          "2022-04-01T10:17:24.185Z",
          "2022-05-08T14:11:59.604Z",
          "2022-07-26T17:01:17.194Z",
          "2022-07-28T23:36:17.929Z",
          "2022-03-01T10:51:36.790Z",
        ],
        currency: "EUR",
        locale: "pt-PT",
      },
      {
        id: "hf",
        owner: "Harold Finch",
        iban: "DE4936",
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
        movementsDates: [
          "2020-11-01T13:15:33.035Z",
          "2021-11-30T09:48:16.867Z",
          "2021-12-25T06:04:23.907Z",
          "2021-01-25T14:18:46.235Z",
          "2021-02-05T16:33:06.386Z",
          "2021-04-10T14:43:26.374Z",
          "2022-06-25T18:49:59.371Z",
          "2022-03-10T12:01:20.894Z",
        ],
        currency: "USD",
        locale: "en-US",
      },
      {
        id: "jr",
        owner: "John Reese",
        iban: "DE4937",
        movements: [200, 3000, -450, -440, -260, 8500, -3230, 3000],
        interestRate: 1.5,
        pin: 3333,
        movementsDates: [
          "2019-11-01T13:15:33.035Z",
          "2019-11-30T09:48:16.867Z",
          "2019-12-25T06:04:23.907Z",
          "2020-01-25T14:18:46.235Z",
          "2021-02-05T16:33:06.386Z",
          "2022-04-10T14:43:26.374Z",
          "2022-06-25T18:49:59.371Z",
          "2022-03-13T12:01:20.894Z",
        ],
        currency: "USD",
        locale: "en-US",
      },
      {
        id: "jk",
        owner: "Jonas Kahnwald",
        iban: "DE4938",
        movements: [500, 300, -150, -290, -30, 1000, 3000, -560],
        interestRate: 1.5,
        pin: 4444,
        movementsDates: [
          "2018-11-01T13:15:33.035Z",
          "2018-11-30T09:48:16.867Z",
          "2018-12-25T06:04:23.907Z",
          "2019-01-25T14:18:46.235Z",
          "2019-02-05T16:33:06.386Z",
          "2020-04-10T14:43:26.374Z",
          "2021-06-25T18:49:59.371Z",
          "2022-03-14T12:01:20.894Z",
        ],
        currency: "EUR",
        locale: "pt-PT",
      },
    ],
  };
}
