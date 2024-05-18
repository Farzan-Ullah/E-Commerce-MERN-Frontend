import { useCookies } from "react-cookie";
export const useGetToken = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies] = useCookies(["access_token"]);

  return {
    headers: { authorization: cookies.access_token },
  };
};
