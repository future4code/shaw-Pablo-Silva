import { app } from "./app";
import { getFilterUser } from "./endpoints/filterUser";
import { getFilterUserByType } from "./endpoints/filterUsersByType";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsers } from './endpoints/getAllUsers'
import { getByUserAllFeatures } from "./endpoints/GetByUserAllFeatures";
import { getByUserLimit } from "./endpoints/getByUserLimit";
import { getFilterUserByOrder } from "./endpoints/GetUserByOrder";


app.get("/recipes", getAllRecipes)

app.get('/users', getAllUsers)

app.get('/user', getFilterUser)

app.get('/users/:type', getFilterUserByType)

app.get('/userByOrder', getFilterUserByOrder)

app.get('/user/limit', getByUserLimit)

app.get('/user/allfeatures', getByUserAllFeatures)