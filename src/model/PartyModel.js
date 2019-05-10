import PropTypes from 'prop-types'
import React from 'react'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import Avatar from '@material-ui/core/Avatar'

export const RoleShape = PropTypes.shape({
  roleTypeId: PropTypes.string.isRequired,
  description: PropTypes.string,
})
export const PartyShape = PropTypes.shape({
  partyId: PropTypes.string.isRequired,
  partyTypeEnumId: PropTypes.string.isRequired,
})
//const ResolvedPartiesShape = PropTypes.objectOf(PartyShape)
//const ResolvedRolesShape = PropTypes.objectOf(RoleShape)

export class TypedPartyComponent extends React.Component {
  static propTypes = {
    party: PartyShape.isRequired,
  }

  static register(clz) {
    // this is a static class instance
    const itemTypeMap = this.itemTypeMap || (this.itemTypeMap = {})
    itemTypeMap[clz.partyTypeEnumId] = clz
    return clz
  }

  renderDefault() {
    return null
  }

  render() {
    const {party} = this.props
    if (!party) {
      return null
    }
    const {partyTypeEnumId} = party
    const SubClass = this.constructor.itemTypeMap[partyTypeEnumId]
    if (SubClass) {
      return <SubClass party={party}/>
    } else {
      return renderDefault()
    }
  }
}

export class PartyIcon extends TypedPartyComponent {
  renderDefault() {
    return <HelpOutlineIcon/>
  }
}

export class PartyAvatar extends React.Component {
  static propTypes = {
    party: PartyShape.isRequired,
  }

  render() {
    const {party} = this.props
    return <Avatar><PartyIcon party={party}/></Avatar>
  }
}

export class PartyName extends TypedPartyComponent {
  renderDefault() {
    return null
  }
}

export function reduceResolvedParties(parties = {}, object) {
  if (object && object._parties) {
    object._parties.forEach(party => parties[party.partyId] = party)
  }
  return parties
}
