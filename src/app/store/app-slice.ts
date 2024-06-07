import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type lang = 'RU' | 'EN'
type isAuth = boolean
type Profile = {
    name: string,
    avatar?: string,
}

export type Modules = 'Главная' | 'Расписание'| 'Оплата' | 'Достижения' | 'Тренажеры' | 'Библиотека' | 'Проверка связи' | 'Настройки' | 'Вопросы'

interface AppI {
    lang: lang,
    isAuth: isAuth,
    profile: Profile
    module: Modules
}
const initialState: AppI = {
    lang: 'RU',
    isAuth: false,
    profile: {
        name: '',
        avatar: ''
    },
    module: 'Главная'
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
        changeModule: (state, action: PayloadAction<Modules>) => {
            state.module = action.payload
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
export const { changeLang, changeIsAuth, setProfile, changeModule, resetApp } = AppSlice.actions