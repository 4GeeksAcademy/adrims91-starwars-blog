const initialState = {
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    people: JSON.parse(localStorage.getItem('people')) || [],
    planets: JSON.parse(localStorage.getItem('planets')) || [],
    vehicles: JSON.parse(localStorage.getItem('vehicles')) || []
};

const AppReducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_PEOPLE':
            return {
                ...state,
                people: action.payload
            };
        case 'FETCH_PLANETS':
            return {
                ...state,
                planets: action.payload
            };
        case 'FETCH_VEHICLES':
            return {
                ...state,
                vehicles: action.payload
            };
        case 'TOGGLE_FAVORITE':
            const isFavorite = state.favorites.some(fav => fav.name === action.payload.name);
            const updatedFavorites = isFavorite
                ? state.favorites.filter(fav => fav.name !== action.payload.name)
                : [...state.favorites, action.payload];
            return {
                ...state,
                favorites: updatedFavorites
            };
        default:
            return state;
    }
};

export { initialState, AppReducer };
