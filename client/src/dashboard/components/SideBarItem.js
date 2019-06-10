// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon, SemanticICONS } from 'semantic-ui-react'

type Props = {
  to: string,
  icon: SemanticICONS,
  text: string
}

const url = '/dashboard'

export default (props: Props) => {
  const { to, icon, text } = props

  return (
    <NavLink className='drawer-link' activeClassName='chosen' exact to={url + to}>
      <div className='drawer-list-item'>
        <div className='item-icon'>
          <Icon
            fitted
            name={icon}
          />
        </div>
        <div className='item-text'>
          <span>{text}</span>
        </div>
      </div>
    </NavLink>
  )
}
