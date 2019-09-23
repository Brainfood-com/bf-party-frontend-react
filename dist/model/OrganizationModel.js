import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

var _class, _temp, _class2, _temp2;

import PropTypes from 'prop-types';
import React from 'react';
import GroupIcon from '@material-ui/icons/Group';
import Typography from '@material-ui/core/Typography';
import { PartyIcon, PartyName } from './PartyModel'; // -- Organization

export var OrganizationShape = PropTypes.shape({
  partyId: PropTypes.string.isRequired,
  partyTypeEnumId: PropTypes.oneOf(['Organization']),
  organizationName: PropTypes.string
});
export var OrganizationIcon = PartyIcon.register((_temp = _class =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OrganizationIcon, _React$Component);

  function OrganizationIcon() {
    _classCallCheck(this, OrganizationIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrganizationIcon).apply(this, arguments));
  }

  _createClass(OrganizationIcon, [{
    key: "render",
    value: function render() {
      return React.createElement(GroupIcon, null);
    }
  }]);

  return OrganizationIcon;
}(React.Component), _defineProperty(_class, "partyTypeEnumId", 'Organization'), _defineProperty(_class, "propTypes", {
  party: OrganizationShape.isRequired
}), _temp));
export var OrganizationName = PartyName.register((_temp2 = _class2 =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(OrganizationName, _React$Component2);

  function OrganizationName() {
    _classCallCheck(this, OrganizationName);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrganizationName).apply(this, arguments));
  }

  _createClass(OrganizationName, [{
    key: "render",
    value: function render() {
      var party = this.props.party;
      return React.createElement(Typography, null, party.organizationName);
    }
  }]);

  return OrganizationName;
}(React.Component), _defineProperty(_class2, "partyTypeEnumId", 'Organization'), _defineProperty(_class2, "propTypes", {
  party: OrganizationShape.isRequired
}), _temp2));
//# sourceMappingURL=OrganizationModel.js.map