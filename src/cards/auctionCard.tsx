import { useState } from "react";
import axios from "axios"; 
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
import { FiClock, FiEdit, FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface Props {
  auctionId: number;
  image: string;
  tag: string;
  tagColor: string;
  timeLeft: string;
  title: string;
  price: string;
  showAuctions?: boolean;
  highlightTime?: boolean;
}

const AuctionCard: React.FC<Props> = ({
  auctionId,
  image,
  timeLeft,
  tag,
  tagColor,
  title,
  price,
  showAuctions = false,
  highlightTime = false,
}) => {
  const tagLower = tag.toLowerCase();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEditClick = () => {
    navigate("/editauction");
  };

  const handleDeleteClick = async () => {
    if (!window.confirm("Are you sure you want to delete this auction?")) return;

    try {
      setIsDeleting(true);

      await axios.delete(`/auction/${auctionId}`, {
        headers: {  
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      alert("Auction deleted successfully");
      
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to delete auction");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Card $tag={tagLower}>
      <CardContent>
        <Header>
          {tagLower !== "done" && timeLeft && (
            <Time $tag={tagLower} $highlightTime={highlightTime}>
              {timeLeft}
              <FiClock size={14} />
            </Time>
          )}
        </Header>

        <Tag $tag={tagLower} $tagColor={tagColor}>
          {tag}
        </Tag>
        <Title>{title}</Title>
        <Price>{price}</Price>
      </CardContent>

      <ImageContainer>
        <AuctionImage src={image} alt={title} />
      </ImageContainer>

      {showAuctions && tagLower === "in progress" && (
        <Actions>
          <DeleteButton onClick={handleDeleteClick} disabled={isDeleting}>
            <FiTrash size={16} />
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
