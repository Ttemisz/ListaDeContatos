import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/contato";


type ContatosState = {
    itens:Contato[]
}

const initialState:ContatosState={

    itens:[
        {
            nome:'temistocliss',
            numero:'(81) 91234-56678',
            email:'abc@hotmqail.com',
            id:1,
            
        },{
            nome:'temistoclissss',
            numero:'(81) 91234-56578',
            email:'abc@hotmwail.com',
            id:2,
            
        },{
            nome:'temistoclisddd',
            numero:'(81) 91234-56478',
            email:'abc@hotmeail.com',
            id:3,
            
        },{
            nome:'temistoclifffs',
            numero:'(81) 91234-56378',
            email:'abc@hotmbail.com',
            id:4,
            
        },{
            nome:'temistochhhis',
            numero:'(81) 91234-56278',
            email:'abc@hotmaail.com',
            id:5,
            
        }
    ]
}
const contatosSlice = createSlice({

    name:'contatos',
    initialState,
    reducers:{
        
        remover:(state,action:PayloadAction<number>)=>{
            state.itens=[
                ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
            ]
        },
        editar:(state,action:PayloadAction<Contato>) =>{
            const indexDoContato = state.itens.findIndex((t)=> t.id ===action.payload.id)
            if(indexDoContato >= 0 ){
                state.itens[indexDoContato] = action.payload
            }
        },cadastrar:(state,action:PayloadAction<Contato>)=>{
            
            console.log("Estado atual dos itens:", state.itens);

            const ContatoJaExiste = state.itens.find(
                (contato) => {
                    console.log("Comparando:", contato.numero, "com", action.payload.numero);
                    return contato.nome.toLowerCase() === action.payload.nome.toLowerCase();
                }
            );

            console.log("Resultado da busca:", ContatoJaExiste);
            if(ContatoJaExiste){
                alert("Esse número já está cadastrado");
            } else {
                console.log("Adicionando contato>", action.payload);
                state.itens.push(action.payload);
            }
        }
        
    }
})

export const {remover,editar,cadastrar} = contatosSlice.actions

export default contatosSlice.reducer