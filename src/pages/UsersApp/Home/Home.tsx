import { v4 } from "uuid"
import { useAppDispatch } from "store/hooks"
import { userSliceActions } from "store/redux/users/usersSlice"

import { useFormik } from "formik"

import Input from "components/Input/Input"
import Button from "components/Button/Button"

import { HomePageWrapper, UserForm, UserFormName } from "./styles"

function Home() {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      firstlastName: "",
      age: "",
      jobTitle: "",
    },
    onSubmit: values => {
      if (!!values.age && !!values.firstlastName && !!values.jobTitle) {
        dispatch(userSliceActions.addUser({ ...values, id: v4() }))
        // Тут нужно написать логику по созданию карточек
      }
    },
  })

  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>
        <Input
          id="first-last-name"
          name="firstlastName"
          placeholder="Enter fullname"
          value={formik.values.firstlastName}
          label="First/Last name"
          onChange={formik.handleChange}
        />
        <Input
          id="ageUsersInput"
          name="age"
          placeholder="Enter age"
          value={formik.values.age}
          label="Age"
          onChange={formik.handleChange}
        />
        <Input
          id="job-title"
          name="jobTitle"
          placeholder="Enter job"
          value={formik.values.jobTitle}
          label="Job title"
          onChange={formik.handleChange}
        />
        <Button name="Create" type="submit" />
      </UserForm>
    </HomePageWrapper>
  )
}

export default Home
