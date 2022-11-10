import "./header.scss";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

function Header({ setSearchVal, searchVal }) {
  const handleInput = (e) => {
    setSearchVal(e.target.value);
  };

  const handleClearBtn = () => {
    setSearchVal("");
  };

  return (
    <div class="headerContainer">
      <div className="container">
        <div className="input-wrap">
          <BsSearch />
          <label for="product-search" id="input-label">
            Product Search
          </label>
          <input
            onChange={handleInput}
            value={searchVal}
            type="text"
            name="product-search"
            id="product-search"
            placeholder="Search an album"
          />
          <div onClick={handleClearBtn}>
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
