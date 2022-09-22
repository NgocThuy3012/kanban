import { useState } from "react"
import {RiCalendarCheckLine} from "react-icons/ri"
import avatar from "../assets/img/avatar.jpg"
import CardDetail from "./CardDetail"
function CardItem (props){
    const [showDetail, setShowDetail] = useState(false)
    const array = props.info
    const show = (e) => {
        setShowDetail(true)
    }
    const close = (e) => {
        setShowDetail(false)
    }
    return(
        <><div className='card-item' onClick={(e)=>show(e)}>
            {array.img && <img className='card-img' src={array.img.img} alt=""/>}
            {array.background && <div className="card-img"></div>}
            <div className='card-title'>
                 <h1 className='card-text'>{array.text}</h1>
                {array.icon && <img src={array.icon.icon} alt=""/>}
            </div>
            {array.content && <div className="card-content">{array.content}</div>}
            <div className='card-date'>
                <div>
                    <RiCalendarCheckLine className="icon"/>
                    {<span>{array.date}</span>}
                </div>
                <img src={avatar} alt=""/>
            </div>
            <div className={'card_time-line '+ array.class}><span></span></div>
        </div>
        {showDetail &&<div className="over-play">
            <CardDetail 
                array={array} 
                close={e=>close(e)} 
                keyStorage={props.keyStorage}
                index={props.index}
            />
        </div> }
        </>
    )
}
export default CardItem