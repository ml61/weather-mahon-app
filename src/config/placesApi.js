import axios from "axios";
import { placesRootPath, proxyUrl } from "./apiPath";

export const placesApiWithoutProxy = axios.create({ baseURL: placesRootPath });
export const placesApiWithProxy = axios.create({
  baseURL: proxyUrl + placesRootPath,
});
