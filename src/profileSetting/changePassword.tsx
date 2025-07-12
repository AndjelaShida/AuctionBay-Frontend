import {
  FormContainer,
  Header,
  Input,
  InputGroup,
  Inputs,
  Title,
  Wrapper,
} from "./changePassword.style";

const ChangePassword: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Change password</Title>
      </Header>

      <FormContainer>
        <Inputs>
          <InputGroup>
            <label htmlFor="currentPassword">Current password</label>
            <Input id="currentPassword" type="text" placeholder=""></Input>
          </InputGroup>
        </Inputs>

             <Inputs>
          <InputGroup>
            <label htmlFor="newtPassword">New password</label>
            <Input id="newtPassword" type="text" placeholder=""></Input>
          </InputGroup>
        </Inputs>

             <Inputs>
          <InputGroup>
            <label htmlFor="repeatNewPassword">Repeat new password</label>
            <Input id="repeatNewPassword" type="text" placeholder=""></Input>
          </InputGroup>
        </Inputs>
      </FormContainer>
    </Wrapper>
  );
};
export default ChangePassword;
