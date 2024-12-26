import { z } from "zod";

export const RegisterSchema = z.object({
  username: z.string().min(1, {
    message: "Введите имя",
  }),
  email: z.string().email({
    message: "Введите корректный email",
  }),
  password: z.string().min(6, {
    message: "Пароль должен быть не менее 6 символов",
  }),
});

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>;
