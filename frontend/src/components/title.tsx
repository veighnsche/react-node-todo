import styled from "styled-components"

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #282c34;
  color: white;
`


export const Title = () => {
  return (
    <TitleContainer>
      <TitleText>My Title</TitleText>
    </TitleContainer>
  )
}
