// 1#  ========== BONUS =======================
// With nested cycle display this:
// *
// * *
// * * *
// * * * *
// * * * * *

const drawTriangle = (length = 5) => {
	for (let i = 1; i <= length; i++) {
		let row = "";
		for (let j = 1; j <= i; j++) {
			row += "* ";
		}
		console.log(row);
	}
};

// 2#  ========== BONUS =======================
// Write function which will (with cycles) display this (keep in mind that there is no space after the last char):
// * * * * * * * * * *
// * * * * * * * * * T
// * * * * * * * * P T
// * * * * * * * I P T
// * * * * * * R I P T
// * * * * * C R I P T
// * * * * S C R I P T
// * * * A S C R I P T
// * * V A S C R I P T
// * A V A S C R I P T
// J A V A S C R I P T

const displayPattern = (word = "JAVASCRIPT") => {
	const length = word.length;
	for (let i = 0; i < length + 1; i++) {
		let row = "";
		for (let j = 0; j < length; j++) {
			if (length - i > j) {
				row += `* `;
			} else {
				row += `${word[j]} `;
			}
		}
		console.log(row.substring(0, row.length - 1));
	}
};

// 3#  ========== BONUS =======================
// Create function that takes array of vehicles with measured top speeds. Return array of vehicle with top speed.
// Example:
// const vehicles = [
//   { name: "Executor Star Dreadnought", measuredSpeeds: [555, 545, 577, 600] },
//   { name: "T-47 Airspeeder", measuredSpeeds: [300, 311, 299, 350] },
//   { name: "AT-AT", measuredSpeeds: [20, 21, 20, 19] },
// ];
// getVehiclesAndTopSpeed(vehicles) ➞ will return ➞ [
//     { name: "Executor Star Dreadnought", topSpeed: 600},
//     { name: "T-47 Airspeeder", topSpeed: 350 },
//     { name: "AT-AT", topSpeed: 21 },
//   ];

const getVehiclesAndTopSpeed = (vehicles) => {
	return vehicles.map((vehicle) => {
		const topSpeed = Math.max(...vehicle.measuredSpeeds);
		return { name: vehicle.name, topSpeed };
	});
};
