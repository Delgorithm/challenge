import React from "react";
import data from "../assets/data.json";

const FirstExercice = () => {
	const movieData = data[0].movie;
	const allItems = data[0].allItems;

	return (
		<article className="firstExo">
			<figure>
				<img
					src={movieData.img}
					alt="Picture of movie production"
					className="firstImg"
				/>
			</figure>
			<h1>{movieData.title}</h1>
			<section>
				<figure>
					<img src={movieData.star} alt="" className="star" />
					<img src={movieData.star} alt="" className="star" />
					<img src={movieData.star} alt="" className="star" />
					<img src={movieData.star} alt="" className="star" />
					<img src={movieData.halfStar} alt="" className="star" />
				</figure>
				<p>{movieData.review}</p>
			</section>
			<section>
				<h3>{movieData.secondTitle}</h3>
				<p>{movieData.description}</p>
				<span></span>
				<h3>{movieData.subtitle}</h3>

				{/* ---- Méthode map pour afficher mes éléments plus rapidement et efficacement */}
                <section className="myItems">
                    {Object.values(allItems).map((value, index) => (
                        <p key={index}>{value}</p>
                    ))}
                </section>
                <h4>{movieData.action}</h4>
			</section>
		</article>
	);
};

export default FirstExercice;
