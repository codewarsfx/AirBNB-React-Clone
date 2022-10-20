import "./home.css";
import { home } from "./homeData";

import HomeDetail from "../HomeDetails/homeDetail";
import { useEffect, useState } from "react";
import { getHomesData } from "../../firebase";

const HomeComponent = () => {
	const [homes, setHomes] = useState(null);

	useEffect(() => {
		const getHomes = async () => {
			const homes = await getHomesData()

			if (homes) {
				setHomes(homes);
			}
		};

		getHomes();
	}, []);


	return (
		<div className='container'>
			{homes?.map((home) => (
				<HomeDetail key={home.id} {...home} />
			))}
		</div>
	);
};

export default HomeComponent;
