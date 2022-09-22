import { useState } from "react"
import CardItem from "./CardItem"
import FormAddCard from "./FormAddCard"
import {BsPlusLg} from "react-icons/bs"

function Status(props){
    const [show, setShow] = useState(true)
    const listCards = JSON.parse(localStorage.getItem(props.keyStorage)) 
    return(
        <>
        <div className='col-title'>{props.title}</div>
                <div className='line'></div>
                <div className='list-card'>
        {listCards.map((item,index)=>(
                <CardItem
                    key={index}
                    info={item}
                    keyStorage={props.keyStorage}
                    index={index}
                />
            ))}
        </div>
                {show && <div className='insert-card' onClick={()=>setShow(false)}>
                  <BsPlusLg/>
                  <span>Add a card</span>
                </div>}
                {!show && <FormAddCard 
                    click={()=>setShow(true)}
                    close = {()=>setShow(true)}
                    keyStorage={props.keyStorage}
                />}
       
        </>
    )
}
export default Status