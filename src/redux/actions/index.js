export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const ADD_TO_CATALOGUE = 'ADD_TO_CATALOGUE';

export const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search=';
//action creator
export const addToFavouriteAction = (company) => ({
    type: ADD_TO_FAVOURITE,
    payload: company
});

export const removeFromFavouriteAction = (company) => ({
    type: REMOVE_FROM_FAVOURITE,
    payload: company
});

export const addToCatalogueAction = (query) => {
    return (dispatch, getState) => {
        fetch(baseEndpoint + query + '&limit=20')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: ADD_TO_CATALOGUE,
                    payload: data.data
                });
            })
            .catch(error => console.log(error));
    };
};