import axios from 'axios';

const API_ENDPOINT = "http://localhost:3001/api/";

const RESOURCES = {
	SEARCH: 'items?q=',
	ITEM: 'items/'
};

const API = {
	getItemsByQuery,
	getItemById
};

function getItemsByQuery(query = '') {
	const promise = axios.get(API_ENDPOINT.concat(RESOURCES.SEARCH, query));
	return promise.then((response) => response.data);
}

function getItemById(id = '') {
	const promise = axios.get(API_ENDPOINT.concat(RESOURCES.ITEM, id));
	return promise.then((response) => response.data);
}

export default API;