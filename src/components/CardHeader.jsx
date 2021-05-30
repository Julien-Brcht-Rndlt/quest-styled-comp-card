import { CardContainer } from '../styles/card.jsx'
import { CardHeaderContainer, ImgContainer, DescContainer, Title, DetailContainer } from '../styles/cards.jsx'

export default function CardHeader({ album = 'album #1', track = 'track #1', release = '2021', image = null}){
    return(
        <CardHeaderContainer>
            <ImgContainer>
                <img src={image} alt={`${album} - ${track} - display`} />
            </ImgContainer>
            <DescContainer>
                <Title>{ album }</Title>
                <DetailContainer>
                    <span>{ track }</span>
                    <span>{ release }</span>
                </DetailContainer>
            </DescContainer>
        </CardHeaderContainer>
    )
}