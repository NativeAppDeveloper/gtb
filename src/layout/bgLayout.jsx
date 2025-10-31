import React from 'react'

function BgLayout({ children }) {
  return (
    <div className="h-[100dvh] w-screen bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/splash.png)' }}>
{children}
</div>
  )
}

export default BgLayout