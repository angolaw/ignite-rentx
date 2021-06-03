import React from 'react'
import { Container, Title } from './styles'
import {ActivityIndicator} from 'react-native'
import { useTheme } from 'styled-components'
interface ButtonProps{
  title: string;
  color?: string;
  onPress:()=>void;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({title, color,  enabled=true, loading=false,...rest}:ButtonProps){
  const theme = useTheme()
  
  return (
     <Container   {...rest} color={color} enabled={enabled} style={{opacity: (enabled === false || loading === true) ? 0.5 : 1}} >
        {loading ? <ActivityIndicator color={theme.colors.shape} />
        
        : <Title>{title}</Title>
        }
    </Container>
  )
}