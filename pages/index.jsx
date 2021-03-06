import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {

  return (
    <>
      <Head>
        <title>Rio Odontologia</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generated by create next app" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      </Head>
      <div className={styles.container}>

        <div className={styles.form}>
          <Image src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/rio-odontologia-implante-dentario/a6306797-rio-odonto-300x50_1000000000000000000028.png" alt="Logo" className={styles.logo} />

          <form style={{width: 300}}>

            <div className="form-group">
              <label htmlFor="exampleInputNome1">Nome:</label>
              <input type="text" className="form-control" id="exampleInputNome1" aria-describedby="nomeHelp" placeholder="Escreva seu nome" />
            </div>
            
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email:</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escreva seu email" />
            </div>
            
            <div className="form-group">
              <label htmlFor="exampleInputTelefone1">Telefone:</label>
              <input type="tel" className="form-control" id="exampleInputTelefone1" aria-describedby="telefoneHelp" placeholder="Escreva seu telefone" />
            </div>
            
            <div className="form-group">
              <label htmlFor="exampleInputDiarios1">Quantidade de leads diários:</label>
              <input type="number" defaultValue={0} min={0} className="form-control" id="exampleInputDiarios1" aria-describedby="diariosHelp" placeholder="Escreva a quantidade de leads diários" />
            </div>
            
            <div className="form-group">
              <label htmlFor="exampleInputAgendamento1">Quantidade de agendamento:</label>
              <input type="number" defaultValue={0} min={0} className="form-control" id="exampleInputAgendamento1" aria-describedby="agendamentoHelp" placeholder="Escreva a quantidade de agendamento" />
            </div>
            
            <div className="form-group">
              <label htmlFor="exampleInputComparecimento1">Quantidade de comparecimentos:</label>
              <input type="number" defaultValue={0} min={0} className="form-control" id="exampleInputComparecimento1" aria-describedby="comparecimentoHelp" placeholder="Escreva a quantidade de comparecimentos" />
            </div>
            
            <div className="form-group">
              <label htmlFor="exampleInputFechados1">Quantidade de serviços fechados:</label>
              <input type="number" defaultValue={0} min={0} className="form-control" id="exampleInputFechados1" aria-describedby="fechadosHelp" placeholder="Escreva a quantidade de serviços fechados" />
            </div>

            <button style={{marginTop: 25, width: '100%'}} type="button" className="btn btn-dark">Enviar</button>
          </form>

        </div>

      </div>
    </>
  )
}
