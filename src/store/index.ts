import {configureStore} from '@reduxjs/toolkit'
import contatosReducer from './reducers/tarefas.ts'
import filtroReducer from './reducers/filtro.ts'


const store = configureStore({
        reducer:{
            contatos: contatosReducer,
            filtro:filtroReducer
        }
    
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

