import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const baseURL = process.env.PROJECT_API_URL;
const username = process.env.PROJECT_API_USERNAME;
const password = process.env.PROJECT_API_PASSWORD;

const axiosInstance = axios.create({
  baseURL,
  auth: {
    username,
    password,
  },
});

export default axiosInstance;
