import PropTypes from 'prop-types'
import React from 'react'
import PersonIconMUI from '@material-ui/icons/Person'
import Typography from '@material-ui/core/Typography'

import {PartyName, PartyIcon} from './PartyModel'

export const PersonShape = PropTypes.shape({
  partyId: PropTypes.string.isRequired,
  partyTypeEnumId: PropTypes.oneOf(['Person']),
  profilePic: PropTypes.string,
  displayName: PropTypes.string,
  familyName: PropTypes.string,
  givenName: PropTypes.string,
})

export const PersonIcon = PartyIcon.register(class PersonIcon extends React.Component {
  static partyTypeEnumId = 'Person'
  static propTypes = {
    party: PersonShape.isRequired,
  }
  render() {
    const {party} = this.props
    const {profilePic} = party
    if (profilePic) {
      return <img src={profilePic}/>
    } else {
      return <PersonIconMUI/>
    }
  }
})

export const PersonName = PartyName.register(class PersonName extends React.Component {
  static partyTypeEnumId = 'Person'
  static propTypes = {
    party: PersonShape.isRequired,
  }
  render() {
    const {party} = this.props
    return <Typography>{party.displayName}</Typography>
  }
})
