import React from 'react'

export default function Friendlist(props){
    
    return (
        <>
            <div>
                <ul className="border-2 w-xl bg-blue-50" >
                    <li className="flex my-15 ml-2">            
                        <img className="size-15" src={props.image} />
                        <h1 className=" text-l font-bold ml-5">{props.name}</h1>
                    </li>
                     <div className="">
                        {props.balance > 0 && <p className="text-green-600">{props.name} owes you {props.balance}</p>}
                        {props.balance < 0 && <p className="text-red-500">You owe {props.name} {props.balance}</p>}
                        {props.balance == 0 && <p className="text-gray-600">You don't owe each other anything</p>}
                    </div>
                </ul>
            </div>
        </>
    )

}