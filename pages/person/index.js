import { useQuery } from 'react-query';

const PersonPage = () => {
	const { isLoading, isError, error, data } = useQuery(
		'person',
		async () => {
			const res = await fetch('/api/person');
			return res.json();
		},
		{
			// cacheTime
			// staleTime
			staleTime: 5 * 1000,
			// select allows to cahse only selected fields
			// select:(person)=>person.name
		}
	);

	if (isLoading)
		return (
			<div>
				<p>...loading</p>
			</div>
		);

	if (isError)
		return (
			<div>
				<p>ups... I got an error: {error?.message}</p>
			</div>
		);
	return (
		<div>
			<p>{data?.id}</p>
			<p>{data?.name}</p>
			<p>{data?.age}</p>
		</div>
	);
};

export default PersonPage;
