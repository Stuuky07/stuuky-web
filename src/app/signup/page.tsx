import Image from 'next/image'

import './style.scss'
import Form from './components/Form'
import SaturnPlanet from '@/components/Saturn/Saturn'
import Planet from '@/components/Planet/Planet'
import { montserrat } from '@/utils/fonts/font'

export default function signUp() {
  return (
    <main>
      <Image src="/assets/Logotype.svg" alt='Stuuky' width={166} height={50}></Image>
      <div className='main-container'>
        <div className={`${montserrat.className} title-container`}>
          <h1>Cadastre-se e comece a <br></br> tirar dúvidas agora mesmo!</h1>
          <h5>Crie seu perfil Stuuky para fazer e responder perguntas de suas matérias preferidas, ganhar pontos e subir no ranking de sua escola</h5>
        </div>
        <Form />
        {/* <SaturnPlanet />
        <Planet variant="large" /> */}
      </div>
    </main>
  )
}
