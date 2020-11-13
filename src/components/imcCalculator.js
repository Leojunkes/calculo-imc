import React, { useState} from 'react';
import './imcCalculator.css'

function IMCcalculator(props){
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imcresultado, setimcResultado] = useState(0);
    const [imctext, setImcText] = useState("");
    
    

    function calcular(){
       const imc = peso / (altura * altura);
        let imcresultado = imc;
        let imctext="";
        
        if(imcresultado <16){
            imctext = "Magreza Grave"
        }else if(imcresultado <17){
            imctext = "Magreza Moderada"
        }else if(imcresultado <18.5){
            imctext = "Magreza Leve"
        }else if(imcresultado <25){
            imctext = "Magreza Saudável"
        }else if(imcresultado <30){
            imctext = "Sobrepeso"
        }else if(imcresultado <35){
            imctext = "Obesidade grau 1"
        }else if(imcresultado <40){
            imctext = "Obesidade grau 2"
        }else{
            imctext = "Obesidade Mórbida"
        }


        setImcText(imctext);
        setimcResultado(imcresultado);
        }
    return (
    <div className="container1">
        <div className="container">
        <h3>Calculadora IMC</h3>
        <div className="container2">
        <p className = "textP"><b>IMC</b> é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
            O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.
            Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo:</p>
            </div>
        <div className="containerInput">
            <input placeholder="Digite sua Altura                 m" onChange={e=>setAltura(e.target.value)}/>
            <input placeholder="Digite seu Peso                  kg" onChange={e=>setPeso(e.target.value)}/>
            <button className="buttonCalcular" name="Calcular" onClick={calcular}>calcular</button>
        </div>
        <div className="containerResults">
        <p className="medidaTotal">{imcresultado.toFixed(2)}</p>
        <p className="medidaTotText">{imctext}</p>
        
        </div>
        </div>
        
        <div className="containerFooter">
            <footer className="Rodapé">
                <h3><a src ="https://github.com/Leojunkes"/>GitHub - https://github.com/Leojunkes</h3>
            </footer>
        </div>
        
        </div>
    
    )
}

export default IMCcalculator;




