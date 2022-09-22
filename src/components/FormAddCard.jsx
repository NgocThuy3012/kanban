import { useState } from "react"
import {BsX} from "react-icons/bs"
function FormAddCard(props){
    const [title, setTitle] = useState(
        {
            text:'',
            class: props.keyStorage
        }
    )
    const [list, setList] = useState(JSON.parse(localStorage.getItem(props.keyStorage)))
   
    const handelTitle = (e) =>{
        setTitle({...title,text :e.target.value})
    }
    const insertCard = (e) =>{
        setList(pre=>{
            const newCard = [...pre, title]
            const jsonCard = JSON.stringify(newCard)
            localStorage.setItem(props.keyStorage, jsonCard)
            props.close()
        })
        console.log(title)
    }
    return(
        <div className='card-item'>
            <input className="input-title" onChange={e=>handelTitle(e)} name='title' type={'text'} placeholder='Enter a title for this card...'/>
            <div className="group-button">
                <button className="button" onClick={e=>insertCard(e)} >Add card</button>
                <BsX className="icon-exit" onClick={props.click}/>
            </div>
        </div>
    )
}
export default FormAddCard