import create from "./createUsers.service";
import login from "./login/createLogin.service";
import recoverPassword from "./recoverPass/recoverPassword.service";
import retrieveUserSales from "./retrieveUserSales.service";

const users = { create, login, retrieveUserSales, recoverPassword };

export default users;
