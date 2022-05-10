import { Tunes } from "../models";
import { http } from "../utils/http";

export const fetchTunes = async (url: string): Promise<Tunes> => {
  const { data } = await http.get<Tunes>(url);

  return data;
};
