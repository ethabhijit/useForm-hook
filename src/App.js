import { useForm } from "./useForm";

const App = () => {
	const [values, handelChange] = useForm({ email: "", password: "" });

	return (
		<div className="box">
			<input type="email" name="email" value={values.email} onChange={handelChange} />
			<input type="password" name="password" value={values.password} onChange={handelChange} />
			<p>
				{JSON.stringify(values)}
			</p>
		</div>
	);
};

export default App;
