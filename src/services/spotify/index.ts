import axios from "axios";
import * as Sentry from "@sentry/react";

const spotify = axios.create({
  baseURL: "https://api.spotify.com",
});

spotify.interceptors.request.use((value) => {
  const token = localStorage.getItem("token");
  value.headers.set("Authorization", `Bearer ${token}`);
  return value;
});

spotify.interceptors.response.use(
  (valueSuccess) => {
    const path = valueSuccess.request.responseURL;
    localStorage.setItem(path, JSON.stringify(valueSuccess.data));
    return valueSuccess;
  },
  (valueError) => {
    Sentry.captureException(valueError);
    const data = localStorage.getItem(valueError.response.request.responseURL);

    if (valueError.request.status !== 401 && data) {
      return {
        status: 200,
        data: JSON.parse(data),
      };
    }

    throw valueError;
  }
);

export default spotify;
