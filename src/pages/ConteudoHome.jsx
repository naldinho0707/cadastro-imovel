
function ConteudoHome(){

 
    return(

      <>
          <section className="botao">
          <a className="flats" href="/lista">Todos os flates</a>
          <a className="indisponivel" href="#">Indisponíveis</a>
          </section>

          <section className="conteudo">
            <img src="./icone-main.png" alt="Icone Emoji Trsite" />
            <p>Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?</p>
            <a href="/cadastro">Cadastrar meu primeiro imóvel</a>
          </section>
      </>
        
    )
}

export default ConteudoHome
