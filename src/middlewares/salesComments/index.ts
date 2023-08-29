import isCommentOwner from "./isCommentOwner.middleware";
import isCommentOwnerOrSeller from "./isCommentOwnerOrSeller.middleware";
import verifyCommentId from "./verifyCommentId.middleware";

const salesCommentsMiddlewares = {
    isCommentOwner,
    verifyCommentId,
    isCommentOwnerOrSeller,
};

export default salesCommentsMiddlewares;
