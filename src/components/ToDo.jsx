import icon from "../assets/img/icon.png"
import img from "../assets/img/mountains.jpg"
import CardItem from "./CardItem"
import NoteItem from "./NoteItem"
function ToDo(){
    const listCards = JSON.parse(localStorage.getItem('todo')) 

    return(
        <div className='list-card'>
           {listCards.map((item,index)=>(
                <CardItem
                    info={item}
              />
           ))}
        
        {/* <div className='card-item bg-pink'>
          <div className='card-content'>
            <div>Shopping list:</div>
            <ul>
              <li>Milk</li>
              <li>Eggs</li>
              <li>Bread</li>
              <li>Soda</li>
              <li>Chips</li>
            </ul>
          </div>
        </div> */}
        <NoteItem 
          class='bg-pink'
        />
        <div className='card-item bg-yelow'>
          <div className='card-content'>
            <div>Call aunt Edna ASAP! </div>
            <ul>
              <li> Rory’s library books are overdue.</li>
              <li>Millie’s dentist appointment is cancelled.</li>
            </ul>
          </div>
        </div>
      </div>
    )
}
export default ToDo