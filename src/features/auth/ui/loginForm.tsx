import { EAuthModes } from "@/features/auth/lib/utils/mode";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "@/shared/ui/form/form";
import { CircleAlert } from "lucide-react";
import AuthWrapper from "@/features/auth/ui/authWrapper";
import clsx from "clsx";
import { LoginSchema, TypeLoginSchema } from "../schemes/loginSchema";
import { Button, Input } from "@/shared/ui";
import { useLoginMutation } from "@/entities/auth/hooks/useQueryMutate";

const LoginForm = () => {
  const { login, isLoadingLogin } = useLoginMutation();
  const form = useForm<TypeLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onFormSubmit = (values: TypeLoginSchema) => {
    login({ values });
    reset();
  };

  return (
    <AuthWrapper mode={EAuthModes.LOGIN}>
      <Form {...form}>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <section className="space-y-3">
            <>
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-1 relative">
                    <FormControl>
                      <Input
                        disabled={isLoadingLogin}
                        type="email"
                        id="email"
                        placeholder="Email"
                        className={clsx(errors.email && "border-red-600")}
                        {...field}
                      />
                    </FormControl>
                    {errors.email && (
                      <span className="absolute right-2 top-4 transform -translate-y-1/2 text-red-600">
                        <CircleAlert className="w-5 h-5" />
                      </span>
                    )}
                    <FormMessage className="text-xs font-light" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-1 relative">
                    <FormControl>
                      <Input
                        disabled={isLoadingLogin}
                        type="password"
                        id="password"
                        placeholder="Пароль"
                        className={clsx(errors.password && "border-red-600")}
                        {...field}
                      />
                    </FormControl>
                    {errors.password && (
                      <span className="absolute right-2 top-4 transform -translate-y-1/2 text-red-600">
                        <CircleAlert className="w-5 h-5" />
                      </span>
                    )}
                    <FormMessage className="text-xs font-light" />
                  </FormItem>
                )}
              />
            </>
          </section>
          <Button
            disabled={isLoadingLogin}
            className="w-full mt-5"
            variant={"outline"}
          >
            Войти
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  );
};

export default LoginForm;
