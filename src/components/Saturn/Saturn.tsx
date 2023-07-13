import Image from 'next/image';
import './Saturn.scss'

export default function SaturnPlanet(){
  return <Image className='saturn-img' src='/assets/icon-colored.svg' width={700} height={700} alt="Saturn" />
}
