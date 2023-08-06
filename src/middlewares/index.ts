import shared from "./shared";
import addresses from "./addresses";
import salesAd from "./salesAd";
import users from "./users";

const middlewares = {
	...shared,
	...addresses,
	...salesAd,
	...users
};

export default middlewares;
