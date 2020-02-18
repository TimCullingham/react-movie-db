// About Page

import React, { Component } from 'react';

// for the startDate() & currentDate()
const DAYS_BACK = 182;  //182 days is approx 6 months

class About extends Component {

  getCurrentDate(){
    //    The month count starts at 0 so Janaury is month number 0.
   // initialize date object 
   const d = new Date();

   let year    = d.getFullYear();
   let month   = (Number(d.getMonth()) + 1);
   let day     = d.getDate()

   // their URL requires 2 characters for month, even if it's single month
   // so month of june being 6 is 06 on their date format
   // need to prevent month & day URL from being single character

   return this.getDateString(year, month, day);
 }

 getStartDate(){
     // initialize date object 
   const d = new Date();

   // subtracting 60 days to the current date if you wanted 2 months back.
   // let daysBack = 60;

   // subtracting 182 days/approx half a year to the current date.
   // const START_DATE
   d.setDate(d.getDate() - DAYS_BACK);

   let year    = d.getFullYear();
   let month   = (Number(d.getMonth()) + 1);
   let day     = d.getDate()
 
   return this.getDateString(year, month, day);
 }

 getDateString(year, month, day){
   if(month < 10) {
     month = '0' + month;
   }

   if(day < 10) {
       day = '0' + day;
   }
   let dateString = year + "-" + month + "-" + day;
   return dateString;
 }
 
    
  render() {
    return(
        <div className="section section-about">
            <div>
              <h2>Cinecide</h2>
              <p> The Watchlist movie database shows movie listings within the last 6 months, from [{this.getStartDate()}] until [{this.getCurrentDate()}].</p>
              <p> - The Database is always up to date.</p>
              <br/>
              <h2> Acknowledgements: </h2>
              <p> Made with <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React.js</a> - the React JavaScript Framework. </p>
              <p> Data and API Key borrowed from <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer"> The Movie Database </a>. </p>
              <p> * This product uses the <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer">TMDb API</a> - but is not endorsed or certified by TMDb. </p>
            </div>
        </div>
    ); 
  }
}
export default About;
