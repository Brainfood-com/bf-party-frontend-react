import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js/instance/for-each";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import PropTypes from 'prop-types';
import React from 'react';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Avatar from '@material-ui/core/Avatar';
export var RoleShape = PropTypes.shape({
  roleTypeId: PropTypes.string.isRequired,
  description: PropTypes.string
});
export var PartyShape = PropTypes.shape({
  partyId: PropTypes.string.isRequired,
  partyTypeEnumId: PropTypes.string.isRequired
}); //const ResolvedPartiesShape = PropTypes.objectOf(PartyShape)
//const ResolvedRolesShape = PropTypes.objectOf(RoleShape)

export var TypedPartyComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TypedPartyComponent, _React$Component);

  function TypedPartyComponent() {
    _classCallCheck(this, TypedPartyComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TypedPartyComponent).apply(this, arguments));
  }

  _createClass(TypedPartyComponent, [{
    key: "renderDefault",
    value: function renderDefault() {
      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var party = this.props.party;

      if (!party) {
        return null;
      }

      var partyTypeEnumId = party.partyTypeEnumId;
      var SubClass = this.constructor.itemTypeMap[partyTypeEnumId];

      if (SubClass) {
        return React.createElement(SubClass, {
          party: party
        });
      } else {
        return renderDefault();
      }
    }
  }], [{
    key: "register",
    value: function register(clz) {
      // this is a static class instance
      var itemTypeMap = this.itemTypeMap || (this.itemTypeMap = {});
      itemTypeMap[clz.partyTypeEnumId] = clz;
      return clz;
    }
  }]);

  return TypedPartyComponent;
}(React.Component);

_defineProperty(TypedPartyComponent, "propTypes", {
  party: PartyShape.isRequired
});

export var PartyIcon =
/*#__PURE__*/
function (_TypedPartyComponent) {
  _inherits(PartyIcon, _TypedPartyComponent);

  function PartyIcon() {
    _classCallCheck(this, PartyIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(PartyIcon).apply(this, arguments));
  }

  _createClass(PartyIcon, [{
    key: "renderDefault",
    value: function renderDefault() {
      return React.createElement(HelpOutlineIcon, null);
    }
  }]);

  return PartyIcon;
}(TypedPartyComponent);
export var PartyAvatar =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(PartyAvatar, _React$Component2);

  function PartyAvatar() {
    _classCallCheck(this, PartyAvatar);

    return _possibleConstructorReturn(this, _getPrototypeOf(PartyAvatar).apply(this, arguments));
  }

  _createClass(PartyAvatar, [{
    key: "render",
    value: function render() {
      var party = this.props.party;
      return React.createElement(Avatar, null, React.createElement(PartyIcon, {
        party: party
      }));
    }
  }]);

  return PartyAvatar;
}(React.Component);

_defineProperty(PartyAvatar, "propTypes", {
  party: PartyShape.isRequired
});

export var PartyName =
/*#__PURE__*/
function (_TypedPartyComponent2) {
  _inherits(PartyName, _TypedPartyComponent2);

  function PartyName() {
    _classCallCheck(this, PartyName);

    return _possibleConstructorReturn(this, _getPrototypeOf(PartyName).apply(this, arguments));
  }

  _createClass(PartyName, [{
    key: "renderDefault",
    value: function renderDefault() {
      return null;
    }
  }]);

  return PartyName;
}(TypedPartyComponent);
export function reduceResolvedParties() {
  var parties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var object = arguments.length > 1 ? arguments[1] : undefined;

  if (object && object._parties) {
    var _context;

    _forEachInstanceProperty(_context = object._parties).call(_context, function (party) {
      return parties[party.partyId] = party;
    });
  }

  return parties;
}
//# sourceMappingURL=PartyModel.js.map