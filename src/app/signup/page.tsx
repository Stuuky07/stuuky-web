import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import './style.scss'
import Image from 'next/image'
import { inter, montserrat } from '@/utils/fonts/font'
import Link from 'next/link'
import SaturnPlanet from '@/components/Saturn/Saturn'
import Circle from '@/components/Circle/Circle'

export default function signUp() {
  return (
    <main>
      <Image src="/assets/Logotype.svg" alt='Stuuky' width={166} height={50}></Image>
      <div className='main-container'>
        <form>
          <div className={`${montserrat.className} title-container`}>
            <h1>Cadastre-se e comece a <br></br> tirar dúvidas agora mesmo!</h1>
            <h5>Crie seu perfil Stuuky para fazer e responder perguntas de suas matérias preferidas, ganhar pontos e subir no ranking de sua escola</h5>
          </div>
          <div className='input-container'>
            <Input name='username' placeholder='Nome de Usuário' />
            <Input name='email' placeholder='E-mail' />
            <Input name='password' type='password' placeholder='Senha' />
          </div>
          <span className='burocratic-info'>Ao criar uma conta, você concorda com a <span>Política de Privacidade</span> e 
          com os <span>Termos de Uso</span> da Stuuky.</span>
          <div className='submit-div'>
            <Button name='submit' value='Próximo' />
          </div>
          <h6 className='login-link'>Já é usuário?
            <Link href="/login">Fazer Login
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                <path d="M0 2.5013V3.7752L9.05412 3.77519L7.35984 5.18284L8.2643 6.08731L9.42992 5.18284L11.5 3.13824L8.2643 0.195526L7.35984 1.1L9.05412 2.50129L0 2.5013Z" fill="white"/>
              </svg>
            </Link>
          </h6>
        </form>
        <SaturnPlanet/>
        <Circle opacity={80} image-component={Image}/>
      </div>
    </main>
  )
}
