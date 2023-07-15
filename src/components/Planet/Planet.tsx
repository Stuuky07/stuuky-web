import Image from 'next/image'
import './Planet.scss'

interface CircleProps {
  variant: 'large' | 'medium' | 'small'
}

const Circle = ({ variant }: CircleProps) => {
  return (
    <Image
      className="planet"
      src="/assets/circle.svg"
      width={700}
      height={700}
      alt="Star"
      data-variant={variant}
    />
  );
};

export default Circle
