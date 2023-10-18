import React from 'react'
import './App.css';
const { useState } = React;
function App() {
  const [birthDate, setBirthDate] = useState("");
        const [years, setYears] = useState(null);
        const [months, setMonths] = useState(null);
        const [days, setDays] = useState(null);

        const calculateAge = (birthDate) => {
          if (!birthDate) return;

          const currentDate = new Date();
          if (new Date(birthDate) > currentDate) {
            setBirthDate("");
            setYears(null);
            setMonths(null);
            setDays(null);
            alert("Invalid Date of Birth");
            return;
          }

          const diffTime = currentDate - new Date(birthDate);
          const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
          setYears(Math.floor(totalDays / 365.25));
          setMonths(Math.floor((totalDays % 365.25) / 30.4375));
          setDays(Math.floor((totalDays % 365.25) % 30.4375));
        };
  return (
    <div className="container">
            <h3>Age Calculator</h3>
            <form className='form'>
              <label>Enter your date of birth</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(e.target.value);
                  calculateAge(e.target.value);
                }}
              />
              <button className='button'>Submit</button>
            </form>
            {birthDate && (
              <p><b>
                Your age is {years} years, {months} months, and {days} days
                </b>
              </p>
            )}
          </div>
  );
}

export default App;
