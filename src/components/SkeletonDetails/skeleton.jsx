import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./skeleton.css";

const HomeSkeleton = () => {
	return (
		<>
			<div className='home-group'>
				<Skeleton className='home-group-top' />
				<div className='home-group-bottom'>
					<div className="top"><Skeleton width={180} className='loaders' height={20} /> <Skeleton className="rating" width={40} height={20}  /></div>
					<Skeleton width={110} className='loaders' height={20} />
					<Skeleton width={90} className='loaders' height={20} />
					<Skeleton width={60} className='loaders' height={20} />
				</div>
			</div>
		</>
	);
};

export default HomeSkeleton;
