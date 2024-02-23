import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Error: [],
    PopularProducts: [],
    liked: JSON.parse(localStorage.getItem('LikedDevice')) || [],
    basket: JSON.parse(localStorage.getItem('BasketDevice')) || [],
    scale: JSON.parse(localStorage.getItem('ScaleDevice')) || [],
    }
const MainSlice = createSlice({
    name: "mainSlice",
    initialState,
    reducers: {
        SelectError: (state, action) => {
            state.Error = action.payload
        },
        SelectLiked: (state, action) => {
            localStorage.setItem('LikedDevice', JSON.stringify([...state.liked, action.payload]))
            state.liked = JSON.parse(localStorage.getItem('LikedDevice')) || []
        },
        DeleteLiked: (state, action) => {
            localStorage.setItem('LikedDevice', JSON.stringify(
                state.liked.filter(item => item.id !== action.payload.id)
            ));
            state.liked = JSON.parse(localStorage.getItem('LikedDevice')) || []
        },
        DeleteAllLiked: (state, action) => {
            localStorage.clear()
            state.liked = JSON.parse(localStorage.getItem('LikedDevice')) || []
        },
        SelectRefresh: (state) => {
            state.scale = JSON.parse(localStorage.getItem('ScaleDevice')) || []
        },
        SelectBasket: (state, action) =>{
            localStorage.setItem('BasketDevice', JSON.stringify([...state.basket, action.payload]))
            state.basket = JSON.parse(localStorage.getItem('BasketDevice')) || []
        },
        Deletebasket: (state, action) => {
            localStorage.setItem('BasketDevice', JSON.stringify(
                state.basket.filter(item => item.id !== action.payload.id)
            ));
            state.basket = JSON.parse(localStorage.getItem('BasketDevice')) || []
        },    
        DeleteAllBasket: (state, action) => {
            localStorage.clear()
            state.basket = JSON.parse(localStorage.getItem('BasketDevice')) || []
        },
        SelectScale: (state, action) =>{
            localStorage.setItem('ScaleDevice', JSON.stringify([...state.scale, action.payload]))
            state.scale = JSON.parse(localStorage.getItem('ScaleDevice')) || []
        },
        DeleteScale: (state, action) => {
            localStorage.setItem('ScaleDevice', JSON.stringify(
                state.scale.filter(item => item.id !== action.payload.id)
            ));
            state.scale = JSON.parse(localStorage.getItem('ScaleDevice')) || []
        },    
        DeleteAllScale: (state, action) => {
            localStorage.clear()
            state.scale = JSON.parse(localStorage.getItem('ScaleDevice')) || []
        },
        GetPopularProducts: (state, action) => {
            state.PopularProducts = action.payload
        }
    }
})
export const {
    SelectError,
    SelectLiked,
    DeleteLiked,
    DeleteScale,
    SelectBasket,
    Deletebasket,
    DeleteAllLiked,
    DeleteAllBasket,
    GetPopularProducts,
    SelectScale,
    DeleteAllScale,
    SelectRefresh
} = MainSlice.actions;
export default MainSlice.reducer;