export function within24Hours(inputDate){
    //make sure the date inputted is in the proper JavaScript date format
    const dtLastUpd = new Date(inputDate);

    //get the current date/time
    const dtNow = new Date();

    //get the number of milliseconds between the two instantiated dates 
    const millisecsBetweenDt = Math.abs(dtLastUpd.getTime() - dtNow.getTime());

    //convert the milliseconds to hours
    const hoursBetweenDts = millisecsBetweenDt / (60 * 60 * 1000);

    //finally check if there are more/less than 24 hours between the two dates
    if (hoursBetweenDts < 24) {
        return false
    } else {
        return true
    }
    }