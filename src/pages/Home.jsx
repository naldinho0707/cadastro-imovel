import Footer from "./Footer"
import Usuario from "./Usuario"
import ConteudoHome from "./ConteudoHome"

function Home(){
    return(
        <body className="body-home">
            <header>
                <a href="https://upbase.com.br" target="_blank">
                    <img src="./upbase-header.png" alt="Logo Marca da UpBase com Link para outra Aba para a página da UpBase Consultoria Digital" loading="lazy"/>
                </a>
                <nav>
                    <ul>
                        <li className="home" >Home</li>
                        <li><a href="/cadastro">+ Cadastrar Imóvel</a></li>
                        <li><a href="/lista">Lista de Imóveis</a></li>
                    </ul>
                    <a href="https://www.linkedin.com/in/reginaldo-luiz-formoso-junior-5aa23539/" target="_blank"><img src="./reginaldo-luiz.png" alt="Imagem de Reginaldo Luiz com link para sua página no LinkedIn" /></a>
                </nav>
            </header>
          
            <main>
                <Usuario/>
                <ConteudoHome/>
            </main>

            <Footer/>
        </body>
    )
}

export default Home
