import { useSelector} from "react-redux"

import Contato from "../../molecules/contato"
import { CardContainer} from "./style"
import { RootReducer } from "../../../store"


const ListaDeContatos = () =>{
    const {itens} = useSelector((state:RootReducer)=>state.contatos)
    const {termo} = useSelector((state:RootReducer) => state.filtro)

  


    const filtraContatos = () => {
        return itens.filter((item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0)
    }
    return(
        <CardContainer>
            {filtraContatos().map((t) => (
                <li key={t.numero}>
                    <Contato nome={t.nome} numero={t.numero} email={t.email} id={t.id}/>
                </li>
                ))}
        </CardContainer>
    
    )
}

        
    


export default ListaDeContatos