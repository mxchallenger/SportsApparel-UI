import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import './Filter.css';

function Filter({ applyFilters, setUrlQuery }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const demographicFilters = [
    {
      id: 1,
      title: 'Men',
      cName: 'navText',
      filterAddy: '&demographic=Men&',
      value: false
    },
    {
      id: 2,
      title: 'Women',
      cName: 'navText',
      filterAddy: '&demographic=Women&',
      value: false
    },
    {
      id: 3,
      title: 'Kids',
      cName: 'navText',
      filterAddy: '&demographic=Kids&',
      value: false
    }
  ];
  const [filters, setFilters] = useState({
    demographic: demographicFilters
  });

  /**
 * @name handleFilterChange
 * @description updates the filter state off of the selected option
 */
  const handleFilterChange = (section, filterId, event) => {
    if (section === 'demographics') {
      const productDemographic = filters.demographic;
      productDemographic[filterId].value = event.target.value;
      setFilters({
        ...filters,
        demographics: productDemographic
      });
    } else {
      const updatedFilters = filters[section].map((filter) => {
        const f = filter;
        if (f.id === filterId) {
          f.value = !filter.value;
        }
        return f;
      });
      setFilters({
        ...filters,
        [section]: updatedFilters
      });
    }
  };

  /**
 * @name updateWebRoute
 * @description Filters products based upon the newly constructed query
 * @return returns products on ui based on web address
 */

  const updateUrlQuery = React.useCallback((query) => {
    setUrlQuery(query);
  }, [setUrlQuery]);
  React.useEffect(() => {
    let query = '';
    const sections = Object.keys(filters);
    sections.forEach((section) => {
      if (section === 'demographics') {
        const demographics = filters.demographic;
        if (demographics[0].value) {
          query += `${demographics[0].filterAddy}${demographics[0].value}&`;
        }
        if (demographics[1].value) {
          query += `${demographics[1].filterAddy}${demographics[1].value}&`;
        }
      } else {
        filters[section].forEach((filter) => {
          if (filter.value) {
            query += filter.filterAddy;
          }
        });
      }
    });
    updateUrlQuery(query);
  }, [filters, updateUrlQuery]);

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
          {filters.demographic.map((item) => (
            <>
              <ul key={item} className={item.cName}>
                <div className="DemographicsList">
                  <input
                    type="checkbox"
                    id="demographics"
                    name="demographics"
                    value="demographics"
                    checked={item.value}
                    onClick={() => handleFilterChange('demographic', item.id)}
                  />
                </div>
                <span>{item.title}</span>
              </ul>
            </>
          ))}
        </ul>
        <ul className="ApplyButton">
          <div id="ApplyButton">
            <button type="submit" onClick={() => applyFilters(0)}> Apply Filter </button>

          </div>
        </ul>
      </nav>
    </>
  );
}

export default Filter;
