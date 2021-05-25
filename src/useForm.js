import { useState } from "react";

export const useForm = (initailValues) => {
	const [values, setValues] = useState(initailValues);

	return [
		values,
		(e) => {
			setValues({
				...values,
				[e.target.name]: e.target.value,
			});
		},
	];
};
