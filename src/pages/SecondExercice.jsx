import React from "react";
import data from "../assets/data.json";

const SecondExercice = () => {
	const albumData = data[1].album;

	return (
		<article className="secondCard">
			<section>
				<figure>
					<img src={albumData.img} alt="Album's cover" className="albumCover" />
				</figure>
				<section>
					<h1>{albumData.title}</h1>
					<p>{albumData.name}</p>
					<p>{albumData.date}</p>
				</section>
			</section>
			<section className="review">
				<p>{albumData.rating}</p>
				<figure>
					<img src={albumData.star} alt="Star's icon" className="star" />
					<img src={albumData.star} alt="Star's icon" className="star" />
					<img src={albumData.star} alt="Star's icon" className="star" />
					<img src={albumData.star} alt="Star's icon" className="star" />
					<img src={albumData.star} alt="Star's icon" className="star" />
				</figure>
			</section>
		</article>
	);
};

export default SecondExercice;
