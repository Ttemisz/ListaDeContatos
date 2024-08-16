import { EntradaCabecalho } from "./style"
import {Titulo} from "./style"
import {BotaoAdicionar} from "./style"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../../store"
import { alterarTermo } from "../../../store/reducers/filtro"

const HeaderAtoms = () => {
    const dispatch = useDispatch()
    const { termo } = useSelector((state:RootReducer)=>state.filtro)


  
    return(
        <>
            <Titulo>Lista de Numeros</Titulo>
            <EntradaCabecalho type="text" placeholder="Buscar" value={termo} onChange={evento =>dispatch(alterarTermo(evento.target.value))}/>
            <BotaoAdicionar to="/novo">Adicionar</BotaoAdicionar>
    </>
    )
}
   


export default HeaderAtoms