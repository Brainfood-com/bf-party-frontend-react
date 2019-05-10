import React from 'react'
import PropTypes from 'prop-types'

import * as Yup from 'yup'
import {Form as FormikForm} from 'formik'
import FormControl from '@material-ui/core/FormControl' 
import {withEFormik, EFormikTextField, EFormikButton} from 'eformik'

import {PersonShape} from '../model/PersonModel'

export class Profile extends React.Component {
  static propTypes = {
    party: PersonShape.isRequired,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    onChange(person, newValues) {},
  }

  render() {
    const {party: person, validationSchema} = this.props
    const {firstName, lastName} = person
    console.log('Profile:render', this.props)
    return <FormikForm>
      <FormControl><EFormikTextField label='First Name' name='firstName'/></FormControl>
      <FormControl><EFormikTextField label='Last Name' name='lastName'/></FormControl>
      <EFormikButton type='reset'>Reset</EFormikButton>
      <EFormikButton type='submit'>Submit</EFormikButton>
    </FormikForm>
  }
}

export const ValidatingProfile = withEFormik({
  enableReinitialize: true,
  onSubmit(values, formik) {
    console.log('submit', values, formik)
  },
  mapPropsToValues(props) {
    const {party: person} = props
    const {firstName, lastName} = person
    return {firstName, lastName}
  },
  validateOnInitial: true,
  validateOnReset: true,
  validateOnBlur: true,
  validateOnChange: true,
  validationSchema: Yup.object().shape({
    firstName: Yup.string().min(20),
    lastName: Yup.string(),
  }),
})(Profile)
