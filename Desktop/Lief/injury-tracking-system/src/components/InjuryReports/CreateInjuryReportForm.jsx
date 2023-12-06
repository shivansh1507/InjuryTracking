import React, { useState } from 'react';
import BodyMap from '../BodyMap/BodyMap';
import './createInjuryReportForm.css'; // Import the CSS file

function CreateInjuryReportForm() {
  const [reporterName, setReporterName] = useState('');
  const [injuryDate, setInjuryDate] = useState('');
  const [selectedAreas, setSelectedAreas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAreaClick = (areas) => {
    setSelectedAreas(areas);
  };

  return (
    <div>
      <h2>Create Injury Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reporterName">Name of Reporter:</label>
          <input
            type="text"
            id="reporterName"
            value={reporterName}
            onChange={(e) => setReporterName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="injuryDate">Date & Time of Injury:</label>
          <input
            type="datetime-local"
            id="injuryDate"
            value={injuryDate}
            onChange={(e) => setInjuryDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Body Map:</label>
          <BodyMap onAreaClick={handleAreaClick} />
        </div>

        <div className="form-group">
          <p>Selected Areas: {selectedAreas.join(', ')}</p>
        </div>

        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateInjuryReportForm;
