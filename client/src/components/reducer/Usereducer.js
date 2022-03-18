export const initialState=null;
export default function reducer(state,action) {
    if(action.type==="USER"){
        return action.payload;
    }
  return state;
}
