import { useNavigate } from "react-router-dom";
import {
    BottomBar,
    BottomInner,
  ButtonCancel,
  Header,
  IconInput,
  Inner,
  Input,
  InputDescription,
  InputGroup,
  InputGroupBottom,
  InputLeft,
  InputRight,
  Inputs,
  Picture,
  PictureButton,
  SubmitButton,
  Wrapper,
} from "./addAuctionsEmpty.style";
import { FaClock, FaEuroSign } from "react-icons/fa";


const AddAuctionsEmpty: React.FC = () => {

    const navigate = useNavigate();
  return (
    <Wrapper>
      <Header>
        <span>Add auction</span>
      </Header>

      <Picture>
        <PictureButton>Add Image</PictureButton>
      </Picture>

      <Inner>
        <Inputs>
        <InputGroup>
        <label htmlFor="title">Title</label>
        <Input id="title" type="text" placeholder="Write item name here..."></Input>
        </InputGroup>
        </Inputs>
        
        <Inputs>
        <InputGroup>
         <label htmlFor="description">Description</label>
        <InputDescription id="description" type="text" placeholder="Write description here..."></InputDescription>
        </InputGroup>
        </Inputs>
        </Inner>

        <BottomInner>

        <InputLeft>
        <InputGroupBottom>
        <label htmlFor="startingPrice">Starting price</label>
        <Input id="startingPrice" type="text" placeholder="Price"></Input>
        <IconInput>
            <FaEuroSign></FaEuroSign>
            </IconInput>
        
    
        </InputGroupBottom>
        </InputLeft>

        <InputRight>
        <InputGroupBottom>
        <label htmlFor="endDate">End date</label>
        <Input id="endDate" type="text" placeholder="dd.mm.yyyy"></Input>
        <IconInput>
            <FaClock></FaClock>
            </IconInput>
        </InputGroupBottom>
        </InputRight>
        </BottomInner>

        <BottomBar>
            <ButtonCancel onClick={() => navigate(-1)}> 
               <span> Cancel</span>
            </ButtonCancel>

            <SubmitButton onClick={() => navigate(-1)}>
               <span>Start auction</span>
            </SubmitButton>

        </BottomBar>


      
    </Wrapper>
  );
};
export default AddAuctionsEmpty;
