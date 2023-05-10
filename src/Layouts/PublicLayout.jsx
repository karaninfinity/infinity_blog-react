import React from 'react'

export default function PublicLayout(props) {
  return (
    <div>
          { console.log(sessionStorage.user) }
          { props.children }
    </div>
  )
}
