import { ELocalStorageKeys } from "@/shared/utils";

class TokenService {
  public deleteAccessToken() {
    localStorage.removeItem(ELocalStorageKeys.ACCESS_TOKEN);
  }

  public getAccessToken() {
    return localStorage.getItem(ELocalStorageKeys.ACCESS_TOKEN);
  }
  public setAccessToken(accessToken: string) {
    localStorage.setItem(ELocalStorageKeys.ACCESS_TOKEN, accessToken);
  }
}

export const tokenService = new TokenService();
