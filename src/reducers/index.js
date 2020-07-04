const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      let repetido = false
      state.myList.forEach(element => {
        if (element.id === action.payload.id) {
          repetido = true
        }
      });


      if (repetido === true) {
        return state
      } else {
        return {
          ...state,
          myList: [...state.myList, action.payload]
        }
      }

    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(item => item.id !== action.payload)
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload
      }
      case 'REGISTER_REQUEST':
        return{
          ...state,
          user: action.payload
        }
        case 'GET_VIDEO_SOURCE':
          return{
            ...state,
            playing: state.trends.find(item=> item.id===Number(action.payload))
            || state.originals.find(item=> item.id===Number(action.payload))
            || []
          }
          case 'SET_SEARCH_RESULTS':
            if(action.payload!==""){
            
            return{
              ...state,
              search: state.trends.filter(item=> item.title.toLowerCase().search(action.payload.toLowerCase())!== -1 )
                .concat(state.originals.filter(item=> item.title.toLowerCase().search(action.payload.toLowerCase())!== -1 ))
              ||[]
            }}else{
              return {
                ...state,
                search:[]}
            }
    default:
      return state
  }
}
export default reducer