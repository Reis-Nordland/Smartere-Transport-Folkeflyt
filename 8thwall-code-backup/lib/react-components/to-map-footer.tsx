import { appBase } from '../routes'
declare var React: any
declare var ReactRouterDOM: any
declare var MaterialUI: any

const { Button, SvgIcon, Typography } = MaterialUI
const { Link } = ReactRouterDOM
const { useState } = React

const closeOpenIcon = (collapsed) => (
  <SvgIcon fontSize='inherit'>
    {collapsed ? (
      <path
        fill='currentColor'
        d='M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z'
      />
    ) : (
      <path
        fill='white'
        d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z'
      />
    )}
  </SvgIcon>
)

const content = () => (
  <React.Fragment>
    <Typography variant='h5' color='white'>
      Se flere aktiviteter i Bodø
    </Typography>
    <Link
      to={appBase() + '/map2'}
      style={{
        textDecoration: 'none',
      }}
    >
      <Button
        style={{
          background: '#0D8380',
          color: 'white',
          borderRadius: '30px',
          fontWeight: 'bold',
          fontSize: '1.2em',
          boxShadow: 'none',
          padding: '10px 40px 8px 40px',
        }}
      >
        Åpne opplevelseskart
      </Button>
    </Link>
  </React.Fragment>
)
const toMapButton = () => {
  // setTimeout(() => (window as any)._paq.push(["enableLinkTracking"], 40));
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 77, 64, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed' as 'fixed',
        bottom: '0',
        width: '100vw',
        zIndex: 1000,
      }}
    >
      {!collapsed && content()}
      <Button
        style={{
          position: 'absolute' as 'absolute',
          right: '2px',
          top: '5px',
        }}
        onClick={() => setCollapsed(!collapsed)}
      >
        {closeOpenIcon(collapsed)}
      </Button>
    </div>
  )
}

export { toMapButton }
