import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  userSliceSelectors,
  userSliceActions,
} from "store/redux/users/usersSlice"
import { UsersPageWrapper, UserCard, Paragraph } from "./styles"
import Button from "components/Button/Button"

function Users() {
  const dispatch = useAppDispatch()
  const users = useAppSelector(userSliceSelectors.users)
  const resetResults = () => {
    dispatch(userSliceActions.resetResults())
  }
  const deleteUser = (userId: string) => {
    dispatch(userSliceActions.deleteUser(userId))
  }
  return (
    <UsersPageWrapper>
      {users.map(user => (
        <UserCard key={user.id}>
          <Paragraph>First/Last name: {user.firstlastName}</Paragraph>
          <Paragraph>Age: {user.age}</Paragraph>
          <Paragraph>Job title: {user.jobTitle}</Paragraph>
          <Button isRed name="Delete" onClick={() => deleteUser(user.id)} />
        </UserCard>
      ))}
      {users.length > 0 && (
        <Button isRed name="Delete all users" onClick={resetResults} />
      )}
    </UsersPageWrapper>
  )
}

export default Users
