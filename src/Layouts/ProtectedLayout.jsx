import React from 'react'
import Notfound from '../Components/Notfound/Notfound'

export default function ProtectedLayout(props) {
  return (
    <div>
      {sessionStorage.getItem('user') ? props.children : <Notfound />}
    </div>
  )
}
