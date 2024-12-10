import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZGI0NDBkYTM5NThmMjVhNDQzODQwYTA1YTM0MmI4OCIsIm5iZiI6MTY3MjU3MjAxMS4yNDg5OTk4LCJzdWIiOiI2M2IxNmM2YjVhZDc2YjAwY2Y0MmEwNDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.YnMxByF5DgxkuDLl3HQ8nPOyeFaQ3T6OoyG2hXqPjxU",
  },
});

export default instance;
