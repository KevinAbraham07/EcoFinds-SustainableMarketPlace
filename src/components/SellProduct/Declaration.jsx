export default function Declaration() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-2">
        <input type="checkbox" className="mt-1" />
        <p className="text-sm">
          I declare that all information provided is true and complete to the best of my knowledge and belief.
        </p>
      </div>

      <button className="bg-green-600 text-white px-6 py-3 rounded block mx-auto">
        Add Product
      </button>
    </div>
  );
}
