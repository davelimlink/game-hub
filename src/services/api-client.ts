import axios from "axios";

export default axios.create ({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '72efb36d7240424bb8d71e71e02505a1'
  }
})