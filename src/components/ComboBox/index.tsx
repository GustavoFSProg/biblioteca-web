import { InputContainer, Combobox } from './style'

type PropsTypes  ={
  children: React.ReactNode
}

function Dropdown({children}: PropsTypes ) {
  return (
    <InputContainer >
      <Combobox >
        {children}
      </Combobox>
    </InputContainer>
  )
}

export default Dropdown

