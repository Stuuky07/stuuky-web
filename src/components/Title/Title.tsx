import React, { FC, HTMLAttributes } from "react";
import './Title.scss';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  h1?: string,
  name: string 
  }

const Title: FC<TitleProps> = ({ h1, name, ...props }) => {
  return (
    <h1 className="title" id={name} {...props}>{h1}</h1>
  );
};

export default Title;
