import { useEffect, useState } from "react";

const Search = ({ handleGetSearchValue, width }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  useEffect(() => {
    handleGetSearchValue(search, showSearch);
  }, [showSearch]);

  return (
    <div className="d-flex justify-content-end me-lg-5 me-md-2 me-sm-3">
      <input
        className={`form-control me-2 ${width.width}`}
        type="text"
        placeholder="Search Name"
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => setShowSearch(true)}
        onKeyUp={(e) => {
          e.preventDefault();
          e.key === "Enter" && setShowSearch((prev) => !prev);
        }}
      />
      <button
        className="btn btn-outline-primary"
        type="button"
        onClick={() => setShowSearch(false)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;

//../pages/Report.jsx
