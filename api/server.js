const express = require("express");
const cors = require("cors");
const api = express();

const port = process.env.PORT || 5000;

api.use(express.json());
api.use(express.urlencoded());
api.use(cors());

// routes(api);

// const router = express.Router;
// routes(api, router);

api.listen(port, () => {
    console.log("Server working on port", port)
});