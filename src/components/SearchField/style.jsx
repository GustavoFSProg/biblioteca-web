import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding-top: 1rem; */
  align-items: flex-start;
  font-family: Inter;
  font-weight: normal;
  font-size: 1rem;
  line-height: 160%;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #fefefe;
  color: #9a9a9a;
  padding: 0;
  height: 50px;
  margin-left: -7px;
  margin-top: 22px;
`

export const ListContainer = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  border: 1px solid lightgray;
  padding: 11px;
  margin-top: 3px;
  border-radius: 6px;
  background: #fefefe;
  color: #9a9a9a;
  font-size: 14px;
`
