export default (state=0, action)=>{
	switch (action.type){
		case 'jia':
			return action.value;
		case 'jian':
			return action.value;
		default:
			return state;
	}
}