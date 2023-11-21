declare var React: any
declare var XRExtras: any

const PwaInstallPrompt = () => {
  React.useEffect(() => {
    XRExtras.PwaInstaller.setDisplayAllowed(true)
    return () => {
      XRExtras.PwaInstaller.setDisplayAllowed(false)
    }
  }, [])
  
  // Install prompt displayed by XRExtras.
  return null
}

export {
  PwaInstallPrompt
}