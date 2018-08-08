// Code your solution in this file!
const returnFirstTwoDrivers = arr => {
	return arr.slice(0, 2)
}

const returnLastTwoDrivers = arr => {
	return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = int => {
	return fare => {
		return fare * int
	}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrOfDrivers, whichDriversFunc) => {
	return whichDriversFunc(arrOfDrivers)
}