declare var React: any
declare var MaterialUI: any
const {
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
  Slide,
  Switch,
  SvgIcon,
  CardMedia,
  CardHeader,
  CardActionArea,
} = MaterialUI

const style = {
  button: {
    background: '#0D8380',
    color: 'white',
    borderRadius: '30px',
    fontWeight: 'bold',
    fontSize: '1.2em',
    boxShadow: 'none',
    padding: '10px 40px 8px 40px',
  },
  cardContainer: {
    minWidth: '275',
    position: 'fixed' as 'fixed',
    top: 0,
    zIndex: 1001,
    height: '70vh',
    width: '100vw',
    boxShadow: 'none',
    backgroundColor: 'rgba(255,255,255,0.0)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoCard: {
    fontSize: '1.5rem',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: '29px',
    marginBottom: '10px',
    maxWidth: '90vw',
  },
  innerContainer: {
    margin: '30px',
    maxWidth: '90vw',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  content: {
    backgroundColor: '#193E47',
    color: '#ffffff',
    borderRadius: '29px',
  },
  closeButton: {
    position: 'absolute' as 'absolute',
    right: 0,
    top: 0,
  },
  image: {
    maxWidth: '90vw',
    width: '95%',
  },
}

const ArInstructionsDialog = ({ show }) => {
  return (
    <React.Fragment>
      <Slide direction='up' in={show} mountOnEnter unmountOnExit>
        <div style={style.cardContainer}>
          <div style={style.innerContainer}>
            <Card style={style.infoCard}>
              <CardActionArea>
                <CardMedia
                  style={{ width: '100%', marginTop: '-5px' }}
                  src={require('../../assets/headerlogo.png')}
                />
                <CardContent style={style.content}>
                  <p style={{ textAlign: 'center' }}>
                    Pek på QR koden med mobilkameraet for å få opp
                    AR-opplevelsen
                  </p>
                </CardContent>
              </CardActionArea>
            </Card>
            <img style={style.image} src={require('../../assets/aimer.png')} />
          </div>
        </div>
      </Slide>
    </React.Fragment>
  )
}

export { ArInstructionsDialog }
