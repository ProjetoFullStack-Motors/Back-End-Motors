import { Request, Response } from "express";
import {
    TCommentRequest,
    TCommentResponse,
} from "../interfaces/salesComments.interfaces";
import services from "../services";

const create = async (
    request: Request,
    response: Response
): Promise<Response> => {
    const requestBody: TCommentRequest = request.body;
    const userId: string = String(response.locals.userId);
    const salesAdId: string = request.params.id;

    const newComment: TCommentResponse =
        await services.salesCommentsService.createComment(
            requestBody,
            salesAdId,
            userId
        );

    return response.status(201).json(newComment);
};

const editComment = async (
    request: Request,
    response: Response
): Promise<Response> => {
    const commentId: string = request.params.id;
    const requestBody: TCommentRequest = request.body;

    const comment: TCommentResponse =
        await services.salesCommentsService.editComment(commentId, requestBody);

    return response.json(comment);
};

const deleteComment = async (
    request: Request,
    response: Response
): Promise<Response> => {
    const commentId: string = request.params.id;

    await services.salesCommentsService.deleteComment(commentId);

    return response.status(204).send();
};

const salesCommentsControllers = {
    create,
    editComment,
    deleteComment,
};

export default salesCommentsControllers;
