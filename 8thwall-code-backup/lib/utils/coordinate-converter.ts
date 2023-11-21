// https://stackoverflow.com/questions/2103924/mercator-longitude-and-latitude-calculations-to-x-and-y-on-a-cropped-map-of-the?noredirect=1&lq=1
const mapWidth = 50
const mapHeight = 50
const mapLonLeft = 14.336881
const mapLonRight = 14.417664
const mapLonDelta = mapLonRight - mapLonLeft
const mapLatBottom = 67.269611
const mapLatBottomRadians = (mapLatBottom * Math.PI) / 180

function convertGeoToPixel(lat, lon) {
  const x = (lon - mapLonLeft) * (mapWidth / mapLonDelta)

  const latRad = lat * (Math.PI / 180)
  const worldMapWidth = ((mapWidth / mapLonDelta) * 360) / (2 * Math.PI)
  const mapOffsetY =
    (worldMapWidth / 2) *
    Math.log(
      (1 + Math.sin(mapLatBottomRadians)) / (1 - Math.sin(mapLatBottomRadians))
    )
  const y =
    mapHeight -
    ((worldMapWidth / 2) *
      Math.log((1 + Math.sin(latRad)) / (1 - Math.sin(latRad))) -
      mapOffsetY)
  return { x, y }
}

export { convertGeoToPixel }
