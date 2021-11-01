import httpService from "../../app/http.service";
import { KEY_API_MOVIE, URL_API_MOVIE } from "../../configs/keys";
import { FETCH_MOVIE } from "../types/dummy.type";
import { loading } from "./global.action";

const params = param => ({
  ...param,
  api_key: KEY_API_MOVIE,
})

export const fetchMoviePopular = (param) => {
  return async dispatch => {
    dispatch(loading(true));
    return httpService.get('movie/popular', { baseURL: URL_API_MOVIE, params: params(param) }).then(
      response => response.data
    ).catch(
      error => error
    ).finally(() => {
      dispatch(loading(false));
    });
  }
}

export const fetchMovieTopRated = (param) => {
  return async dispatch => {
    dispatch(loading(true));
    return httpService.get('movie/top_rated', { baseURL: URL_API_MOVIE, params: params(param) }).then(
      response => response.data
    ).catch(
      error => error
    ).finally(() => {
      dispatch(loading(false));
    });
  }
}

export const fetchMovieUpcoming = (param) => {
  return async dispatch => {
    dispatch(loading(true));
    return httpService.get('movie/upcoming', { baseURL: URL_API_MOVIE, params: params(param) }).then(
      response => response.data
    ).catch(
      error => error
    ).finally(() => {
      dispatch(loading(false));
    });
  }
}