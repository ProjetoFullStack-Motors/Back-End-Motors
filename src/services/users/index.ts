import create from "./createUsers.service";
import login from "./login/createLogin.service";
import recoverPassword from "./recoverPass/recoverPassword.service";
import update from "./updateUsers.service";
import deleteUser from "./deleleteUsers.service";

const users = { create, login, recoverPassword, update, deleteUser};

export default users;
