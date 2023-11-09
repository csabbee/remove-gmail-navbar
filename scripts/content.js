setTimeout(() => {
  const navbar = document.querySelector('[role="navigation"]')
  if (!navbar) {
    console.log('not found')
    return
  }

  navbar.remove()
}, 1500)
