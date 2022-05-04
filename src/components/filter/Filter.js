import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import demographicFilters from './DemographicFilterData';
import './Filter.css';

function Filter({ setUpdatedFilters }) {
  const [sidebar, setSidebar] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [filterDemographic, setFilterDemographic] = useState('');

  const showSidebar = () => setSidebar(!sidebar);
  const handleOnChange = (filterAddy) => {
    const updatedFilterAddy = (filterAddy + filterDemographic);
    setFilterDemographic(updatedFilterAddy);
    setIsChecked(!isChecked);
  };

  const handleFilters = () => {
    setUpdatedFilters(filterDemographic);
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
          {demographicFilters.map((item, id) => (
            <>
              <li key={item} className={item.cName}>
                <div className="DemographicsList">
                  <input
                    type="checkbox"
                    id="demographics"
                    name="demographics"
                    value="demographics"
                    checked={isChecked[id]}
                    onChange={() => handleOnChange(item.filterAddy)}
                  />
                </div>
                <span>{item.title}</span>
              </li>
            </>
          ))}
        </ul>
        <ul className="ApplyButton">
          <div id="ApplyButton">
            <button type="submit" onClick={handleFilters}> Apply Filter </button>

          </div>
        </ul>
      </nav>
    </>
  );
}
export default Filter;
