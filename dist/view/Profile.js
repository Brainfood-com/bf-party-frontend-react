import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime-corejs3/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime-corejs3/helpers/getPrototypeOf";
import _inherits from "@babel/runtime-corejs3/helpers/inherits";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Form as FormikForm } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import { withEFormik, EFormikTextField, EFormikButton } from 'eformik';
import { PersonShape } from '../model/PersonModel';
export var Profile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, _getPrototypeOf(Profile).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          person = _this$props.party,
          validationSchema = _this$props.validationSchema;
      var firstName = person.firstName,
          lastName = person.lastName;
      console.log('Profile:render', this.props);
      return React.createElement(FormikForm, null, React.createElement(FormControl, null, React.createElement(EFormikTextField, {
        label: "First Name",
        name: "firstName"
      })), React.createElement(FormControl, null, React.createElement(EFormikTextField, {
        label: "Last Name",
        name: "lastName"
      })), React.createElement(EFormikButton, {
        type: "reset"
      }, "Reset"), React.createElement(EFormikButton, {
        type: "submit"
      }, "Submit"));
    }
  }]);

  return Profile;
}(React.Component);

_defineProperty(Profile, "propTypes", {
  party: PersonShape.isRequired,
  onChange: PropTypes.func
});

_defineProperty(Profile, "defaultProps", {
  onChange: function onChange(person, newValues) {}
});

export var ValidatingProfile = withEFormik({
  enableReinitialize: true,
  onSubmit: function onSubmit(values, formik) {
    console.log('submit', values, formik);
  },
  mapPropsToValues: function mapPropsToValues(props) {
    var person = props.party;
    var firstName = person.firstName,
        lastName = person.lastName;
    return {
      firstName: firstName,
      lastName: lastName
    };
  },
  validateOnInitial: true,
  validateOnReset: true,
  validateOnBlur: true,
  validateOnChange: true,
  validationSchema: Yup.object().shape({
    firstName: Yup.string().min(20),
    lastName: Yup.string()
  })
})(Profile);
//# sourceMappingURL=Profile.js.map