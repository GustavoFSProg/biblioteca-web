import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;

`

export const Button = styled.button`
  width: 26rem;
  /* max-width: 470px; */
  margin-left: 22px;

  height: 41px;
  margin-top: -30px;
  /* padding-left: 10px; */
  font-size: 15px;
  /* background: lightblue; */
  background: #666666;
  color: white;

  
  cursor: pointer;
  transition: ease 0.7s;

  :hover {
    background: blue;
    color: white;
  }

  @media screen and (max-width: 800px){
  width: 14rem;

  margin-left: -15px;


  }
`
