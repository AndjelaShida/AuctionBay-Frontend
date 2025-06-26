import {
  Actions,
  AuctionImage,
  Card,
  CardContent,
  DeleteButton,
  EditButton,
  Header,
  ImageContainer,
  Price,
  Tag,
  Time,
  Title,
} from "./auctionCard.style";
import { FiClock, FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";

interface Props {
  image: string;
  tag: string;
  tagColor: string;
  timeLeft: string;
  title: string;
  price: string;
}

const AuctionCard: React.FC<Props> = ({
  image,
  timeLeft,
  tag,
  tagColor,
  title,
  price,
}) => {
  return (
    <Card>
      <CardContent>
        <Header>
          <Time>
            {timeLeft}
            <FiClock size={14}></FiClock>
          </Time>
        </Header>

        <Tag style={{ backgroundColor: tagColor }}>{tag}</Tag>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </CardContent>

      <ImageContainer>
        <AuctionImage src={image} alt={title}></AuctionImage>
      </ImageContainer>

      {tag.toLowerCase() === "in progress" && (
        <Actions>
          <DeleteButton>
            <FiTrash size={16}></FiTrash>
          </DeleteButton>
          <EditButton>
              <FiEdit size={16}></FiEdit>
            Edit
          
          </EditButton>
        </Actions>
      )}
    </Card>
  );
};
export default AuctionCard;
