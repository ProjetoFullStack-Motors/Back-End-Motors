import create from "./createUsers.service";
import login from "./login/createLogin.service";
import retrieveUserSales from "./retrieveUserSales.service";

const users = { create, login, retrieveUserSales };

export default users;
