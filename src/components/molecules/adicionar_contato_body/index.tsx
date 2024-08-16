import { FormEvent, useState } from "react";
import { BotaoAdicionar, EntradaEmail, EntradaNome, EntradaTelefone, Formulario, Label, Titulo} from "./style";
import { useDispatch } from "react-redux";
import Contato from "../../../models/contato"
import { cadastrar } from "../../../store/reducers/tarefas";
import { useNavigate } from "react-router-dom";

const ItensAdicionar = () =>{ 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const[nome,setNome] = useState('')
    const[numero,setNumero] = useState('')
    const[email,setEmail] = useState('')



    const cadastrarContato = (evento:FormEvent) =>{
    console.log("Função cadastrarContato chamada");

    evento.preventDefault();
    const contatoParaAdicionar = new Contato(nome,numero,email,9)

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
}

    return(
    <> 
        
        <Formulario>
        <Titulo>Cadastrar Contato</Titulo>
                <Label>Nome:</Label>
                <EntradaNome value={nome} onChange={evento => setNome(evento.target.value)} placeholder="Nome"></EntradaNome>
                <Label>Telefone:</Label>
                <EntradaTelefone value={numero} onChange={evento => setNumero(evento.target.value)} placeholder="Telefone"></EntradaTelefone>
                <Label>Email:</Label>
                <EntradaEmail value={email} onChange={({target}) => setEmail(target.value)} placeholder="Email"></EntradaEmail>
                <BotaoAdicionar  type="submit" onClick={cadastrarContato}>Cadastrar </BotaoAdicionar>
        </Formulario>
        
    </>
)
}
    



export default ItensAdicionar