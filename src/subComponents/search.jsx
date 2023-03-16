import { useEffect, useState } from "react";

const Search = ({ handleGetSearchValue }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    handleGetSearchValue(search, showSearch);
  }, [showSearch]);

  return (
    <div className="d-flex mt-5 justify-content-end me-lg-5 me-md-2 me-sm-3">
      <input
        className="form-control me-2 w-auto"
        type="text"
        placeholder="Search Name"
        onChange={(e) => setSearch(e.target.value)}
        onClick={() => setShowSearch(true)}
        onKeyUp={(e) => {
          e.preventDefault();
          e.key == "Enter" && setShowSearch((prev) => !prev);
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
