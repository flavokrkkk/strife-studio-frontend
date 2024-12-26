import { axiosAuth } from "@/shared";
import { EUserEndpoints } from "./utils/endpoints";
import axios from "axios";
import { IUser } from "../types";

class UserService {
  public async getCurrentUser() {
    try {
      const { data, status } = await axiosAuth.get<IUser>(
        EUserEndpoints.CURRENT_USER,
      );
      return {
        data: data,
        message: "Пользователь получен!",
        statusCode: status,
      };
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const serverMessage =
          err.response?.data?.message || "Ошибка соединения с сервером";
        const serverError = err.response?.data?.error || "Ошибка";
        const statusCode = err.response?.status || 500;

        return {
          data: {} as IUser,
          message: serverMessage,
          error: serverError,
          statusCode,
        };
      } else if (err instanceof Error) {
        return {
          data: {} as IUser,
          message: err.message || "Неизвестная ошибка",
          error: "Unknown",
          statusCode: 500,
        };
      } else {
        return {
          data: {} as IUser,
          message: "Неизвестная ошибка на клиенте",
          error: "Unknown",
          statusCode: 500,
        };
      }
    }
  }
}

export const { getCurrentUser } = new UserService();
