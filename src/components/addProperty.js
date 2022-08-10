import React, {useContext, useState} from 'react';
import BasicInfo from "./basicInfo";
import PropertyDetails from "./propertyDetails";
import GeneralInfo from "./generalInfo";
import LocationInfo from "./locationInfo";
import Sidebar from "./sideBar";
import Header from "./header";
import "./general.css";
import {multiStepContext} from "./stepContext";

const AddProperty = () => {	
	const {currentStep, finalData} = useContext(multiStepContext);	

	function showStep(step){
		switch(step){
			case 1:
			return <BasicInfo/>
			case 2:
			return <PropertyDetails/>
			case 3:
			return <GeneralInfo/>
			case 4:
			return <LocationInfo/>
		}
	}
	return(
		<div>
		<Sidebar/>
		<Header/>
			<h2 className="h3">Add New Property</h2>
			<div className="steps">
			<div className="step1" id="l1"><label>1 Basic Info</label>
				</div> 
			<div className="step1" id="l1"><label>2 Property Details</label>
			</div>
			<div className="step1" id="l1"><label>3 General Info</label>
				</div> 
			<div className="step1" id="l1"><label>4 Location Info</label>
				</div>
			</div>
			{showStep(currentStep)}
		</div>
	)
}

export default AddProperty;