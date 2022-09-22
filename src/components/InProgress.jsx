import CardItem from "./CardItem"

function InProgress(){
    const listCards = JSON.parse(localStorage.getItem('inprogress')) 
    return(
        <div className='list-card'>
        {listCards.map((item,index)=>(
                <CardItem
                    info={item}
              />
           ))}
                  <div className='card-item bg-b'>
                    <div className='card-content'>
                      <div>Upcoming performance reviews:</div>
                      <ul>
                        <li>Jacob ✓</li>
                        <li>Aubrey ✓</li>
                        <li>Devon (Postponed!)</li>
                        <li>Katie</li>
                        <li>Bassam</li>
                        <li>Gerald</li>
                      </ul>
                    </div>
                  </div>
        </div>
    )
}
export default InProgress