import CardHeader from './CardHeader'
import CardBody from './CardBody'

import { CardContainer } from '../styles/card.jsx'

export default function Card(){
    return(
        <CardContainer>
            <CardHeader/>
            <CardBody/>
        </CardContainer>
    )
}