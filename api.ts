import express from "express";

const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ hello: "world" });
});

// eslint-disable-next-line import/prefer-default-export
export const handler = app;
