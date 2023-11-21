export interface Poi {
  _Id: string
  id: string
  name: string
  coordinates: Coordinates
  adress: string
  type: PoiType
  openingHours: OpeningHours
  weather: string[]
  season: string[]
  duration: number
  description: string
  pictureName: null
  pictureLink: null
  weatherSymbol: number
  transportType: null
  estimatedTransportTime: number
  startTime: null
  tags: null
}

export interface Coordinates {
  latitude: number
  longitude: number
}

export interface OpeningHours {
  monday: Day
  tuesday: Day
  wednesday: Day
  thursday: Day
  friday: Day
  saturday: Day
  sunday: Day
  closedOnHoliday: string
}

export interface Day {
  opens: string
  closes: string
}

export enum PoiType {
  ACTIVITIES = 'aktiviteter',
  AIRPORT = 'airport',
  BIKE_STAND = 'bike_stand',
  BUS_STOP = 'bus_stop',
  CULTURE = 'kultur',
  FOOD = 'mat',
  LOCAL_PRODUCTS = 'lokale_produkter',
  NATURE = 'natur',
  PORT = 'port',
  SHOPPING_MALL = 'shopping_mall',
}
