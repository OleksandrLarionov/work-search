const inizialState = {
	favorite: {
		content: [],
	},
};

const mainReducer = (state = inizialState, action) => {
	switch (action.type) {
		case 'ADD_TO_FAVORITE':
			return {
				...state,
				favorite: {
					...state.favorite,
					content: [...state.favorite.content, action.payload],
				},
			};
		case 'REMOVE_FROM_FAVORITE':
			return {
				...state,
				favorite: {
					...state.favorite,
					content: state.favorite.content.filter((book, i) => i !== action.payload),
				},
			};
		default:
			return state;
	}
};

export default mainReducer;
