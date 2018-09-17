/*-- This script creates and sends a from for collecting availabilty from approved public witnessing publishers --*/


// declare global variables
var d = new Date();
var year = d.getFullYear();

function getCurrentMonth() {
    var month = d.getMonth();
    switch (month) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
    } 
}

var month = getCurrentMonth();

// create form, name and open it
function createForm() {
    var form = FormApp.create(month + " " + year + " Public Witnessing Availability"); 

}

// collect email addresses (required)

// get names of approved publishers from "Approved For Public Witnessing" group in Google Contacts

// create the "Name" dropdown choice

// add required question: "Did your availability change from last month?"

// if "Yes" continue to next section, otherwise submit form

// add required question: "Select days and times you are available to participate in public witnessing"

// add required question: "Have you attended training for public witnessing either through metro, 
// your group overseer or the service overseer?

// if "Yes", continue to next section, otherwise submit form

// add required question: "Approximate date of last training"

// add settings; collect email addresses, response receipts if respondent requests it and allow edit after submit
// show link to submit another response
// add confirmation message
/* Your availability has been submitted.  We will be posting the schedule for next month soon.  
 * If you have not attended public witnessing training recently, we may be inviting you to attend 
 * our next training before we include you on the schedule. Thank you again! */

function myFunction() {
  
}
