import styled from "styled-components";
import {useDocumentTitle} from "../../utils/functions"

const Styled = () => {
  useDocumentTitle("Section STYLED-COMPONENTS")
  const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

  const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
  const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

  return (
    <>
      <div>
        <Button as="a" href="#">Bouton</Button>
        <TomatoButton as="a" href="#">Bouton surchargé</TomatoButton>

        <Input defaultValue="@probablyup" type="text" />
        <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
      </div>
    </>
  )
}

export default Styled;

