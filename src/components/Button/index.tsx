import { ButtonContainer, Button } from './style'
import React from 'react'

type PropsTypes  ={
  children: React.ReactNode
}

function Buttons({children}: PropsTypes) {
  return (
    <ButtonContainer >
      <Button  >
        {children}
      </Button>
    </ButtonContainer>
  )
}

export default Buttons

