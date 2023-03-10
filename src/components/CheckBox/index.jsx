import { InputContainer, Input } from './style'

type PropsTypes  ={
  placeholder: string
}

function Checkbox() {
  return (
    <InputContainer >
      <Input type="checkbox"/>
    </InputContainer>
  )
}

export default Checkbox

