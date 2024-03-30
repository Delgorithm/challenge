import React from "react";
import data from "../assets/data.json";

const ThirdExercice = () => {
	const formData = data[2].form;

	console.log(formData);

	return (
		<article className="thirdCard">
			<figure>
				<img src={formData.img} alt="A cutie patootie" />
			</figure>
			<p>{formData.tag}</p>
			<p>{formData.title}</p>
			<p>{formData.description}</p>
		</article>
	);
};

export default ThirdExercice;
