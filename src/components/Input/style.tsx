import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1rem;
  margin-top: -2.6rem;
  font-family: Inter;
  font-weight: normal;
  font-size: 1rem;
  line-height: 160%;


  @media screen and (max-width: 800px){
    width: 100% ;
    /* margin-left: 40px; */
  
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 3rem;
  border-radius: 8px;
  :hover {
    box-shadow: 0px 0px 5px 1px rgba(37, 0, 50, 0.5);
  }

  @media screen and (max-width: 800px){
    width: 152% ;
    margin-left: -53px;
  
  }

`

export const StyledInput = styled.input`
  display: flex;
  height: 100%;
  width: 100%;
  /* width: 22rem; */
  background: #fefefe;
  border: none;
  box-shadow: 0px 0px 5px 1px rgba(37, 0, 50, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  border-radius: 8px;
  color: #353535;
  outline-color: transparent;
  ::placeholder {
    color: transparent;
  }
  :focus + label {
    font-size: 0.84rem;
    margin-top: -2rem;
  }
  :focus {
    box-shadow: 0px 0px 5px 1px rgba(37, 0, 50, 1);
  }

`

export const Label = styled.label < { move: boolean } > `
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 1rem;
  font-size: ${({ move }) => (move ? '1rem' : '0.7rem')};
  margin-top: ${({ move }) => (move ? 'inherit' : '-2rem')};
  color: #9a9a9a;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
`

export const ErrorMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: red;
  min-height: 1.5rem;
`