export default function CalculationForm({ friend }) {
    return (
        <>
            <form method="POST" className="p-4 border mt-4 bg-white shadow-md w-2xl ml-150">
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
                <button className="ml-140">Split Bill</button>
            </form>
        </>
    )
}
