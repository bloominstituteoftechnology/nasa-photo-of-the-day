import React, {Component} from "react";
import DatePicker from "react-date-picker";
import PhotoCardInfo from "./PhotoCardInfo";
import {PhotoOfTheDay} from "./CardStyles.js";

 
//import 'react-datepicker/dist/react-datepicker.css';
import * as moment from "moment";

export default class DatePickerComponent extends React.Component {  
      
constructor (props) {

    super(props)
    this.state = {
        startDate: moment().format('YYYY-MM-DD')
        //startDate: ""
    };
    this.handleChange = this.handleChange.bind(this);        
}
    
/*state = {
    //startDate: new Date()
    startDate: moment()      
};*/

handleChange = date => {    
    
    this.setState({         
    //startDate: date 
        startDate: moment(date).format('YYYY-MM-DD')       
    });

    //let unformattedDate = this.state.startDate;

    //format date in MM-DD-YYYY format
    //let formattedDate = unformattedDate.format('MM-dd-y');      

    console.log("date", this.state.startDate);           
    
};//end handleChange



render() {
    return (
        <PhotoOfTheDay >

            <DatePicker            
            selected={this.state.startDate}
            onChange={this.handleChange}
            name = "startDate"
            dateFormat = 'YYYY-MM-DD'
            />

            <PhotoCardInfo searchDate = {this.state.startDate} />
        

        </PhotoOfTheDay>
    );
}
}