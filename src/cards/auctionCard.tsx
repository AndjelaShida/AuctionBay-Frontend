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
import { useNavigate } from "react-router-dom";


interface Props {
  image: string;
  tag: string;
  tagColor: string;
  timeLeft: string;
  title: string;
  price: string;
  showAuctions?: boolean;
}

const AuctionCard: React.FC<Props> = ({
  //6 u prvom redu, 5 u drugom
  image,
  timeLeft,
  tag,
  tagColor,
  title,
  price,
  showAuctions = false,
}) => {
  const tagLower = tag.toLowerCase();

const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/editauction');
  }

  return (
    <Card tag={tagLower}>
      <CardContent>
        <Header>
          {tagLower !== "done" && timeLeft && (
            <Time tag={tagLower}>
              {timeLeft}
              <FiClock size={14} />
            </Time>
          )}
        </Header>

        <Tag tag={tagLower} tagColor={tagColor}>
          {tag}
        </Tag>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </CardContent>

      <ImageContainer>
        <AuctionImage src={image} alt={title} />
      </ImageContainer>

      {/* Prikazivanje akcija samo za "in progress" */}
      {showAuctions && tagLower === "in progress" && (
        <Actions>
          <DeleteButton>
            <FiTrash size={16}  />
          </DeleteButton>
          <EditButton onClick={handleEditClick}>
            <FiEdit size={16} />
            Edit
          </EditButton>
        </Actions>
      )}
    </Card>
  );
};

export default AuctionCard;
