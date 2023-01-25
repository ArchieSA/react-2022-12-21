export const DISH_ACTIONS = {
    load: 'dish/Load',
    startLoading: 'dish/StartLoading',
    finishLoading: 'dish/FinishLoading',
    failLoading: 'dish/FailLoading',
}

export const loadDishes = (restaurantId) => ({ type: DISH_ACTIONS.load, payload: restaurantId })

export const startLoadingDishes = () => ({
    type: DISH_ACTIONS.startLoading,
})
export const finishLoadingDishes = (dishes) => ({
    type: DISH_ACTIONS.finishLoading,
    payload: dishes,
})
export const failLoadingDishes = () => ({
    type: DISH_ACTIONS.failLoading,
})