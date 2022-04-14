export const initialState=null;
export default function reducer(state,action) {
    if(action.type==="USER"){
      console.log(action)
        return action.payload;
    }
  return state;
}
