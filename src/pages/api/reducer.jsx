export const initialState =  {
    roomId:null,
};

const reducer = (state , action) => {
   
    switch(action.type){
        case 'SELECT_ROOM_ID':

            return{
              roomId:state.roomId
                    
                  }
            
        default:
            return state
    }
}

export default reducer;