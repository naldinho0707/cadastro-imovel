import Footer from "./Footer"
import Formulario from "./Formulario"

function Cadastro(){
    return(
        <body className="cadastro-imovel">
            
            <header>
                <a href="https://upbase.com.br" target="_blank">
                    <img src="./upbase-header.png" alt="Logo Marca da UpBase com Link para outra Aba para a página da UpBase Consultoria Digital" loading="lazy"/>
                </a>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li className="cadastro">+ Cadastrar Imóvel</li>
                        <li><a href="/lista">Lista de Imóveis</a></li>
                    </ul>
                    <a href="https://www.linkedin.com/in/reginaldo-luiz-formoso-junior-5aa23539/" target="_blank"><img src="./reginaldo-luiz.png" alt="Imagem de Reginaldo Luiz com link para sua página no LinkedIn" /></a>
                </nav>
            </header>

            <main className="main-cadastro">
                <h1>Cadastrar Imóvel</h1>
                <a href="./"><img src="./seta-esquerda.png" alt="Icone de Volta para Página Home" /></a>
                <Formulario/>
            </main>

            <Footer/>

        </body>
    )
}

export default Cadastro
