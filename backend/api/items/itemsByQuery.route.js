'use strict';

import MELI_API from '../utils/meli.api';

function ItemByQuery(req, res) {
	const query = req.query.q;

	if (!query) {
		res.status(400).send({ error: 'Invalid request message framing: query field required' });
		return;
	}
	MELI_API.itemsByQuery(query).then(({ data }) => res.status(200).send(data));
}

export default ItemByQuery;