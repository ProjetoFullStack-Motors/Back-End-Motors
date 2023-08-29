import { Request, Response } from "express";
import {
    TCommentRequest,
    TCommentResponse,
    TSalesAdComments,
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

const getAllSalesAdComments = async (
    request: Request,
    response: Response
): Promise<Response> => {
    const salesAdId: string = request.params.id;
    const allComments: TSalesAdComments =
        await services.salesCommentsService.getAllSalesAdComments(salesAdId);
    return response.json(allComments);
};

const salesCommentsControllers = {
    create,
    getAllSalesAdComments,
};

export default salesCommentsControllers;
