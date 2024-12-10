import db_imagem from "../data/db_imagens";


function ConteudoLista(){

    return(     
      <section className="section-main-lista">
        {db_imagem.map( (imagem) => 

          <aside className="exibe-imovel" key={imagem.id}>
              <img src={imagem.img} alt="" />

              <div className="nome-nota">
                <p>{imagem.nome}</p>
                {/* <p>&#9733; {imagem.nota}</p> */}
                <p> {imagem.nota}</p>
              </div>

              <div className="cidade-valor">
                <p>{imagem.cidade}, {imagem.estado}</p>
                <p>Diária: R$ {imagem.preco}</p>
              </div>
          </aside>

        )}
      </section>
    )
}

export default ConteudoLista
