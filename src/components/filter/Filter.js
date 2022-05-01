import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { IconContext } from 'react-icons';
import demographicFilters from './DemographicFilterData';
import './Filter.css';

function Filter() {
  const [sidebar, setSidebar] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="wrapper" id="filter">
        <div className="menu-bars">
          <AiOutlineMenu onClick={showSidebar} />
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <ul className="navbar-toggle">
            <div>
              <AiOutlineClose onClick={showSidebar} />
            </div>
          </ul>
          <li className="Demographics">
            <div id="Demographics" />
            <h2>Demographics</h2>
          </li>
          {demographicFilters.map((item, index) => (
            <>
              <li key={item} className={item.cName}>
                <div className="DemographicsList">
                  <input
                    type="checkbox"
                    id="demographics"
                    name="demographics"
                    value="demographics"
                    checked={isChecked[index]}
                    onChange={() => handleOnChange(index)}
                  />
                </div>
                <span>{item.title}</span>
              </li>
            </>
          ))}
        </ul>
        <ul className="ApplyButton">
          <div id="ApplyButton">
            <button type="submit"> Apply Filter </button>
          </div>
        </ul>
      </nav>
    </>
  );
}
export default Filter;
