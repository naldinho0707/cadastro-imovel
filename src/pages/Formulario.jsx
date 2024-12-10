import { Form } from "react-router-dom"

function Formulario(){

    return(

    <section className="formulario">

        <p>Para começarmos, precisamos de alguns dados</p>

        <form action="">

        <input type="text" placeholder="Nome do imóvel" name="nome-imovel" id="nome-imovel" size="40" maxlength="40" required/>

        <label htmlFor="descricao">O nome do imóvel será exibido na sua tea inicial e na
        reserva para o hóspede</label>
        <textarea name="descricao" id="descricao" rows="3" cols="40" placeholder="Descrição" maxlength="250" required></textarea>
        <label className="contador-falso" htmlFor="descricao">0/250</label>

        <input type="text" name="cep" id="cep" placeholder="CEP: (Exemplo: 99999-999)" pattern="[0-9]{5}-[0-9]{3}" required/>

        <input type="text" name="endereco" id="endereco" placeholder="Endereço" required/>

        <div className="numero-complemento">
          <input type="text" name="numero" id="numero" placeholder="Número" required/>
          <input type="text" name="complemento" id="complemento" placeholder="Complemento" required/>
        </div>

        <div className="cidade-uf">
          <input className="cidade" type="text" name="cidade" id="cidade" placeholder="Cidade" required/>
          <select name="uf" id="uf" required>
                <option value="">UF</option>
                <option value="AC">AC</option>
                <option value="AL">AL</option>
                <option value="AP">AP</option>
                <option value="AM">AM</option>
                <option value="BA">BA</option>
                <option value="CE">CE</option>
                <option value="DF">DF</option>
                <option value="ES">ES</option>
                <option value="GO">GO</option>
                <option value="MA">MA</option>
                <option value="MT">MT</option>
                <option value="MS">MS</option>
                <option value="MG">MG</option>
                <option value="PA">PA</option>
                <option value="PB">PB</option>
                <option value="PR">PR</option>
                <option value="PE">PE</option>
                <option value="PI">PI</option>
                <option value="RJ">RJ</option>
                <option value="RN">RN</option>
                <option value="RS">RS</option>
                <option value="RO">RO</option>
                <option value="RR">RR</option>
                <option value="SC">SC</option>
                <option value="SP">SP</option>
                <option value="SE">SE</option>
                <option value="TO">TO</option>
            </select>
        </div>  

        <a className="btn-formulario" href="./lista">Finalizar</a>

        </form>
      
    </section>
    )
}

export default Formulario
