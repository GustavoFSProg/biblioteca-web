import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
`

export const Button = styled.button`
  width: 27rem;
  /* max-width: 470px; */
  margin-left: 22px;

  height: 41px;
  margin-top: -30px;
  /* padding-left: 10px; */
  font-size: 15px;
  background: lightblue;
  color: blue;
  cursor: pointer;
  transition: ease 0.7s;

  :hover {
    background: blue;
    color: white;
  }
`
