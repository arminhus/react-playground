import React, { Component } from "react";

import "./countrySelector.css";

class CountrySelector extends Component {
  render() {
    const options = this.props.countries.map((country, i) => (
      <option value={country.name} key={i}>
        {country.name}
      </option>
    ));

    return (
      <div className="country-selector">
        <form>
          <label htmlFor="country">Select a country:</label>
          <select id="country" name="country">
            <options value="None">Select one . . .</options>
            {options}
          </select>
        </form>
      </div>
    );
  }
}

CountrySelector.defaultProps = {
  countries: []
};

export default CountrySelector;
