export const setFavorite= payload=>({
  type: 'SET_FAVORITE',
  payload
})
export const deleteFavorite= payload=>(
  {
    type: 'DELETE_FAVORITE',
    payload
  }
)
export const setUser = payload=>(
  {
    type: 'SET_USER',
    payload
  }
)
export const logoutRequest= payload=>(
  {
    type: 'LOGOUT_REQUEST',
    payload
  }
)
export const registerRequest= payload=>(
  {
    type: 'REGISTER_REQUEST',
    payload
  }
)
export const getVideoSource= payload=>(
  {
    type: 'GET_VIDEO_SOURCE',
    payload
  }
)
export const setSearchResults= payload=>(
  {
    type: 'SET_SEARCH_RESULTS',
    payload
  }
)