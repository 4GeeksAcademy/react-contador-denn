import React from "react";
 import { Digit } from "./Digit";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// import counter from "./Counter";


const Home = ({ count }) => {
	return (
		<div className="text-center">

			
			<div className="counter d-flex">
				<Digit digit={Math.floor(count/100000)%10} />
				<Digit digit={Math.floor(count/10000)%10} />
				<Digit digit={Math.floor(count/1000)%10} />
				<Digit digit={ Math.floor(count/100)%10} />
				<Digit digit={ Math.floor(count/10)%10} />
				<Digit digit={ Math.floor(count/1)%10 } />
			</div>

		</div>
	);
};

export default Home;
