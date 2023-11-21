import { Coordinates, Day } from '../types'
import { getTestTransportTime } from '../test-transport-times'
import { fetchTransportTimes, TransportMode } from '../api'

declare var React: any
declare var MaterialUI: any
const {
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Slide,
  SvgIcon,
} = MaterialUI
const { useEffect, useState } = React
interface Props {
  name: string
  description: string
  show: boolean
  onToggleDialog: any
  onClick: (coordinates: Coordinates) => void
  currentLocation: any
  coordinates: Coordinates
  openingHours: Day
}

const style = {
  outlinedText: {
    color: '#0D8380',
  },
  button: {
    background: '#0D8380',
    color: 'white',
    borderRadius: '30px',
    fontWeight: 'bold',
    fontSize: '1.2em',
    boxShadow: 'none',
    padding: '10px 40px 8px 40px',
  },
  card: {
    minWidth: '275',
    background: '#EDE9ED',
    position: 'fixed' as 'fixed',
    bottom: 0,
    borderRadius: '29px 29px 0px 0px',
    zIndex: 1001,
    height: '60vh',
    width: '100vw',
  },
  alignText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  closeButton: {
    position: 'absolute' as 'absolute',
    right: 0,
    top: 0,
  },
}
// TODO replace these icons with imports once a dev license is in place
const WalkingDirectionIcon = () => (
  <path
    fill='currentColor'
    d='M14.12,10H19V8.2H15.38L13.38,4.87C13.08,4.37 12.54,4.03 11.92,4.03C11.74,4.03 11.58,4.06 11.42,4.11L6,5.8V11H7.8V7.33L9.91,6.67L6,22H7.8L10.67,13.89L13,17V22H14.8V15.59L12.31,11.05L13.04,8.18M14,3.8C15,3.8 15.8,3 15.8,2C15.8,1 15,0.2 14,0.2C13,0.2 12.2,1 12.2,2C12.2,3 13,3.8 14,3.8Z'
  />
)
const DirectionsBusIcon = () => (
  <path d='M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z' />
)
const DirectionsBikeIcon = () => (
  <path
    fill='currentColor'
    d='M5,20.5A3.5,3.5 0 0,1 1.5,17A3.5,3.5 0 0,1 5,13.5A3.5,3.5 0 0,1 8.5,17A3.5,3.5 0 0,1 5,20.5M5,12A5,5 0 0,0 0,17A5,5 0 0,0 5,22A5,5 0 0,0 10,17A5,5 0 0,0 5,12M14.8,10H19V8.2H15.8L13.86,4.93C13.57,4.43 13,4.1 12.4,4.1C11.93,4.1 11.5,4.29 11.2,4.6L7.5,8.29C7.19,8.6 7,9 7,9.5C7,10.13 7.33,10.66 7.85,10.97L11.2,13V18H13V11.5L10.75,9.85L13.07,7.5M19,20.5A3.5,3.5 0 0,1 15.5,17A3.5,3.5 0 0,1 19,13.5A3.5,3.5 0 0,1 22.5,17A3.5,3.5 0 0,1 19,20.5M19,12A5,5 0 0,0 14,17A5,5 0 0,0 19,22A5,5 0 0,0 24,17A5,5 0 0,0 19,12M16,4.8C17,4.8 17.8,4 17.8,3C17.8,2 17,1.2 16,1.2C15,1.2 14.2,2 14.2,3C14.2,4 15,4.8 16,4.8Z'
  />
)
const CloseIcon = () => (
  <path
    fill='currentColor'
    d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
  />
)
const Popup = ({
  name,
  description,
  show,
  onToggleDialog,
  coordinates,
  currentLocation,
  openingHours,
  onClick
}: Props) => {
  const [data, setData] = useState({})
  const [currentTime, setCurrentTime] = useState(new Date())

  const handleChange = () => {
    onToggleDialog(!show)
  }
  const handleClick = (
    from = { latitude: 67.277782, longitude: 14.422454 }
  ) => {
    onClick(coordinates)
    // window.location.href = `https://www.google.com/maps/dir/Bodø/${coordinates.latitude},${coordinates.longitude}/@${from.latitude},${from.longitude}`
  }

  useEffect(() => {
    if (!coordinates || !coordinates.latitude) {
      return
    }
    setCurrentTime(new Date())
    const walkingTimeReq = fetchTransportTimes({
      endPos: coordinates,
      startPos: currentLocation,
      transportMode: TransportMode.WALK,
    })
    const bicycleTimeReq = fetchTransportTimes({
      endPos: coordinates,
      startPos: currentLocation,
      transportMode: TransportMode.BIKE,
    })
    const busTimeReq = fetchTransportTimes({
      endPos: coordinates,
      startPos: currentLocation,
      transportMode: TransportMode.BUS,
    })
    // const walkingTimeReq = getTestTransportTime('walk')
    // const bicycleTimeReq = getTestTransportTime('bike')
    // const busTimeReq = getTestTransportTime('publictransport')
    Promise.all([walkingTimeReq, bicycleTimeReq, busTimeReq]).then(
      ([walkingTimeRes, bikeTimeRes, busTimeRes]) => {
        setData({
          walkingTime: Math.floor(
            walkingTimeRes[0].duration / 60
          ),
          bikeTime: Math.floor(bikeTimeRes[0].duration / 60),
          busTime: Math.floor(busTimeRes[0].duration / 60),
        })
      }
    )
  }, [coordinates, currentLocation])
  return (
    <React.Fragment>
      <Slide direction='up' in={show} mountOnEnter unmountOnExit>
        <Card style={style.card}>
          <CardContent
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
            <Typography variant='h4' style={{ fontWeight: 'bold' }}>
              {name}
            </Typography>
            <IconButton
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
              }}
              onClick={handleChange}
            >
              <SvgIcon>{CloseIcon()}</SvgIcon>
            </IconButton>
            {/* </div> */}
            <div style={{ marginTop: 8 }}>
              <p style={style.outlinedText}>Åpningstider: </p>
              <span>
                {!!openingHours
                  ? `${openingHours.opens} - ${openingHours.closes}`
                  : '...'}
              </span>
            </div>
            <br></br>

            <div style={style.iconWrapper}>
              <div style={style.alignText}>
                <SvgIcon>{WalkingDirectionIcon()}</SvgIcon>
                <span style={style.outlinedText}>
                  {data.walkingTime || '...'} min
                </span>
              </div>
              <div style={style.alignText}>
                <SvgIcon>{DirectionsBusIcon()}</SvgIcon>

                <span style={style.outlinedText}>
                  {data.busTime || '...'} min
                </span>
              </div>
              <div style={style.alignText}>
                <SvgIcon>{DirectionsBikeIcon()}</SvgIcon>
                <span style={style.outlinedText}>
                  {data.bikeTime || '...'} min
                </span>
              </div>
            </div>
            <p>{description}</p>
            <Button
              variant='contained'
              style={style.button}
              onClick={handleClick}
            >
              Vis meg veien
            </Button>
          </CardContent>
        </Card>
      </Slide>
    </React.Fragment>
  )
}

export { Popup }
