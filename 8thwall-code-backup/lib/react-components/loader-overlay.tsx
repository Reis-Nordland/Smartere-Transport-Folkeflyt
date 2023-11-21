declare var React: any
declare var MaterialUI: any

const { CircularProgress } = MaterialUI

const LoaderOverlay = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        zIndex: 1001,
        position: 'fixed',
        bottom: '0',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <CircularProgress color='grey' thickness='6' size='3rem' />
    </div>
  )
}

export { LoaderOverlay }
