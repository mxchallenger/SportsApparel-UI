import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import demographicFilters from './DemographicFilterData';
import './Filter.css';

function Filter({ setUpdatedFilters, pushover }) {
  const [sidebar, setSidebar] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [filterDemographic, setFilterDemographic] = useState('');
  const [checkedMens, setCheckedMens] = useState(false);
  const [checkedWomens, setCheckedWomens] = useState(false);
  const [checkedKids, setCheckedKids] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const handleOnChange = (id) => {
    if (id === 1) { setCheckedMens(!checkedMens); }
    if (id === 2) { setCheckedWomens(!checkedWomens); }
    if (id === 3) { setCheckedKids(!checkedKids); }
    const updatedMultipleFilterAddy = () => {
    };
    setIsChecked(!isChecked);
    setFilterDemographic(updatedMultipleFilterAddy);
  };

  const handleFilters = () => {
    setUpdatedFilters(filterDemographic);
  };
  const sidebarPush = () => {
    showSidebar();
    pushover(!sidebar);
  };

  return (
    <>
      <div className="wrapper" id="filter">
        <div className="menu-bars">
          <AiOutlineMenu onClick={sidebarPush} />
        </div>

      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <ul className="navbar-toggle">
            <div>
              <AiOutlineClose onClick={sidebarPush} />
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
