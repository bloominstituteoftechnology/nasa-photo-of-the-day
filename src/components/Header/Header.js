import React from "react";

export default function Header(props) {
    const { date } = props;
    console.log('header',date)
    let changeDate = date.split("-")
    if (changeDate[1] === "12"){
      changeDate[1] = 'December'}
     else if (changeDate[1] === "11"){
      changeDate[1] = 'November'}
       else if (changeDate[1] === "10"){
        changeDate[1] = 'October'}
        else if (changeDate[1] === "09"){
          changeDate[1] = 'September'}
          else if (changeDate[1] === "08"){
            changeDate[1] = 'August'}
            else if (changeDate[1] === "07"){
              changeDate[1] = 'July'}
              else if (changeDate[1] === "06"){
                changeDate[1] = 'June'}
                else if (changeDate[1] === "05"){
                  changeDate[1] = 'May'}
                  else if (changeDate[1] === "04"){
                    changeDate[1] = 'April'}
                    else if (changeDate[1] === "03"){
                      changeDate[1] = 'March'}
                      else if (changeDate[1] === "02"){
                        changeDate[1] = 'February'}
                        else if (changeDate[1] === "01"){
                          changeDate[1] = 'January'}
    
    changeDate = `${changeDate[1]} ${changeDate[2]}, ${changeDate[0]}`

    console.log(changeDate)
                        
  
    return (
      <div className="header">
        <h1>NASA Photo of the Day</h1>
        <h2>{changeDate}</h2>
      </div>
    );}