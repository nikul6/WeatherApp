export const Api_key = '2cde190d6608c2834f254eb846de5b05';

let baseURL = 'http://api.openweathermap.org/data/2.5/';

export default class API {
    static baseURL = baseURL;

    static request(url) {
        console.log("baseURL + url", baseURL + url)
        return fetch(baseURL + url);
    }

    static fetchCitiesAPI(latitude, longitude) {
        return this.request(`find?lat=${latitude}&lon=${longitude}&cnt=50&appid=${Api_key}`)
    }

}