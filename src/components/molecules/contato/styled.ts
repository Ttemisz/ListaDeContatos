import styled from "styled-components";

export const Label = styled.label`
    color:black;
`
export const Card = styled.div`
    background-color: #f4f4f4;  
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;                
    margin: 20px;
    border-radius:10px;       

`
export const Acoes =styled.div`
    display:flex;
    margin-left:180px;

`
export const BotaoCancelar = styled.button`
    background-color :#f92710 ;
    padding: 15px 32px;
    margin:8px;
    border: none;
    border-radius:5px; 
     &:hover{
         background-color :#A11111;
    }
`
export const BotaoEditar = styled.button`
    background-color :#F99100;
    padding: 15px 32px;
    margin:8px;
    border: none;
    border-radius:5px;
    &:hover{
         background-color :#f96910;
    }
`

export const BotaoSalvar = styled.button`
    background-color :#87E991;
    padding: 15px 32px;
     margin:8px;
     border: none;
     border-radius:5px;
     &:hover{
         background-color :green;
    }
`
export const BotaoRemover = styled.button`
    background-color :#F94100;
    padding: 15px 32px;
     margin:8px;
     border: none;
     border-radius:5px;
      &:hover{
         background-color :#B11111;
    }
`

export const Nome = styled.input`
    color: #111111; 
    font-size: 18px; 
    font-family: Arial, sans-serif; 
    text-transform: uppercase; 
    letter-spacing: 2px; 
    padding: 10px;
    border:  #f4f4f4;
    border-radius: 4px;
    margin-bottom: 20px; 
   

    &:focus {
        border-color: #4CAF50;
        box-shadow: 0 0 8px rgba(76, 175, 80, 0.4);
        outline: none;
    }
`

export const Numero = styled.input`
    color: #111111;
    font-size: 16px;
    font-family: 'Courier New', Courier, monospace; 
    padding: 10px;
    border:  #f4f4f4;
    border-radius: 4px;
    margin-bottom: 10px;
     
  

    &:focus {
        border-color: #4CAF50;
        box-shadow: 0 0 8px rgba(76, 175, 80, 0.4);
        outline: none;
    }
`

export const Email = styled.input`
    color: #111111; 
    font-size: 16px;
    font-family: 'Courier New', Courier, monospace; 
    padding: 10px;
    border:  #f4f4f4;
    border-radius: 4px;
    margin-bottom: 10px;

    &:focus {
        border-color: #4CAF50;
        box-shadow: 0 0 8px rgba(76, 175, 80, 0.4);
        outline: none;
    }
`

export const Entradas = styled.div`
    display: flex;
    flex-direction: column; 
 
`