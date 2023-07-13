import Image from 'next/image'
import { FC } from 'react'
import './Circle.scss'

interface CircleProps {
  opacity?: number
}

const Circle: FC<CircleProps> = ({ opacity, ...props }) => {
  let imageComponent = null

  if (opacity === 80) {
    imageComponent = (
      <Image
        className="circle-img-eighty"
        src="/assets/circle.svg"
        width={700}
        height={700}
        alt="Star"
        {...props}
      />
    );
  } else if (opacity === 60) {
    imageComponent = (
      <Image
        className="circle-img-sixty"
        src="/assets/circle.svg"
        width={700}
        height={700}
        alt="Star"
        {...props}
      />
    );
  } else if (opacity === 30) {
    imageComponent = (
      <Image
        className="circle-img-thirty"
        src="/assets/circle.svg"
        width={700}
        height={700}
        alt="Star"
        {...props}
      />
    );
  }

  return <div className="circle-img">{imageComponent}</div>;
};

export default Circle
