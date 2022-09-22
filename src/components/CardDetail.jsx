import {BsX} from "react-icons/bs"
import {IoMdList} from "react-icons/io"
import img from "../assets/img/mountains.jpg"
import {AiOutlineUser} from "react-icons/ai"
import {MdOutlineAccessTime} from "react-icons/md"
import {FiPaperclip} from "react-icons/fi"
import { useState } from "react"
function CardDetail(props){
    const array = props.array
    const [cards, setCard] = useState(JSON.parse(localStorage.getItem(props.keyStorage)))
    const [show, setShow] = useState(false)
    const removeCard = (e) => {
        cards.splice(props.index,1)
        localStorage.setItem(props.keyStorage,JSON.stringify(cards))
        props.close()
    }
    const handelDescription = () => {

    }
    return(
        <div className="detail-container">
            <div className="exit-detail">
                <BsX className="icon-exit-detail" onClick={props.close}/>
            </div>
            <div>{array.img && <img className='image-attachments' src={array.img.img} alt=""/>}</div>
            
            <div className="detail-title">{array.text}</div>
            <div className="detail-content">
                <div className="description">
                    <div className="description-title">
                        <IoMdList/>
                        <h4>Description</h4>
                       {array.content && <button>Edit</button>}
                    </div>
                        <div className="description-content">{array.content}</div>
                        {<input className="more-detail-description" onClick={()=>{setShow(true)}} onChange={e=>handelDescription(e)} name='title' type={'text'} placeholder='Add a more detail desciption...'/>}
                       {show && <div>
                            <button className="button" >Save</button>
                            <button className="btn-cancel button" >Cancel</button>
                        </div>}
                        
                </div>
                {array.img && <div className="attachments">
                    <div className="description-title">
                        <FiPaperclip/>
                        <h4>Attachments</h4>
                    </div>
                    <div className="description-content">
                        {array.img && <img className='image-detail' src={array.img.img} alt=""/>}
                        
                        <span>Remove</span>
                        <span>Edit</span>
                    </div>
                </div>}
            </div>
            <div className="detail-menu">
                <div>Add to card</div>
                <div className="menu-item">
                    <AiOutlineUser/>
                    <span>Members</span>
                </div>
                <div className="menu-item">
                    <MdOutlineAccessTime/>
                    <span>Date</span>
                </div>
                <div className="menu-item">
                    <FiPaperclip/>
                    <span>Attachments</span>
                </div>
                <div className="remove-card">
                    <button className="remove-card-btn" onClick={e=>removeCard(e)}>Remove card</button>
                </div>
            </div>
        </div>
    )
}
export default CardDetail