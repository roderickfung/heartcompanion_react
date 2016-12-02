import React from 'react';
import $ from 'jquery';

function PatientList(props) {


  return (
    <div className='PatientList'>
      {
        props.patients.map(function(patient, index){
          return(
            <div className='container' key={patient.id}>
              <div className=''>
                {patient.first_name} {patient.last_name}
              </div>
              <div>
                <span><b>Age: </b></span>{patient.age}
              </div>
              <div className='list-space'></div>
            </div>
          )
        })
      }
    </div>
  )

}

export default PatientList;
