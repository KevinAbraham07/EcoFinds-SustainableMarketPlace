export default function ProductInfo() {
  return (
    <div className="space-y-4 mb-6">
      <div>
        <label className="block font-semibold text-sm mb-1">Product Name</label>
        <input
          type="text"
          className="w-full p-1.5 text-sm rounded border border-gray-300 text-black"
        />
      </div>

      <div>
        <label className="block font-semibold text-sm mb-1">Description</label>
        <textarea
          className="w-full p-1.5 text-sm rounded border border-gray-300 text-black"
          rows="3"
        ></textarea>
      </div>

      <div>
        <label className="block font-semibold text-sm mb-1">Brand</label>
        <select className="w-full p-1.5 text-sm rounded border border-gray-300 text-black">
          <option value="">Select a brand</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Apple">Apple</option>
          <option value="Samsung">Samsung</option>
          <option value="Sony">Sony</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold text-sm mb-1">Add Images</label>
        <input
          type="file"
          className="text-sm text-black"
          multiple
        />
      </div>
    </div>
  );
}
