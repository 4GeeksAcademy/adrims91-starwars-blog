import React, { createContext, useReducer, useEffect } from "react";
import { initialState, AppReducer } from "./AppReducer";

const AppContext = createContext(initialState);

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        const fetchPeople = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/people");
                if (response.ok) {
                    const data = await response.json();
                    const details = await Promise.all(
                        data.results.map(async (person) => {
                            const detailResponse = await fetch(person.url);
                            if (detailResponse.ok) {
                                const detailData = await detailResponse.json();
                                return { uid: person.uid, type: 'people', ...detailData.result.properties };
                            }
                            return null;
                        })
                    );
                    localStorage.setItem('people', JSON.stringify(details));
                    dispatch({ type: 'FETCH_PEOPLE', payload: details });
                }
            } catch (error) {
                console.error("Error fetching people.", error);
            }
        };

        const fetchPlanets = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/planets");
                if (response.ok) {
                    const data = await response.json();
                    const details = await Promise.all(
                        data.results.map(async (planet) => {
                            const detailResponse = await fetch(planet.url);
                            if (detailResponse.ok) {
                                const detailData = await detailResponse.json();
                                return { uid: planet.uid, type: 'planets', ...detailData.result.properties };
                            }
                            return null;
                        })
                    );
                    localStorage.setItem('planets', JSON.stringify(details));
                    dispatch({ type: 'FETCH_PLANETS', payload: details });
                }
            } catch (error) {
                console.error("Error fetching planets.", error);
            }
        };

        const fetchVehicles = async () => {
            try {
                const response = await fetch("https://www.swapi.tech/api/vehicles");
                if (response.ok) {
                    const data = await response.json();
                    const details = await Promise.all(
                        data.results.map(async (vehicle) => {
                            const detailResponse = await fetch(vehicle.url);
                            if (detailResponse.ok) {
                                const detailData = await detailResponse.json();
                                return { uid: vehicle.uid, type: 'vehicles', ...detailData.result.properties };
                            }
                            return null;
                        })
                    );
                    localStorage.setItem('vehicles', JSON.stringify(details));
                    dispatch({ type: 'FETCH_VEHICLES', payload: details });
                }
            } catch (error) {
                console.error("Error fetching vehicles.", error);
            }
        };

        const storedPeople = localStorage.getItem('people');
        if (storedPeople) {
            dispatch({ type: 'FETCH_PEOPLE', payload: JSON.parse(storedPeople) });
        } else {
            fetchPeople();
        }

        const storedPlanets = localStorage.getItem('planets');
        if (storedPlanets) {
            dispatch({ type: 'FETCH_PLANETS', payload: JSON.parse(storedPlanets) });
        } else {
            fetchPlanets();
        }

        const storedVehicles = localStorage.getItem('vehicles');
        if (storedVehicles) {
            dispatch({type: 'FETCH_VEHICLES', payload: JSON.parse(storedVehicles)});
        }else {
            fetchVehicles()
        }
    }, [dispatch]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }, [state.favorites]);

    const toggleFavorite = (item) => {
        dispatch({ type: 'TOGGLE_FAVORITE', payload: item });
    };

    return (
        <AppContext.Provider value={{ state, dispatch, toggleFavorite }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, ContextProvider };
