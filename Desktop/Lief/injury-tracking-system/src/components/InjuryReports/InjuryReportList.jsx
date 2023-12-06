import React from 'react';

function InjuryReportList() {
  // Fetch the list of injury reports from the server or state
  const reports = []; // Replace with actual data

  return (
    <div>
      <h2>Injury Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Name of Reporter</th>
            <th>Date & Time of Injury</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.reporterName}</td>
              <td>{report.injuryDate}</td>
              <td>
                <button>View</button>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InjuryReportList;
