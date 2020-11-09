function displayDay(now=moment()){
    $("#currentDay").text(now.format("dddd, MMMM Do"));

    console.log(now);
    var actualHour = now.hour();
    // console.log(actualHour);  
}
displayDay();

function updateTimeCells(now=moment()){
    var actualHour = now.hour();
    console.log(actualHour);

    for (i = 9; i<=17; i++){
        if (actualHour>i){
            $("#txt"+i).addClass("past");
        }else if (actualHour ==i){
            $("#txt" + i).addClass("present");
        }else if (actualHour<i){
            $("#txt" + i).addClass("future");
        }
    }
    
    
    

}
updateTimeCells();


$(".container").on("click", "button", storage );

function storage(event){
    event.preventDefault();

//obtain hour from button clicked//

    var hourClicked = $(event.target).data("hour");

//obtain info from text area

    var info = $(event.target).prev().val(); 

    localStorage.setItem("scheduled-hour-"+ hourClicked, info);
    // console.log(localStorage);

storage(event);
};
 