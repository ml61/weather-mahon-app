import axios from "axios";
import { rootPath } from "./apiPath";


export default axios.create({
  baseURL: rootPath,
});
