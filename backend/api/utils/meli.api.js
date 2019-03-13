'use strict';

import Utils from './utils';

/*
MeLi Endpoints

Query https://api.mercadolibre.com/sites/MLA/search?q=:query
Item https://api.mercadolibre.com/items/ID
Item Description https://api.mercadolibre.com/items/ID/description
Currency https://api.mercadolibre.com/currencies/CURRENCY_ID

*/

const author = {
	name: 'Edgar',
	lastname: 'Aguilera'
};

function itemById(id = '') {
	const conf = { queryParams: id };
	return new Promise((resolve) => {
		Utils.request(Utils.RESOURCES.ITEMS, conf)
			.then(onResponse)
			.catch(error => { throw error; });

		function onResponse({ data }) {
			let response = { author, };
			if (data.status == 404 || data.error) {
				response.error = { error: data.error, message: data.message };
			} else {
				Utils.mapItemsInfo([data]).then((description) => {
					Utils.getItemDescription(id).then((description) => {
						response.item = item[0];
						response.item.picture = (data.pictures[0] || {}).url,
						response.item.sold_quantity = data.sold_quantity;
						response.item.description = description
						resolve({ data: response });
					});
				});
			}
		}
	});
}

function itemsByQuery(queryString = '') {
	const conf = { queryString };
	return new Promise((resolve) => {
		Utils.request(Utils.RESOURCES.SEARCH, conf)
			.then(onResponse)
			.catch(error => { throw error; });

		function onResponse({ data }) {
			let response = { author };
			if (data.status == 404 || data.error) {
				response.error = { error: data.error, message: data.message };
			} else {
				response.categories = data.categories || [];
				Utils.mapItemsInfo(data.results.slice(0, 4)).then(items => {
					response.items = items;
					resolve({ data: response });
				});
			}
		}
	});
}

export default {
	itemById,
	itemsByQuery
};