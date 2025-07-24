import { Router } from "express";

import { usersRoutes } from "./users-routers";

const routes = Router()
routes.use("/users", usersRoutes)

export { routes }