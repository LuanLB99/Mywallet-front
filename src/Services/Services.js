import axios from "axios";

const BASE_URL = "http://localhost:5000/";

function auth() {
  const aut = JSON.parse(localStorage.getItem("token"));
  const config = {
    headers: {
      Authorization: `Bearer ${aut}`,
    },
  };

  return config;
}

function postSign(sign) {
  const promise = axios.post(`${BASE_URL}sign`, sign);
  return promise;
}

function signWithGoogle(signFromGoogle) {
  const promise = axios.post(`${BASE_URL}sign-in-google`, signFromGoogle);
  return promise;
}

function postLogin(login) {
  const promisse = axios.post(`${BASE_URL}sign-up`, login);
  return promisse;
}

function loginWithGoogle(loginFromGoogle) {
  const promise = axios.post(`${BASE_URL}sign-up-google`, loginFromGoogle);
  return promise;
}

function getTransactions() {
  const config = auth();
  const promisse = axios.get(`${BASE_URL}`, config);
  return promisse;
}

function postTransaction(transaction) {
  const config = auth();
  const promise = axios.post(`${BASE_URL}transactions`, transaction, config);
  return promise;
}

export {
  postSign,
  signWithGoogle,
  postLogin,
  loginWithGoogle,
  getTransactions,
  postTransaction,
};
