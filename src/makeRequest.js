import axios from 'axios';
export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization:
      'bearer b966171eb3f90cc561852eb8031e9639ea0b82d61085c31cc942e00f6fd6d7f9c4b95d2f913f204f2326c96c87ecad1f18cc6ea474f620fbb23593044b3dd6565ed898a29f1a050839ae1779dcf76a479308582dc80c6271ae35196ce61cc4492af3ff954315322afd3f0bd6ca9ce69553d1e1e2330abd631c7de937d64a642c',
  },
});
