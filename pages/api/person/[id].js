export default getPersonById = (req, res) => {
	const {
		query: { id },
	} = req;
	if (typeof id === 'string') {
		console.log(`getting person with id: ${id}`);
		res.status(200).json({ id, name: 'Jonas Jonaitis', age: 25 });
	} else {
		res.status(500).json(new Error('provided id is not a string'));
	}
};
