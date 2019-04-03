import axios from 'axios';

export default function sendAxios (method, url, jsonData) {
  let options = {
    method: method || 'GET',
    url: url,
    headers: {
      'content-type': 'application/json'
    }
  };
  if (jsonData) {
    options.data = JSON.stringify(jsonData);
    console.log(`sendAxios JsonData Test >>>>>>>>`, options);
  }
  let result = axios(options).then(axiosResult => {
    return axiosResult.status === 200
      ? axiosResult
      : `AxiosError = ${axiosResult.status}`;
  });
  return result;
}
