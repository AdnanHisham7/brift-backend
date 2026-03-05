import { Response } from "express";

interface SuccessResponse<T> {
  statusCode?: number;
  message?: string;
  data?: T;
}

export const sendSuccess = <T>(
  res: Response,
  { statusCode = 200, message = "Success", data }: SuccessResponse<T>,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};
