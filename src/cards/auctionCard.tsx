import { AuctionImage, Card, CardContent, Header, ImageContainer, Price, Tag, Time, Title } from "./auctionCard.style";
import { FiClock } from "react-icons/fi";
interface Props {
    image: string;
    tag: string;
    tagColor: string;
    timeLeft: string;
    title: string;
    price:string;
}

const AuctionCard: React.FC<Props> = ({ image,  timeLeft, tag, tagColor, title, price }) => {
    return(
        <Card>
            <CardContent>
                           <Header>
                    <Time>
                        {timeLeft}
                        <FiClock size={14}></FiClock>
                    </Time>
                </Header>

                <Tag style={{ backgroundColor: tagColor}}>{tag}</Tag>
                <Title>{title}</Title>
                <Price>{price}</Price>
            
            </CardContent>

                     <ImageContainer>
              
                <AuctionImage src={image} alt={title}></AuctionImage>
            </ImageContainer>
         
        </Card>

    );
};
export default AuctionCard;
