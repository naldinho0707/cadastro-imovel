
function Usuario(){

    const nome = "Reginaldo Luiz";
    const urlImg ="./reginaldo-luiz.png";

    return(

        <section className="usuario">
          <h2>Bem-vindo, {nome ? nome : "Usuário"}!</h2>
        </section>
        
    )
}

export default Usuario
