import createComment from "./createSalesComments.service";
import getAllSalesAdComments from "./getAllAdComments.service";
import editComment from "./editComment.service";

const salesCommentsService = {
    createComment,
    getAllSalesAdComments,
    editComment,
};

export default salesCommentsService;
