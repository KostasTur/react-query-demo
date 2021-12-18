const getPerson = (req, res) => {
	console.log('getting person');
	res.status(200).json({ id: '1', name: 'John Doe', age: 25 });
};
export default getPerson;
