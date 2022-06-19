/* Your Code Here */


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}



let createEmployeeRecords = function(employeeDetails) {
    return employeeDetails.map(function(row){
        return createEmployeeRecord(row)
    })
}


function createTimeInEvent(dateStamp) {
    let timeInEvent = {
        type: 'TimeIn',
        hour: Number(dateStamp.slice(11, 15)),
        date: dateStamp.slice(0, 10)
    }
     this.timeInEvents.push(timeInEvent);
     return this
}



function createTimeOutEvent(aDateStamp) {
    let timeOutEvent = {
        type: 'TimeOut',
        hour: Number(aDateStamp.slice(11, 15)),
        date: aDateStamp.slice(0, 10)
    }
    this.timeOutEvents.push(timeOutEvent);
    return this
}


function hoursWorkedOnDate(aDateStamp) {
    let date = aDateStamp.slice(0, 10);
    let inDate = this.timeInEvents.find(function(element) {
        return element.date === date;
    })
    let outDate = this.timeOutEvents.find(function(element) {
        return element.date === date;
    })
    let inTime = inDate.hour / 100;
    let outTime = outDate.hour / 100;
    return outTime - inTime;
}


function wagesEarnedOnDate (aDateStamp) {
    return this.payPerHour * hoursWorkedOnDate.call(this, aDateStamp)
}


function findEmployeeByFirstName (srcArray, firstName) {
    return srcArray.find(function(element) {
        return element.firstName === firstName;
    })
}




const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



function calculatePayroll (records) {
    let total = 0
    for (let i = 0; i < records.length; i++) {
        total = allWagesFor.call(records[i]) + total
    }
    return total
}


