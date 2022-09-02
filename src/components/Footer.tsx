import React from 'react'

import { ReactComponent as Ers } from '../svg/ers.svg'

interface IProps {
  address?: string
}

export default function Footer({ address }: IProps) {
  return (
    <footer className="footer">
      <Ers />
      <p>Verified by ERS</p>
      {address && <p className="address">{address}</p>}
    </footer>
  )
}
