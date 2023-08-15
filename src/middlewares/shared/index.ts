import { handleError } from "./handlerErrors.middleware";
import validateSchema from "./validateSchema.middleware";
import ensureAuth from "./ensureAuth.middleware";

const sharedMiddlewares = {
    handleError,
    validateSchema,
    ensureAuth,
};

export default sharedMiddlewares;
