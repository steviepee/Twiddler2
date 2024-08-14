$(document).ready(() => {
  const $body = $('body');
  $body.html('');//clears the body

//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////  TWIDSPACE!   //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


$($body).css('background-color', 'purple')
$body.append("<div id='titular'></div><div id='twidSpace'></div>")
let $twidSpace = $('#twidSpace');

$($twidSpace).css( 'background-color', 'purple')
$($twidSpace).css( 'opacity', '0.')
$($twidSpace).css( 'border-radius', '4px 4px 4px 4px')
$($twidSpace).css( 'font-size', '12px')
$($twidSpace).css( 'font-weight', 'bold')
$($twidSpace).css( 'padding', '10px 7px 5px')
$($twidSpace).css( 'display', 'block')
$($twidSpace).css( 'height', '700px')
$($twidSpace).css( 'overflow', 'scroll');
$($twidSpace).css( 'padding', '25px 25px 25px 25px');
$($twidSpace).css( 'margin', 'auto')
$($twidSpace).css( 'width', '500px')


/////////////////////////////////////////////////////////////
///////////////////  TWID IT UP STYLER  /////////////////////
/////////////////////////////////////////////////////////////


$body.prepend('<div id="twid-up"><div id="twidButt"></div><button id="twid-more">Twid it up!</button></div>')

let $twidMore = ('#twid-more')

$($twidMore).css( 'background-color', 'blue')
$($twidMore).css( 'color', 'yellow')
$($twidMore).css( 'padding', '10px 5px')
$($twidMore).css( 'font-size', '24px')
$($twidMore).css( 'border-radius', '40px')
$($twidMore).css( 'font-family', 'comic sans')
$($twidMore).css( 'position', 'relative')
$($twidMore).css( 'width', '500px')
$($twidMore).css( 'padding', '25px 25px 25px 25px')

$("#twid-up").css( 'display', 'flex')
$("#twid-up").css( 'align-items', 'center')
$("#twid-up").css( 'justify-content', 'center')



 let $title = $("<div><h1 class='site-title'>TWIDDLER</h1><h3 class='twid-title'>Get Cha Twid on!</h3><div>")


 $body.prepend($title);
 $title.css('position', 'relative')
 $title.css('text-align', 'center')
 $title.css('font-family', 'comic sans')
 $title.css('font-size', '80px')
 
 $title.css('color', 'blue')
 $("h3").css('color', 'yellow')


 $("h3").css('margin', '4px')
 $("h3").css('position', 'center')
 $("h3").css('top', '66%')
 $("h3").css('left', '48%')


////////////////////////////////////////////////////////////
//////////////////  TWID BUTTON ////////////////////////////
////////////////////////////////////////////////////////////


  $twiddleButt = $("");

  $('#twid-more').click(function(){
    $twidSpace.append(makeTwids())
    $($twidSpace).animate({scrollTop: $($twidSpace).prop('scrollHeight')}, 50);
  })




$body.append('<div id="myTwid"></div>')

$myTwid = $('#myTwid');

$myTwid.append("<form id='twidAdd'><input type='text' id= 'speak' value= ''/ ><div class='butt-spacer'></div><button type='button' id='twiddle'>Twiddle your fingers</button></form>")

$($myTwid).css( 'display', 'flex')
$($myTwid).css( 'align-items', 'center')
$($myTwid).css( 'justify-content', 'center')
$($myTwid).css( 'height', '250px')

$('#twidAdd').css( 'padding', '12px 20px');
$('#twidAdd').css( 'margin', '8px 0');
$('#twidAdd').css( 'width', '500px');
//$('#twidAdd').css( 'align-items','center')

$('#speak').css('width', '50%')

$('#twiddle').css('width', '50%')
$('#twiddle').css( 'background-color', 'maroon')
$('#twiddle').css( 'padding', '15px 32px')
$('#twiddle').css( 'color', 'gold')
$('#twiddle').css( 'font-family', 'comic sans')
$('#twiddle').css( 'font-size', '25px')
$('#twiddle').css( 'border-radius', '40px')
$('#twiddle').css( 'margin', '20')

$('#twid-up').prepend($("<div class='butt-spacer'></div>"))

$("#twidButt").css('margin-top', '15%')

$('.butt-spacer').css('height', '10px')

$('#twiddle').css
$('#twiddle').css

////////////////////////////////////////////////////////////
///////////////////  MAKE TWIDS  ///////////////////////////
////////////////////////////////////////////////////////////

$(document).ready(function(){
  $twiddleButt.click(function(){
      $("#twidAdd").submit();
       // Submit the form
  });
});


  function makeTwids(){

    const $twids = streams.home.map((twid) => {
      const $twid = $('<div class="single-twid"></div>');

      let $twidUser = $("<div class='username'>" +"<h2> @"+ twid.user + ":</h2>" + "</div>")

      $twid.append($twidUser)
      $twid.append("<div class='twid-mess'>" + twid.message +"</div>");
      const $twidTime = $("<div class='twid-time'>" +"<div class='time-since'> - - - just now - - - - - - - - - - - " + moment().calendar() + "</div>")

      const $thisMoment = $("<div class='this-moment'>"+ moment().format() + "</div>").hide()
   
    

      $twid.append($twidTime).append($thisMoment)
      
      return $twid
      

    });

    $twidSpace.append($twids)
    $($twidSpace)
    $singleTwid = $('.single-twid');




    $('.username').css( 'color', 'Blue');
    $('.username').css( 'font-size', '30px')

    $('.twid-mess').css( 'color', 'gold');
    $('.twid-mess').css( 'font-size', '25px');

    $('.twid-time').css( 'font-size', '20px')
    $('.twid-time').css( 'color', 'white')
    const $userName = $(".username")


////////////////////////////////////////////////////////////
//////////////////  SEE PROFILES  //////////////////////////
////////////////////////////////////////////////////////////

$($userName).on('click', function(){

currentUser = this;
 
  $("#titular").append('<div id="user-profile"></div>')
  $('#user-profile').append(`<button id="close-butt">Back t'wit!</button>`)
  $('#twidSpace').hide()
  

  $("#twid-more").prop(
    "disabled",
    true
);

$("#twiddle").prop(
  "disabled",

  true
);

/*********************************  STYLES  ******************************/
  $("#close-butt").css( 'background-color', 'blue')
  //  $("#close-butt").css( 'padding', '10px 10px')
  $("#close-butt").css( 'font-size', '20px')
  $("#close-butt").css( 'color', 'gold')
  $("#close-butt").css( 'border-radius', '4px')
  $("#close-butt").css( 'font-family', 'comic sans')
  $("#close-butt").css( 'position', 'fixed')
  $("#close-butt").css( 'top', '100px')
  $("#close-butt").css( 'right', '67%')
  $("#close-butt").css( 'transform', 'translate(-50%, -50%')
   $("#close-butt").css( 'margin', 'auto')
  //  $("#close-butt").css( 'width', '5%')
  //  $("#close-butt").css( 'padding', '8px 8px 8px 8px')


//closes the profile window
  $('#close-butt').on('click', function(){
    $("#user-profile").remove();
    $("#twidSpace").show();
    $("#twid-more").prop(
      "disabled",
      false
      );
      $("#twiddle").prop(
        "disabled",
        false
    );
  })

///////////////////////////////////////
  //SELECTED USER'S PROFILE STYLING
  // console.log("!!! User Profile !!!", $('#user-profile'))
  $('#user-profile').css( 'background-color', 'purple')
  $('#user-profile').css( 'border', '1px solid #DDDDDD')
  $('#user-profile').css( 'border-radius', '4px 4px 4px 4px')
  $('#user-profile').css( 'font-size', '12px')
  $('#user-profile').css( 'font-weight', 'bold')
  $('#user-profile').css( 'padding', '10px 7px 5px')
  $('#user-profile').css( 'display', 'block')
  $('#user-profile').css( 'height', '300px')
  $('#user-profile').css( 'overflow', 'scroll');
  $('#user-profile').css( 'padding', '25px 25px 25px 25px');
  $('#user-profile').css( 'margin', 'auto')
  $('#user-profile').css( 'width', '500px')
  


  ////////////////////////////////////////////////////////
  //SELECTED USER'S TWID HISTORY

  //loop through all the single tweets
  for (let i = 0; i < $('.single-twid').length; i++){

    if (currentUser.innerText.slice(2, -1) === $('.username')[i].innerText.slice(2, -1)){
     

      let $fullTwid = $(".single-twid")[i].innerText

      let twidArr = $fullTwid.split(":")
      let choppedUserName = twidArr.shift()
      let choppedTime = twidArr[1].split("")
      
      
      $fullTwid = twidArr[0] + ":" + choppedTime[0]
      
      $("#user-profile")
      .append($("<div id='chop-user'><h2>" + choppedUserName + "</h2></div>")
      .css('color', 'blue'))
      .append("<p>")
      .append($fullTwid)
      .append(twidArr[0] + ":" + choppedTime[0])
      .append("</p>")
      .append("<div> - - - - </div>")

      


    }

    

  
  }
 
})

  }
makeTwids()

////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
//TWIDDLE BUTTON

$twiddleButt = $("");
$myTwid.append($twiddleButt)

//click the button:

  function makeOwnTwids(){

    $('#twiddle').on('click',function(event){
      event.preventDefault();
      // makeTwids()

      const $inputString = $('#speak').val();
      const $dudeTwidder = $("<div class='youser-name'>" +"<h2> @YOU:</h2></div>")
      const $userTwid = $("<div class='your-string'>"+ $inputString + " " + "</div>")
      const $twidTime = $("<div class='twid-time'>" +"<div class='time-since'> - - - just now - - - - - - - - - - - " + moment().calendar() + "</div>")
      const $thisMoment = $("<div class='this-moment'>"+ moment().format() + "</div>").hide()
      $('#twidSpace').append($dudeTwidder)
      .append($userTwid)
      .append($twidTime)
      .append($thisMoment)
      // .append(" - - - - - ")
      // .append(moment().calendar())
      // .append(" - - - ", moment().format());

      $('.youser-name').css('color', 'green');

      $($twidSpace).animate({scrollTop: $($twidSpace).prop('scrollHeight')}, 100);

      $('.your-string').css('font-size', '25px')
      $('.your-string').css('color', 'blue')
    });
  };
makeOwnTwids();

////////////////////////////////////////////////////////////

//........................................................//

////////////////////////////////////////////////////////////

//YOUR OWN PROFILE 

 $($("#twidSpace")).on('click', '.youser-name' ,function(){
  
   $("#titular").append('<div id="user-profile">')
   $('#user-profile').prepend(`<button id="close-butt">Back t'wid</button>`)
   $('#twidSpace').hide()


   ///////////////
   
 

  ////////////////

   $("#twid-more").prop(
     "disabled",
     true
 );

 $("#twiddle").prop(
   "disabled",

   true
);
////////////////////////////////////////////////////////
//////////////   BACK TWID  ////////////////////////////
////////////////////////////////////////////////////////

$("#close-butt").css( 'background-color', 'blue')
  //  $("#close-butt").css( 'padding', '10px 10px')
  $("#close-butt").css( 'font-size', '20px')
  $("#close-butt").css( 'color', 'gold')
  $("#close-butt").css( 'border-radius', '4px')
  $("#close-butt").css( 'font-family', 'comic sans')
  $("#close-butt").css( 'position', 'fixed')
  $("#close-butt").css( 'top', '100px')
  $("#close-butt").css( 'right', '67%')
  $("#close-butt").css( 'transform', 'translate(-50%, -50%')
   $("#close-butt").css( 'margin', 'auto')
  //  $("#close-butt").css( 'width', '5%')
  //  $("#close-butt").css( 'padding', '8px 8px 8px 8px')


//closes the profile window
$('#close-butt').on('click', function(){
 $("#user-profile").remove();
 $("#twidSpace").show();
 $("#twidSpace").prop(
   "disabled",
   false
   );
   $("#twiddle").prop(
     "disabled",
     false
 );
})



///////////////////////////////////////
//YOUR OWN USER PROFILE STYLING
$('#user-profile').css( 'background-color', 'purple')
$('#user-profile').css( 'border', '1px solid #DDDDDD')
$('#user-profile').css( 'border-radius', '4px 4px 4px 4px')
$('#user-profile').css( 'font-size', '20px')
$('#user-profile').css( 'font-weight', 'bold')
$('#user-profile').css( 'padding', '10px 7px 5px')
$('#user-profile').css( 'display', 'block')
$('#user-profile').css( 'height', '300px')
$('#user-profile').css( 'overflow', 'scroll');
$('#user-profile').css( 'padding', '25px 25px 25px 25px');
$('#user-profile').css( 'margin', 'auto')
$('#user-profile').css( 'width', '500px')


////////////////////////////////////////////
//ATTACHING TO USER PROFILE

let $userName = $(".youser-name").clone()

let $twidClone = $(".your-string").clone()
//console.log(".YOUsername", $(".youser-name"))

let $timeClone = $(".tweet-time").clone()

$("#user-profile").append($($userName))

//console.log("#USER PROFILE", $("#user-profile"))
$("#user-profile").append($($twidClone))
$("#user-profile").prepend($($userName))

for (let i = 0; i < $userName.length; i++){
  $($userName[i]).append($($twidClone[i])).append($($timeClone)[i])
}
$($twidClone).css("color", "yellow")
$($timeClone).css("color", "black")


 })










 let $timeSince = $('.time-since')

let $thisMoment = $(".this-moment")


// $(".current-time").hide()

console.log(moment(), Date.parse($thisMoment[0].innerText))


setInterval(function updateTimes (){

  $timeSince = $('.time-since')
  $thisMoment = $(".this-moment")

  for (let i = 0; i < $timeSince.length; i++){
    console.log($timeSince[i])
    let newTime = moment().diff($thisMoment[i].innerText)
    console.log(newTime)

    let timeInMinutes = Math.floor(newTime/1000/60)

    if (timeInMinutes < 1){
      $timeSince[i].innerText = " - - - less than a minute ago                  " + moment().calendar()
    } else if (timeInMinutes === 1) {
      $timeSince[i].innerText = " - - - 1 minute ago                " + moment().calendar()
    } else if (timeInMinutes < 60){
      $timeSince[i].innerText = " - - - " + Math.floor(newTime/1000/60) + " minutes ago                " + moment().calendar()
    } else if (timeInMinutes >= 60 && timeInMinutes < 120){
      $timeSince[i].innerText = " - - - 1 hour ago               " + moment().calendar()
    } else {
      $timeSince[i].innerText = " - - - " + Math.floor(newTime/1000/60/60) + " hours ago                " + moment().calendar()
    }

    


  }
}, 10000)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//....................................................................................................................................................//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$('.chop-user').css("color", "blue")

///////////////////////////////////////////////

///////////////////////////////////////////////

});