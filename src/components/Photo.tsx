import React from 'react'

type PhotoProps = {
  photo: {
    title: string
  }
}

export const Photo = ({photo}: PhotoProps) => {
  return (
    <>
        <li>
            {photo.title}
        </li>
    </>
  )
}
