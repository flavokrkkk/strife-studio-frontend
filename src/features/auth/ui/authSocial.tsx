import { Button, Icon, IconTypes } from "@/shared/ui";

const AuthSocial = () => {
  return (
    <div className="mt-2 space-y-2">
      <Button
        type="button"
        value={"yandex"}
        className="w-full"
        variant={"secondary"}
      >
        <Icon type={IconTypes.TELEGRAM_OUTLINED} className="font-bold" />
        Войти через Telegram
      </Button>
    </div>
  );
};

export default AuthSocial;
