import React, { useState } from 'react';
import data from './cities.json';
import Input from './Input';
function App() {
  const [cities, setCities] = useState(data);
  const [filteredcities, setFilteredCities] = useState('');
  const changeHandler = e => {
    if (e.target.value != '') {
      setFilteredCities(
        cities.filter(city => {
          return city.includes(e.target.value);
        }),
      );
    }else{
       setFilteredCities("")
    }
  };
  return (
    <div>
      <Input handleChange={changeHandler} hint={filteredcities} />
    </div>
  );
}

export default App;
