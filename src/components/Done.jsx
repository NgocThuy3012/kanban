import CardItem from "./CardItem"

function Done(){
    const listCards = JSON.parse(localStorage.getItem('done')) 
    return(
        <div className='list-card'>
                  {listCards.map((item,index)=>(
                <CardItem
                    info={item}
              />
           ))}
           
        </div>
    )
}
export default Done