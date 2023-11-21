declare var React: any
declare var MaterialUI: any

const { Button, Slide } = MaterialUI

const { useState } = React

const CookieBanner = () => {
  const [show, setShow] = useState(true)
  const closeBanner = () => {
    localStorage.setItem('hasViewedCookieBanner', 'true')
    setShow(false)
  }
  return (
    <Slide direction='up' in={show} mountOnEnter unmountOnExit>
      <div
        style={{
          background: 'grey',
          height: '3rem',
          width: '100vw',
          zIndex: 1001,
          position: 'fixed',
          bottom: '0',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <p style={{ marginLeft: '10px' }}>
          Denne siden bruker cookies for å samle inn bruksinformasjon.
        </p>
        <Button
          variant='outlined'
          onClick={closeBanner}
          style={{ background: '#0D8380', marginRight: '10px' }}
        >
          Ok
        </Button>
      </div>
    </Slide>
  )
}

export { CookieBanner }
