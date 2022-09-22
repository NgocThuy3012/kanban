function NoteItem(props){
    const list = props.info.content
    return(
        <div className={'card-item ' + props.class }>
            <div className='card-content'>
                <div>{props.info.text}</div>
                    <ul>
                    {list.map((item,index)=>(
                <li>{item}</li>
            ))}
                    </ul>
            </div>
        </div>
    )
}
export default NoteItem