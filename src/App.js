import { useQuery } from "react-query";
const URL = "https://random.dog/woof.json";

const App = () => {
	const { isLoading, error, data } = useQuery("Dogs", () =>
		fetch(URL).then((res) => res.json())
	);
	console.log(error);
	return (
		<div>
			{error && <h1>Error! Try Again...</h1>}
			{isLoading && <h1>Loading...</h1>}
			{!error && data?.url && (
				<div>
					<h2>Success</h2>
					<img src={data.url} width="400" alt="Dog" />
				</div>
			)}
		</div>
	);
};

export default App;
