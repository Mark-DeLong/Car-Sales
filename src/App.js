import { ADD, DELETE } from './actions/appActions';

export const initialState = {
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'seatbelts (1)', price: 57 },
          { id: 2, name: 'airbags', price: 22224 },
          { id: 3, name: 'windows', price: 19.99 },
          { id: 4, name: 'tires', price: 9483 }
        ]
};

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD:
            return{
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car, 
                    features: [...state.car.features, action.payload]
            }
        }
        case DELETE:
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features: [...state.car.features.filter((item) => item.id !== action.payload.id)]
                }
            }
        default:
            return state
    }
}

export default Reducer