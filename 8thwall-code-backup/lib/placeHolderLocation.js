const placeHolderCurrentLocation = {
	// "_id" : ObjectId("5cfa290b25a3a62e947d6140"),
	id: "1",
	name: "Bodø Airport",
	coordinates: {
		latitude: 67.272768,
		longitude: 14.367313,
	},
	adress: "Olav V gate, 8004, Bodø",
	type: "Airport",
	description: "Bodø Airport",
	openingHours: {
		monday: {
			opens: "0330",
			closes: "2400",
		},
		tuesday: {
			opens: "0330",
			closes: "2400",
		},
		wednesday: {
			opens: "0330",
			closes: "2400",
		},
		thursday: {
			opens: "0330",
			closes: "2400",
		},
		friday: {
			opens: "0330",
			closes: "2400",
		},
		saturday: {
			opens: "0430",
			closes: "1800",
		},
		sunday: {
			opens: "0800",
			closes: "2400",
		},
		closedOnHoliday: "no",
	},
	weather: ["goodweather", "badweather", "neutralweather"],
	season: ["summer", "winter", "spring", "fall"],
	duration: 0,
};

export default placeHolderCurrentLocation