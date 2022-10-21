import "./home.css";

import HomeDetail from "../HomeDetails/homeDetail";
import HomeSkeleton from "../SkeletonDetails/skeleton";
import { useContext } from "react";
import { HomeContext } from "../../context/homeContext";

const HomeComponent = () => {
	const {isLoading,homes} = useContext(HomeContext)
	return (
		<div className='container'>
			{!isLoading
				? homes.map((home) => <HomeDetail key={home.id} {...home} />)
				: Array(9)
						.fill(0)
						.map((_, i) => <HomeSkeleton key={i} />)}
		</div>
	);
};

export default HomeComponent;
