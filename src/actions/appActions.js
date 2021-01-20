export const ADD = 'ADD'
export const DELETE = 'DELETE'

export const addFeature = (item) => {
    return {
        type: ADD, payload: item
    }
}

export const deleteFeature = (item) => {
    return {
        type: DELETE, payload: item
    }
}