export default function Card(props){
    
    return<>
        <div>
            <img src={props.imageSrc} onClick={props.OnClick}></img>
            <span className="font-bold">{props.title}</span>
        </div>
    </>
}