import axios from "axios";
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization:
      "bearer fea60f53f0f3c9f79da60b1e901d759fe9d6917f01d9159fdd1353b1222b8afecac4e669ee8b8eb74b9a820ce2bc62e6c096ed47a45aea29b9cc9b58a97bc74813d579d28750664e9e4b1a84928650aafe1bb7bb4878e3a3eb161acc52a33739854cdd9381576c525fb52785bb8fc316a4b76380ddac00e23a6737c7b2626c71",
  },
});
