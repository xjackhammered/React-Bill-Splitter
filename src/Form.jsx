import profile_picture from './assets/anonymous.webp'

export default function Form({setFriends}){
    
    function handleSubmit(event) {
       
       event.preventDefault()
       const formData = new FormData(event.currentTarget)
       const name = formData.get("name")
       const image = formData.get("image")

       const newFriend = {
        id: Date.now(),
        name: name,
        image: image,
        balance: 0,
       }

        setFriends(prev => [
            ...prev,
            newFriend
        ])
    }
    
    return (
        <form className="border-2 w-80" onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder="e.g John" name="name" id="name"/> <br></br>

            <label htmlFor="image">Image URL: </label>
            <input type="text" value={profile_picture} name="image" id="image" /> <br></br>
            <button className='bg-amber-600 w-auto'>Submit</button>
        </form>
    )
}