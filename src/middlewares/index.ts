import shared from "./shared";
import addresses from "./addresses";
import orders from "./orders";
import salesAd from "./salesAd";
import users from "./users";

const middlewares = {
	...shared,
	...addresses,
	...orders,
	...salesAd,
	...users
};

export default middlewares;
