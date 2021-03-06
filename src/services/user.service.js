import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "https://ecomsbackend.herokuapp.com/products/";
class UserService {
  getPublicContent() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}
export default new UserService();