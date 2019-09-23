import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

var _class, _temp, _class2, _temp2;

import PropTypes from 'prop-types';
import React from 'react';
import PersonIconMUI from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import { PartyName, PartyIcon } from './PartyModel';
export var PersonShape = PropTypes.shape({
  partyId: PropTypes.string.isRequired,
  partyTypeEnumId: PropTypes.oneOf(['Person']),
  profilePic: PropTypes.string,
  displayName: PropTypes.string,
  familyName: PropTypes.string,
  givenName: PropTypes.string
});
export var PersonIcon = PartyIcon.register((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PersonIcon, _React$Component);

  function PersonIcon() {
    _classCallCheck(this, PersonIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(PersonIcon).apply(this, arguments));
  }

  _createClass(PersonIcon, [{
    key: "render",
    value: function render() {
      var party = this.props.party;
      var profilePic = party.profilePic;

      if (profilePic) {
        return React.createElement("img", {
          src: profilePic
        });
      } else {
        return React.createElement(PersonIconMUI, null);
      }
    }
  }]);

  return PersonIcon;
}(React.Component), _defineProperty(_class, "partyTypeEnumId", 'Person'), _defineProperty(_class, "propTypes", {
  party: PersonShape.isRequired
}), _temp));
export var PersonName = PartyName.register((_temp2 = _class2 =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(PersonName, _React$Component2);

  function PersonName() {
    _classCallCheck(this, PersonName);

    return _possibleConstructorReturn(this, _getPrototypeOf(PersonName).apply(this, arguments));
  }

  _createClass(PersonName, [{
    key: "render",
    value: function render() {
      var party = this.props.party;
      return React.createElement(Typography, null, party.displayName);
    }
  }]);

  return PersonName;
}(React.Component), _defineProperty(_class2, "partyTypeEnumId", 'Person'), _defineProperty(_class2, "propTypes", {
  party: PersonShape.isRequired
}), _temp2));
//# sourceMappingURL=PersonModel.js.map