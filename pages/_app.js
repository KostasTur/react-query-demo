import '../styles/globals.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const reactQueryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5 * 1000,
		},
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<QueryClientProvider client={reactQueryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<Component {...pageProps} />
		</QueryClientProvider>
	);
}

export default MyApp;
