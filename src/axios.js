import axios from 'axios';

const instance = axios.create({
    /*
        This is the base url for any request that we make
        However, we have to change the value once it's been deployed to Herouku
    */
    baseURL: "http://localhost:9000"
});

export default instance;