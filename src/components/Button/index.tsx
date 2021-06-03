import React from 'react'
import { Container, Title } from './styles'

interface ButtonProps{
  title: string;
  color?: string;
  onPress:()=>void;
  enabled?: boolean;
}

export function Button({title, color,  enabled=true,...rest}:ButtonProps){
  return (
     <Container   {...rest} color={color} enabled={enabled} style={{opacity: enabled ? 1 : 0.5}} >
       <Title>{title}</Title>
    </Container>
  )
}