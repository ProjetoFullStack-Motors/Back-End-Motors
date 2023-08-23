import create from "./createUsers.service";
import login from "./login/createLogin.service";
import recoverPassword from "./recoverPass/recoverPassword.service";

const users = { create, login, recoverPassword };

export default users;
