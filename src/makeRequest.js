import axios from 'axios';
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization:
      'bearer 0606ca86791eb9afb5368eea7f04c0fbef5df7d85a5836de6651890e4870c3165575e9a6b0e1c7922918ad4516e513bc4d3b04d9ddfce4e409c79b0c833ce5661946405c66e6ea66da704d297007b31bbc10867cee271723e7839430c29da1fca1e286fd01392ef95c76d93162595d7706374fb7b1c6be0caf3904f5b087d538',
  },
});
