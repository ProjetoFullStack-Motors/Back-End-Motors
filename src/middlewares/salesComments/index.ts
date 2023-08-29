import isCommentOwner from "./isCommentOwner.middleware";
import verifyCommentId from "./verifyCommentId.middleware";

const salesCommentsMiddlewares = {
    isCommentOwner,
    verifyCommentId,
};

export default salesCommentsMiddlewares;
