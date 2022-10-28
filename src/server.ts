import express from 'express';
import swaggerDocs from "./swagger.json";

import swaggerUI from "swagger-ui-express";

const app = express();

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.listen(3000, () => {
    console.log("Server running")
})