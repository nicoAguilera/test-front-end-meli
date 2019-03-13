'use strict';

import MELI_API from '../utils/meli.api';

function ItemByIdRoute(req, res) {
	const id = req.params.id;
	if (!id) {
		res.status(400).send({ error: 'Invalid request message framing: param Id required' });
		return;
	}
	MELI_API.itemById(id).then(({ data }) => res.status(200).send(data));
}

export default ItemByIdRoute;