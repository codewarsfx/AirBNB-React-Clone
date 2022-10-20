import "./home.css";

import HomeDetail from "../HomeDetails/homeDetail";
import { useEffect, useState } from "react";
import { getHomesData } from "../../firebase";
import HomeSkeleton from "../SkeletonDetails/skeleton";

const HomeComponent = () => {
	const [homes, setHomes] = useState([]);
	const [isLoading, setIsLoading]= useState(true)

	useEffect(() => {
		const getHomes = async () => {
			const homes = await getHomesData()

			if (homes) {
				setTimeout(() => {
					setHomes(homes);
					setIsLoading(!isLoading)
				},2000)
				
			}
		};

		getHomes();
	}, []);


	return (
		<div className='container'>
			{ !isLoading ? homes.map((home) => (
				<HomeDetail key={home.id} {...home}/>
			)) : Array(9).fill(0).map(()=><HomeSkeleton/>)}
		</div>
	);
};

export default HomeComponent;
