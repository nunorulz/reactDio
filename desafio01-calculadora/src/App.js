import Input from "./components/Input"
import Button from "./components/Button"

import { Container, Content, Row, Column } from "./styles";

const App = () => {
  return (
    <Container>
      <Content>
        <Input />
        <Button label="1"/>
        <Button label="2"/>
        <Button label="3"/>
        <Button label="="/>
        <Row />
      </Content>
    </Container>
  );
}

export default App;
