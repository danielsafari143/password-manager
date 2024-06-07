import { createSlice } from '@reduxjs/toolkit'
import facebook from '../../assets/images/Iconly/Light-Outline/facebook.png'
import instagram from '../../assets/images/Iconly/Light-Outline/instagram.png';
import dribble from '../../assets/images/Iconly/Light-Outline/dribble.png';

const initialState = {
    modalOpened: false,
    passwordModal : false,
    passwordId: "item7",
    passwords : [{ title: 'Instagram',password:"daniel3", number: 3, body: 'safari@gamil.com', key: 'item7', icon: instagram, favorite: false }
    , { title: 'Dribble', number: 3,password:"rodrigue", body: 'safari@gmail.com', key: 'item6', icon: dribble, favorite: true }
    , { title: 'Facebook', number: 3, password:"loprada45", body: 'safari@gamil.com', key: 'item5', icon: facebook, favorite: false }]
}

const addSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addModal(state, action) {
            state.modalOpened = action.payload;
        },
        passModal(state , action) {
            state.passwordId = action.payload.id
            state.passwordModal = action.payload.ste;
        }
    }
})

export const { addModal , passModal} = addSlice.actions;

export default addSlice.reducer;