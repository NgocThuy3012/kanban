function NoteItem(props){
    return(
        <div className={'card-item ' + props.class }>
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
        </div>
    )
}
export default NoteItem