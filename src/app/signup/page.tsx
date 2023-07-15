import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import './style.scss'
import Image from 'next/image'
import { inter, montserrat } from '@/utils/fonts/font'
import Link from 'next/link'
import SaturnPlanet from '@/components/Saturn/Saturn'
import Circle from '@/components/Circle/Circle'
import Form from './components/Form'

export default function signUp() {
  return (
    <main>
      <Image src="/assets/Logotype.svg" alt='Stuuky' width={166} height={50}></Image>
      <div className='main-container'>
        <Form />
        <SaturnPlanet />
        <Circle opacity={80} image-component={Image} />
      </div>
    </main>
  )
}
