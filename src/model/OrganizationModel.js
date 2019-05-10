import PropTypes from 'prop-types'
import React from 'react'
import GroupIcon from '@material-ui/icons/Group'
import Typography from '@material-ui/core/Typography'

import {PartyIcon, PartyName} from './PartyModel'

// -- Organization
export const OrganizationShape = PropTypes.shape({
  partyId: PropTypes.string.isRequired,
  partyTypeEnumId: PropTypes.oneOf(['Organization']),
  organizationName: PropTypes.string,
})

export const OrganizationIcon = PartyIcon.register(class OrganizationIcon extends React.Component {
  static partyTypeEnumId = 'Organization'
  static propTypes = {
    party: OrganizationShape.isRequired,
  }
  render() {
    return <GroupIcon/>
  }
})

export const OrganizationName = PartyName.register(class OrganizationName extends React.Component {
  static partyTypeEnumId = 'Organization'
  static propTypes = {
    party: OrganizationShape.isRequired,
  }
  render() {
    const {party} = this.props
    return <Typography>{party.organizationName}</Typography>
  }
})
