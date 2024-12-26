import { TypeRegisterSchema } from "@/features/auth/schemes/registerSchema";
import { EAuthEndpoints } from "./utils/endpoints";
import { ApiResponse, axiosAuth, axiosNoAuth } from "@/shared";
import axios from "axios";
import { TypeLoginSchema } from "@/features/auth/schemes/loginSchema";
import { IUser } from "@/entities/user";

class AuthService {
  public async register(body: TypeRegisterSchema): Promise<ApiResponse<IUser>> {
    try {
      const { data, status } = await axiosNoAuth.post<IUser>(
        EAuthEndpoints.REGISTER,
        body,
      );
      return {
        data: data,
        message: "Регистрация прошла успешно!",
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
  public async login(body: TypeLoginSchema): Promise<ApiResponse<IUser>> {
    try {
      const { data, status } = await axiosNoAuth.post<IUser>(
        EAuthEndpoints.LOGIN,
        body,
      );
      return {
        data: data,
        message: "Авторизация прошла успешно!",
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

  public async refreshToken() {
    try {
      const { data, status } = await axiosAuth.post(EAuthEndpoints.REFRESH);
      return {
        data: data,
        message: "Авторизация прошла успешно!",
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

export const authService = new AuthService();
