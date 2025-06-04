export default function CalculationForm({ friend, setBalance }) {
    
    function handleBill(event){
       
       event.preventDefault()
       const formData = new FormData(event.currentTarget)
       const bill = Number(formData.get("bill"))
       const yourexpense = Number(formData.get("yourexpense"))
       const friendexpense = Number(formData.get("friendexpense"))
       const payer = formData.get("payer")

       if(payer === "you") {
        setBalance(prev => prev + friendexpense)
       }
       else (
        setBalance(prev => prev - yourexpense)
       )
       event.target.reset()
    }
    
    return (
        <>
            <form method="POST" onSubmit={handleBill} className="p-4 border mt-4 bg-white shadow-md w-2xl ml-150">
                <h1 className="font-bold">SPLIT A BILL WITH {friend.name}</h1><br></br>
                
                <label className="block font-semibold mb-2">Bill value</label>
                <input type="number" className="border px-2 py-1 rounded w-full" name="bill" />

                <label className="block font-semibold mb-2">Your expense</label>
                <input type="number" className="border px-2 py-1 rounded w-full" name="yourexpense" />

                <label className="block font-semibold mb-2">{friend.name}'s expense</label>
                <input type="number" className="border px-2 py-1 rounded w-full" name="friendexpense" />
                
                <br></br>
                <br></br><label className="block font-semibold">Who is paying the bill?</label><br></br>
                <select id="payer" name="payer" defaultValue="" required>
                    <option value="you">You</option>
                    <option value={friend.name}>{friend.name}</option>
                </select><br></br>
                <br></br>
                <button type="submit" className="ml-140">Split Bill</button>
            </form>
        </>
    )
}
