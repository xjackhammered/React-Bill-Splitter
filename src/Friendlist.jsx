export default function Friendlist(props){
    return (
        <>
            <div>
                <ul>
                    <li className="flex my-15 ml-2">            
                        <img className="size-15" src={props.image} />
                        <h1 className=" text-l font-bold ml-5">{props.name}</h1>
                    </li>
                </ul>
            </div>
        </>
    )

}