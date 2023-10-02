import { useState } from "react";
import { useNavigate } from "react-router";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search  order"
        className="px-4 py-2 text-sm transition-all duration-300 bg-yellow-100 rounded-full sm:focus-w-72 focus-ring w-28 placeholder:text-stone-400 focus:ring-yellow-500 sm:w-64"
        value={query}
      />
    </form>
  );
};

export default SearchOrder;
