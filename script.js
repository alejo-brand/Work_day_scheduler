//this function displays the current day and the month with the corresponding cardinal number
function displayDay(now=moment()){
    $("#currentDay").text(now.format("dddd, MMMM Do"));

    console.log(now);
    var actualHour = now.hour();
    // console.log(actualHour);  
}
displayDay();

//this function allows to move through the number of time slots and change the color if the hour is past, present or it's to come//
function updateTimeCells(now=moment()){
    var actualHour = now.hour();
    console.log(actualHour);

    for (i = 9; i<=17; i++){
        if (actualHour>i){
            //we are using jquery to select the class with id = txt + i which is the variable created to generate the iterations
            $("#txt"+i).addClass("past");
        }else if (actualHour ==i){
            $("#txt" + i).addClass("present");
        }else if (actualHour<i){
            $("#txt" + i).addClass("future");
        }
        //this allows us to get the value stored in the local Storage using the key name and loading it up again in the text area, in case that the page gets refresehed//
        var aptSaved = localStorage.getItem("scheduled-hour-" + i)
        $("#txt" + i).text(aptSaved);
    }
    
    
    

}
updateTimeCells();


$(".container").on("click", "button", storage );
//this function listens to a click that happens at the children elements 'buttons' at the parent level and allows us to get the values from that event and text input and store them in local storage.//
function storage(event){
    event.preventDefault();

//obtain hour from button clicked//

    var hourClicked = $(this).data("hour");

//obtain info from text area

    var info = $(this).prev().val(); 

    localStorage.setItem("scheduled-hour-"+ hourClicked, info);
    // console.log(localStorage);

storage(event);
};
 