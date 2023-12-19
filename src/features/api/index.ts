import axios from "axios";

const axInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json; version=1",
    "Content-Type": "application/json",
  },
});

export default async function fetcher(url: string) {
  return axInstance.get(url).then((res) => res.data);
}
