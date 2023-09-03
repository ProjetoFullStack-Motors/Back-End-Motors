import createComment from "./createSalesComments.service";
import editComment from "./editComment.service";
import deleteComment from "./deleteComment.service";

const salesCommentsService = {
    createComment,
    editComment,
    deleteComment,
};

export default salesCommentsService;
