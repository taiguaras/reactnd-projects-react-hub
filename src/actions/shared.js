
import { getPosts, getCategories, getPostComments } from '../utils/api'
import { handlePostList } from '../actions/postList'
import { receiveUsers } from '../actions/users'
// import { receiveComments } from '../actions/comments'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'taiguaras'



export function handleInitialData () {
  return (dispatch) => {
    return getPosts()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
        // dispatch(handlePostList())
        // Está comentado pois isso ainda se faz em POSTLIST :(
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}