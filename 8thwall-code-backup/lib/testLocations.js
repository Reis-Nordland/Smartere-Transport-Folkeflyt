const testLocations = [
  {
    _Id: '5cfa290b25a3a62e947d6140',
    id: '1',
    name: 'Bodø Airport',
    coordinates: { latitude: 67.272768, longitude: 14.367313 },
    adress: 'Olav V gate, 8004, Bodø',
    type: 'airport',
    openingHours: {
      monday: { opens: '0330', closes: '2400' },
      tuesday: { opens: '0330', closes: '2400' },
      wednesday: { opens: '0330', closes: '2400' },
      thursday: { opens: '0330', closes: '2400' },
      friday: { opens: '0330', closes: '2400' },
      saturday: { opens: '0430', closes: '1800' },
      sunday: { opens: '0800', closes: '2400' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'badweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 0.0,
    description: 'Bodø Airport',
    pictureName: null,
    pictureLink: null,
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5cfa2a2e25a3a62e947d6141',
    id: '2',
    name: 'Boat Terminal',
    coordinates: { latitude: 67.28371, longitude: 14.373764 },
    adress: 'Bodø-Landegode, 8006 Bodø',
    type: 'pier',
    openingHours: {
      monday: { opens: '0330', closes: '2400' },
      tuesday: { opens: '0330', closes: '2400' },
      wednesday: { opens: '0330', closes: '2400' },
      thursday: { opens: '0330', closes: '2400' },
      friday: { opens: '0330', closes: '2400' },
      saturday: { opens: '0430', closes: '1800' },
      sunday: { opens: '0800', closes: '2400' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'badweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 0.0,
    description: 'Pier for ferries',
    pictureName: 'boatTerminal.jpg',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5cff6b66adb0420828f09a0f',
    id: '3',
    name: 'Bodø bystrand',
    coordinates: { latitude: 67.277146, longitude: 14.363185 },
    adress: 'Prinsens gate 58, 8003 Bodø',
    type: 'beach',
    openingHours: {
      monday: { opens: '0700', closes: '2100' },
      tuesday: { opens: '0700', closes: '2100' },
      wednesday: { opens: '0700', closes: '2100' },
      thursday: { opens: '0700', closes: '2100' },
      friday: { opens: '0700', closes: '2100' },
      saturday: { opens: '0700', closes: '2100' },
      sunday: { opens: '0700', closes: '2100' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 60.0,
    description:
      'Bodø City Beach, located close to the airport. Enjoy the nice view with good sun conditions. There is a playground for the kids and also a place where families can barbeque',
    pictureName: 'bystrand.jpg',
    pictureLink: 'turbading.com',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5d0c771988a3ed03a50ac0a7',
    id: '4',
    name: 'Bodø small harbour',
    coordinates: { latitude: 67.280784, longitude: 14.371899 },
    adress: 'Moloveien 8003 Bodø',
    type: 'port',
    openingHours: {
      monday: { opens: '0800', closes: '2400' },
      tuesday: { opens: '0800', closes: '2400' },
      wednesday: { opens: '0800', closes: '2400' },
      thursday: { opens: '0800', closes: '2400' },
      friday: { opens: '0800', closes: '2400' },
      saturday: { opens: '0800', closes: '2400' },
      sunday: { opens: '0800', closes: '2400' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'neutralweather'],
    season: ['winter', 'spring', 'summer', 'fall'],
    duration: 30.0,
    description:
      'Your complete hub in the north! The harbour of Bodø has an extremely strategic location in Northern Norway in terms of cargo and passenger transport, fisheries resources, cruise traffic, promising oil and gas fields and general infrastructure. Enjoy a cosy stroll and experience the Bodø harbour.',
    pictureName: 'småbåthavn.jpg',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5d10bca9c376130a90905623',
    id: '5',
    name: 'Glasshuset',
    coordinates: { latitude: 67.284143, longitude: 14.379711 },
    adress: 'Storgata 5, 8006 Bodø',
    type: 'shopping_mall',
    openingHours: {
      monday: { opens: '1000', closes: '2400' },
      tuesday: { opens: '1000', closes: '2400' },
      wednesday: { opens: '1000', closes: '2400' },
      thursday: { opens: '1000', closes: '2400' },
      friday: { opens: '1000', closes: '2400' },
      saturday: { opens: '1000', closes: '2400' },
      sunday: { opens: '1500', closes: '2300' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'neutralweather', 'badweather'],
    season: ['winter', 'spring', 'summer', 'fall'],
    duration: 90.0,
    description:
      'Enjoy dinner, a cup of cofee, a beer or a glass of wine under the house of glass. With its 46 shops and eating places, on 5 floors, Koch can offer something for everyone.',
    pictureName: 'glasshus.jpg',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5d10bf4825a3a65bcc2a5f53',
    id: '6',
    name: 'Stormen Library',
    coordinates: { latitude: 67.28258, longitude: 14.374198 },
    adress: 'Storgata 1A, 8006 Bodø',
    type: 'library',
    openingHours: {
      monday: { opens: '0800', closes: '2100' },
      tuesday: { opens: '0800', closes: '2100' },
      wednesday: { opens: '0800', closes: '2100' },
      thursday: { opens: '0800', closes: '2100' },
      friday: { opens: '0800', closes: '1800' },
      saturday: { opens: '1100', closes: '1500' },
      sunday: { opens: '1200', closes: '1600' },
      closedOnHoliday: 'yes',
    },
    weather: ['goodweather', 'neutralweather', 'badweather'],
    season: ['winter', 'spring', 'summer', 'fall'],
    duration: 60.0,
    description:
      'By the water in the middle of Bodø city centre you can find Stormen Library. The library has won several awards, and was awarded 6th. most beautiful library in the world by Wired Magazine in 2016',
    pictureName: 'bibliotek.jpg',
    pictureLink: 'stormen.no',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5d11f91f25a3ac46143504b5',
    id: '7',
    name: 'Nordlandsmuseet',
    coordinates: { latitude: 67.281833, longitude: 14.382123 },
    adress: 'Prinsens gate 116, 8005 Bodø',
    type: 'museum',
    openingHours: {
      monday: { opens: '1100', closes: '1700' },
      tuesday: { opens: '1100', closes: '1700' },
      wednesday: { opens: '1100', closes: '1700' },
      thursday: { opens: '1100', closes: '1700' },
      friday: { opens: '1100', closes: '1700' },
      saturday: { opens: '1100', closes: '1700' },
      sunday: { opens: '1100', closes: '1700' },
      closedOnHoliday: 'yes',
    },
    weather: ['neutralweather', 'badweather'],
    season: ['winter', 'spring', 'summer', 'fall'],
    duration: 60.0,
    description:
      'Bodø city museum, dating from 1903, is among the oldest surviving buildings in the centre of Bodø. Come in and see the exhibition entitled “Our City”, which provides an insight into the history of the city from 1816 and up until today. The museum is also home to a 1,000 year old silver treasure and exhibitions on Sámi culture in the Salten region. The dry aquarium in the basement is listed, and is an old interactive exhibition. The museum also houses a small souvenir shop, a basic café and a play corner for the children.',
    pictureName: 'Nordlandsmuseet.jpg',
    pictureLink: 'nordlandsmuseet.no',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5d1373f3c3761a7168f89f0b',
    id: '8',
    name: 'Bodø City Centre - Rådhuset',
    coordinates: { latitude: 67.282707, longitude: 14.382965 },
    adress: 'Rådhusparken, Torvgata, 8006 Bodø',
    type: 'bus_stop',
    openingHours: {
      monday: { opens: '0000', closes: '2359' },
      tuesday: { opens: '0000', closes: '2359' },
      wednesday: { opens: '0000', closes: '2359' },
      thursday: { opens: '0000', closes: '2359' },
      friday: { opens: '0000', closes: '2359' },
      saturday: { opens: '0000', closes: '2359' },
      sunday: { opens: '1200', closes: '2359' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'neutralweather', 'badweather'],
    season: ['winter', 'spring', 'summer', 'fall'],
    duration: 0.0,
    description: 'Rådhuset bus stop is located in Bodø City Centre',
    pictureName: 'rådhus.jpg',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5d138665c3761a7168f89f0d',
    id: '9',
    name: 'Bodø Port',
    coordinates: { latitude: 67.288314, longitude: 14.394489 },
    adress: 'Bodø Port',
    type: 'pier',
    openingHours: {
      monday: { opens: '0000', closes: '2400' },
      tuesday: { opens: '0000', closes: '2400' },
      wednesday: { opens: '0000', closes: '2400' },
      thursday: { opens: '0000', closes: '2400' },
      friday: { opens: '0000', closes: '2400' },
      saturday: { opens: '0000', closes: '2400' },
      sunday: { opens: '0000', closes: '2400' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'badweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 0.0,
    description: 'Bodø Port, Hurtigruten and Moskenesferja departs from here',
    pictureName: 'bodøPort.jpg',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5d15cd4ac376137014e28d7b',
    id: '10',
    name: 'Bodø Domkirke',
    coordinates: { latitude: 67.282314, longitude: 14.380989 },
    adress: 'Torvgata 12, 8006 Bodø',
    type: 'church',
    openingHours: {
      monday: { opens: '0900', closes: '1430' },
      tuesday: { opens: '0900', closes: '1430' },
      wednesday: { opens: '0900', closes: '1430' },
      thursday: { opens: '0900', closes: '1430' },
      friday: { opens: '0900', closes: '1430' },
      saturday: { opens: '1100', closes: '1500' },
      sunday: { opens: '1100', closes: '1500' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'badweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 20.0,
    description:
      'Bodø cathedral was built after the bombing during 2nd. World War and was finished in 1956. It is a long church basilica and regarded as an eyecatcher in the cityscape. ',
    pictureName: 'domkirke.jpg',
    pictureLink: 'kirken.no',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5d16020225a3a65360c51be6',
    id: '11',
    name: 'Bodø Torg, City bike stand',
    coordinates: { latitude: 67.284314, longitude: 14.381681 },
    adress: 'Sjøgata 16A, 8006 Bodø',
    type: 'bike_stand',
    openingHours: {
      monday: { opens: '0000', closes: '2400' },
      tuesday: { opens: '0000', closes: '2400' },
      wednesday: { opens: '0000', closes: '2400' },
      thursday: { opens: '0000', closes: '2400' },
      friday: { opens: '0000', closes: '2400' },
      saturday: { opens: '0000', closes: '2400' },
      sunday: { opens: '0000', closes: '2400' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'badweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 0.0,
    description:
      'If you rent a city bike, you can ride it to Bodø Torg bike stand. ',
    pictureName: 'bike.jpg',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5f805ccf324ab51d44fc0c4f',
    id: '12',
    name: 'Moloen',
    coordinates: { latitude: 67.283692, longitude: 14.364358 },
    adress: 'Moloveien 10, 8003 Bodø',
    type: 'pier',
    openingHours: {
      monday: { opens: '0000', closes: '2400' },
      tuesday: { opens: '0000', closes: '2400' },
      wednesday: { opens: '0000', closes: '2400' },
      thursday: { opens: '0000', closes: '2400' },
      friday: { opens: '0000', closes: '2400' },
      saturday: { opens: '0000', closes: '2400' },
      sunday: { opens: '0000', closes: '2400' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'badweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 0.0,
    description: '',
    pictureName: '',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5f805ec7138c630c9477f696',
    id: '14',
    name: 'Dama Di',
    coordinates: { latitude: 67.28481, longitude: 14.382597 },
    adress: 'Sjøgata 18, 8006 Bodø',
    type: 'bar',
    openingHours: {
      monday: { opens: '2000', closes: '0300' },
      tuesday: { opens: '2000', closes: '0300' },
      wednesday: { opens: '2000', closes: '0300' },
      thursday: { opens: '2000', closes: '0300' },
      friday: { opens: '2000', closes: '0300' },
      saturday: { opens: '2000', closes: '0300' },
      sunday: { opens: '2000', closes: '0300' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'badweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 20.0,
    description: 'Local bar',
    pictureName: '',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '5f80609e434cbe02c8da88fe',
    id: '13',
    name: 'Norsk Luftfartsmuseum',
    coordinates: { latitude: 67.27576, longitude: 14.411171 },
    adress: 'Olav V gate, 8004 Bodø',
    type: 'museum',
    openingHours: {
      monday: { opens: '1000', closes: '1600' },
      tuesday: { opens: '1000', closes: '1600' },
      wednesday: { opens: '1000', closes: '1600' },
      thursday: { opens: '1000', closes: '1600' },
      friday: { opens: '1000', closes: '1600' },
      saturday: { opens: '1000', closes: '1700' },
      sunday: { opens: '1000', closes: '1700' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'badweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 20.0,
    description: '',
    pictureName: '',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '6050706eb928b339e450e494',
    id: '15',
    name: 'Larsen Mat & Vinbar',
    coordinates: { latitude: 67.28265727188159, longitude: 14.375552773173153 },
    adress: 'Storgata 4A, 8006 Bodø',
    type: 'restaurant',
    openingHours: {
      monday: { opens: '1500', closes: '2300' },
      tuesday: { opens: '1500', closes: '2300' },
      wednesday: { opens: '1500', closes: '2300' },
      thursday: { opens: '1500', closes: '2300' },
      friday: { opens: '1500', closes: '0000' },
      saturday: { opens: '1300', closes: '0000' },
      sunday: { opens: '1500', closes: '2300' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'badweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 60.0,
    description:
      'The Spanish-inspired menu consists of tasty snacks that are suitable for all occasions. We also have an exciting wine list with a large selection and many types on flask. The restaurant is located at street level, centrally located with Stormen concert hall as the nearest neighbor. Here there are no white tablecloths on the tables, and you can sit at the bar while eating. If you are going out with colleagues, friends or your loved one, Larsen is the natural choice. Contact us to reserve for larger groups and occasions, or come directly to the restaurant whenever you wish. With us you get good food, informal atmosphere and vibrant atmosphere!',
    pictureName: '',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '605071f3b928b339e450e495',
    id: '16',
    name: 'Bjørk',
    coordinates: { latitude: 67.28356016128248, longitude: 14.378880582242473 },
    adress: 'Storgata 8, 8006 Bodø',
    type: 'restaurant',
    openingHours: {
      monday: { opens: '1100', closes: '2100' },
      tuesday: { opens: '1100', closes: '2100' },
      wednesday: { opens: '1100', closes: '2100' },
      thursday: { opens: '1100', closes: '2100' },
      friday: { opens: '1100', closes: '2100' },
      saturday: { opens: '1100', closes: '2100' },
      sunday: { opens: '1500', closes: '2100' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'badweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 60.0,
    description:
      'Bjørk is an Italian-inspired restaurant, centrally located in Glasshuset in Bodø. Here you can follow the pizza chefs in action from morning to evening, and we can offer a varied menu consisting of stone oven baked pizza, homemade pasta, barbecue dishes from our Josper charcoal grill, fresh salads and sweet desserts. The dishes are carefully composed, and largely consist of good local ingredients. The restaurant has several sections with outdoor seating, bar, function rooms and meeting facilities. Here you can enjoy a warm and informal atmosphere that is just as suitable for everyday life as for the slightly larger occasions.',
    pictureName: '',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '605073f6b928b339e450e496',
    id: '17',
    name: 'Lyst På',
    coordinates: { latitude: 67.28472383086051, longitude: 14.382128450608517 },
    adress: 'Storgata 7A, 8006 Bodø',
    type: 'restaurant',
    openingHours: {
      monday: { opens: '1100', closes: '2300' },
      tuesday: { opens: '1100', closes: '2300' },
      wednesday: { opens: '1100', closes: '2300' },
      thursday: { opens: '1100', closes: '0030' },
      friday: { opens: '1100', closes: '0030' },
      saturday: { opens: '1100', closes: '2100' },
      sunday: null,
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'badweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 60.0,
    description:
      "Lystpå has become a place to gather for both large and small groups for lunch and dinner. If you are going to eat a quick dinner after work, or go out to really enjoy yourself, pamper yourself with good food and drink, then Lystpå is a good fit. For exactly what you want. Our waiters and chefs aim to give everyone an experience with us that they will remember from the moment they enter the door until they leave. We have a widespread wine list and one of the largest selections of wine by the glass in Norway. In addition, we offer good local and imported beers as well as an exciting drink menu. In the summer, we open up one of Bodø's largest outdoor cafes where you can enjoy a good lunch, dinner or midnight sun in just enough shelter for the Bodø wind. In the evening on Fridays and Saturdays, the people of Bodø are extra happy to sit a little longer throughout the evening. With DJs playing delicious songs, most people can find their favorite place in the venue and experience a good atmosphere with new and old friends, while panoramic windows towards Sjøgata and the square allow you to follow life outside.",
    pictureName: '',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
  {
    _Id: '6050787ab928b339e450e497',
    id: '18',
    name: 'Delicatessen Tapasrestaurant',
    coordinates: { latitude: 67.28563077793885, longitude: 14.385259857278257 },
    adress: 'Sjøgata 33b, 8006 Bodø',
    type: 'restaurant',
    openingHours: {
      monday: { opens: '1100', closes: '2000' },
      tuesday: { opens: '1100', closes: '2000' },
      wednesday: { opens: '1100', closes: '2000' },
      thursday: { opens: '1100', closes: '2000' },
      friday: { opens: '1100', closes: '2000' },
      saturday: { opens: '1200', closes: '2000' },
      sunday: { opens: '1500', closes: '2000' },
      closedOnHoliday: 'no',
    },
    weather: ['goodweather', 'badweather', 'neutralweather'],
    season: ['summer', 'winter', 'spring', 'fall'],
    duration: 60.0,
    description:
      'A place to go to spend quality time with family, friends and colleagues, or just to enjoy a glass of wine and new flavors at the bar. A place for all occasions where the friendly atmosphere is in focus - intimate and social, yet professional.',
    pictureName: '',
    pictureLink: '',
    weatherSymbol: 0,
    transportType: null,
    estimatedTransportTime: 0.0,
    startTime: null,
    tags: null,
  },
]

export default testLocations