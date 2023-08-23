import create from "./createUsers.service";
import login from "./login/createLogin.service";
import recoverPassword from "./recoverPass/recoverPassword.service";
import update from "./updateUsers.service";

const users = { create, login, recoverPassword, update };

export default users;
