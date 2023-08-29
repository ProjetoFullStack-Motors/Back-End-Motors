import createComment from "./createSalesComments.service";
import getAllSalesAdComments from "./getAllAdComments.service";
import editComment from "./editComment.service";
import deleteComment from "./deleteComment.service";

const salesCommentsService = {
    createComment,
    getAllSalesAdComments,
    editComment,
    deleteComment,
};

export default salesCommentsService;
