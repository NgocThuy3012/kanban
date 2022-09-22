import {BsX} from "react-icons/bs"
import {IoMdList} from "react-icons/io"
import {AiOutlineUser} from "react-icons/ai"
import {MdOutlineAccessTime} from "react-icons/md"
import {FiPaperclip} from "react-icons/fi"
import { useState } from "react"
import { indexOf } from "lodash-es"
function CardDetail(props){
    const [array, setArray] = useState(props.array) 
    let cards = JSON.parse(localStorage.getItem(props.keyStorage))
    const [show, setShow] = useState(false)
    const [showDescription, setShowDescription] = useState(true)
    const [showInsert, setShowInsert] = useState(!array.content)
    const removeCard = (e) => {
        cards.splice(props.index,1)
        localStorage.setItem(props.keyStorage,JSON.stringify(cards))
        props.close()
    }
    const handelInsertDescription = (e) => {
        setArray({...array,content : e.target.value})
    }
    const save = (e) => {
        console.log(array)
        setShow(false)
        cards[props.index] = array
        console.log(cards)
        localStorage.setItem(props.keyStorage, JSON.stringify(cards))
    }
    const cacel = (e) => {
        setShowDescription(true)
        setShow(false)
    }
    const editDescription = (e) => {
        setShow(true)
        setShowDescription(false)
        setShowInsert(true)
    }
    const removeAttachment = () => {
        delete array.img;
        cards[props.index] = array
        console.log(cards)
        localStorage.setItem(props.keyStorage, JSON.stringify(cards))
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
                       {showDescription && <button onClick={(e)=>{editDescription(e)}}>Edit</button>}
                    </div>
                   
                       {showDescription && <div className="description-content">{array.content}</div>}
                        {showInsert  &&<textarea className="more-detail-description" value={array.content} onClick={()=>{setShow(true); setShowDescription(false)}}  onChange={e=>handelInsertDescription(e)} placeholder='Add a more detail desciption...'/>}
                       {show && <div>
                            <button className="button" onClick={(e)=>{save(e)}}>Save</button>
                            <button className="btn-cancel button" onClick={(e)=>{cacel(e)}}>Cancel</button>
                        </div>}
                        
                </div>
                {array.img && <div className="attachments">
                    <div className="description-title">
                        <FiPaperclip/>
                        <h4>Attachments</h4>
                    </div>
                    <div className="description-content">
                        {array.img && <img className='image-detail' src={array.img.img} alt=""/>}
                        
                        <span onClick={()=>removeAttachment()}>Remove</span>
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