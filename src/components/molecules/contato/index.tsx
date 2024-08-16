import { useState } from "react";
import { useDispatch } from "react-redux";

import { Card, Acoes, BotaoCancelar, BotaoEditar, Nome, Numero, Email, BotaoSalvar, BotaoRemover, Entradas, Label } from "./styled";
import { remover, editar } from "../../../store/reducers/tarefas";
import ContatoClass from '../../../models/contato';


type Props = ContatoClass;

const Contato = ({ nome: nomeOriginal, numero: numeroOriginal, email: emailOriginal, id }: Props) => {
    const dispatch = useDispatch();
    const [estaEditando, setEstaEditando] = useState(false);
    const [nome, setNome] = useState(nomeOriginal);
    const [numero, setNumero] = useState(numeroOriginal);
    const [email, setEmail] = useState(emailOriginal);

    return (
        <Card>
            <Entradas>
                <Label>Nome:</Label>
                <Nome disabled={!estaEditando} value={nome} onChange={(evento) => setNome(evento.target.value)} />
                <Label>Telefone:</Label>
                <Numero disabled={!estaEditando} value={numero} onChange={(evento) => setNumero(evento.target.value)} />
                <Label>E-mail:</Label>
                <Email disabled={!estaEditando} value={email} onChange={(evento) => setEmail(evento.target.value)} />
            </Entradas>
            <Acoes>
                {estaEditando ? (
                    <>
                        <BotaoSalvar onClick={() => {dispatch(editar({nome, numero, email, id}));setEstaEditando(false);}}>Salvar</BotaoSalvar>
                        <BotaoCancelar onClick={() => {setEstaEditando(false);setNome(nomeOriginal);setNumero(numeroOriginal);setEmail(emailOriginal);}}>Cancelar</BotaoCancelar>
                    </>
                ) : (
                    <>
                        <BotaoEditar onClick={() => setEstaEditando(true)}>Editar</BotaoEditar>
                        <BotaoRemover onClick={() => dispatch(remover(id))}>Remover</BotaoRemover>
                    </>
                )}
            </Acoes>
        </Card>
    );
};

export default Contato;
