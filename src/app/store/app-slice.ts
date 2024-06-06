import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type lang = 'RU' | 'EN'
type isAuth = boolean
type Profile = {
    name: string,
    avatar?: string,
}

interface AppI {
    lang: lang,
    isAuth: isAuth,
    profile: Profile
}
const initialState: AppI = {
    lang: 'RU',
    isAuth: false,
    profile: {
        name: '',
        avatar: ''
    }
}
    

const AppSlice = createSlice({
    name: '@app',
    initialState,
    reducers: {
        changeLang: (state, action: PayloadAction<lang>) => {
            state.lang = action.payload
        },
        changeIsAuth: (state, action: PayloadAction<isAuth>) => {
            state.isAuth = action.payload
        },
        setProfile: (state, action: PayloadAction<Profile>) => {
            state.profile = {
                name: action.payload.name,
                avatar: action.payload.avatar
            }
        },
        resetApp: (state) => {
            const newState = {...initialState}
            
            return state = newState
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(_.pending, (state) => {
    //             state.loading = 'loading'
    //             state.error = ''
    //         })
    // }
})

export const AppReducer = AppSlice.reducer
export const { changeLang, changeIsAuth, setProfile, resetApp } = AppSlice.actions