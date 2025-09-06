export default function Details() {
  return (
    <div className="space-y-6 mb-10">
      <div className="flex gap-4">
        <label className="block font-bold">Listing Type</label>
        <button className="bg-white text-green-800 px-4 py-2 rounded">Sale</button>
        <button className="bg-white text-green-800 px-4 py-2 rounded">Donation</button>
      </div>

      <div>
        <label className="block font-bold mb-2">Commodity Price</label>
        <input type="number" className="w-full p-2 rounded text-black" />
      </div>

      <div>
        <label className="block font-bold mb-2">Available Units</label>
        <input type="number" className="w-full p-2 rounded text-black" />
      </div>
    </div>
  );
}
