function getCoordinates() {
  return new Promise(((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  }))
}

const getCurrentLocation = async () => {
  if (!navigator.geolocation) {
    return null
  }
  try {
    const position = await getCoordinates()
    const lat = (position as any).coords.latitude
    const long = (position as any).coords.longitude
    return {latitude: lat, longitude: long}
  } catch (error) {
    return null
  }
}

export {getCurrentLocation}