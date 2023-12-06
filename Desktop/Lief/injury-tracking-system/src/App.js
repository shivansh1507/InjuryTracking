import React from 'react';
import Header from './components/Header/Header';
import CreateInjuryReportForm from './components/InjuryReports/CreateInjuryReportForm';
const App = () => {
  return(
   <div className='w-full max-w-[1440px] mx-auto bg-white'> 
   <Header />
   <CreateInjuryReportForm />
   </div>
  );
};

export default App;
