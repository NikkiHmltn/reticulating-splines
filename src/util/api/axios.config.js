import axios from "axios";

const backendAPI = process.env.REACT_APP_API_URL;

const simsAPI = axios.create({
	baseURL: `${backendAPI}`,
	headers: {
		"Content-type": "application/json",
        "api_key": process.env.REACT_APP_API_KEY
	},
});

export default simsAPI;