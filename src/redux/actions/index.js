export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FROM_FAVORITE = 'REMOVE_FROM_FAVORITE';

export const addToFavoriteAction = (action) => ({ type: 'ADD_TO_FAVORITE', payload: action });

export const removeFromFavoriteAction = (index) => ({
	type: 'REMOVE_FROM_FAVORITE',
	payload: index,
});
