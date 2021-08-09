import Axios from "axios";

export const jsonAPI = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const VIPNoteApi = Axios.create({
  baseURL: "http://bddev.ultra-x.jp/vipnoteApi",
});
