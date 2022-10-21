
import { createContext, useEffect, useState } from "react";

import { getHomesData } from "../firebase";


export const HomeContext = createContext(null);

export const HomeContextProvider = ({ children }) => {

	const [homes, setHomes] = useState([]);
	const [isLoading, setIsLoading]= useState(true)

	useEffect(() => {
		const getHomes = async () => {
			const homes = await getHomesData()

			if (homes) {
				setTimeout(() => {
					setHomes(homes);
					setIsLoading(!isLoading)
				},1000)
				
			}
		};

		getHomes();
	}, []);

	

	return <HomeContext.Provider value={{homes, isLoading}}>{children}</HomeContext.Provider>;
};
