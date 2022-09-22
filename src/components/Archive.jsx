import CardItem from "./CardItem"

function Archive(){
    const listCards = JSON.parse(localStorage.getItem('archive')) 
    return(
        <div className='list-card'>
                  {listCards.map((item,index)=>(
                <CardItem
                    info={item}
              />))}
                  <div className='card-item '>
                    <div className='card-content'>
                      <div>DON’T FORGET TO MEDITATE!</div>
                    </div>
                  </div>
                  
                  <div className='card-item bg-yelow'>
                    <div className='card-content'>
                      <div>Inbox ZERO! (Every Fri-yay!)</div>
                     <div>💃🏻 💃🏻 💃🏻</div>
                    </div>
                  </div>
                </div>
    )
}
export default Archive