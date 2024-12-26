import { TypeRegisterSchema } from "@/features/auth/schemes/registerSchema";
import { authService } from "../libs/authService";
import { useNavigate } from "react-router-dom";
import { ApiResponse, ERouteNames } from "@/shared";
import { IUser } from "@/entities/user";
import { TypeLoginSchema } from "@/features/auth/schemes/loginSchema";
import { useMutation } from "@tanstack/react-query";
import { toastMessageHandler, toastSuccesHandler } from "@/shared/utils/error";

export const useRegisterMutation = () => {
  const { mutate: register, isPending: isLoadingRegister } = useMutation({
    mutationKey: ["register user"],
    mutationFn: ({ values }: { values: TypeRegisterSchema }) =>
      authService.register(values),
    onSuccess(data) {
      if (data.error) {
        toastMessageHandler(new Error(data.message));
      } else {
        toastSuccesHandler(
          "Успешная регистрация",
          "Подтвердите почту. Сообщение было отправлено на ваш почтовый адрес!",
        );
      }
    },
    onError(error) {
      toastMessageHandler(error);
    },
  });

  return { register, isLoadingRegister };
};

export const useLoginMutation = () => {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoadingLogin } = useMutation({
    mutationKey: ["login user"],
    mutationFn: ({ values }: { values: TypeLoginSchema }) =>
      authService.login(values),
    onSuccess(data: ApiResponse<IUser>) {
      if (data.error) {
        toastMessageHandler(new Error(data.message));
        return;
      }
      if (data.message) {
        toastMessageHandler(data);
      } else {
        toastSuccesHandler("Успешная авторизация");
        navigate(ERouteNames.DASHBOARD, { replace: true });
      }
    },
    onError(error) {
      toastMessageHandler(error);
    },
  });

  return { login, isLoadingLogin };
};
