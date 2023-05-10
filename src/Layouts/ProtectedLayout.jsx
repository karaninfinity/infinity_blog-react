import React from 'react'

export default function ProtectedLayout(props) {
  return (
    <div>
      { sessionStorage.getItem('user') && props.children }
    </div>
  )
}
