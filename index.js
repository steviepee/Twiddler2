
$(document).ready(() => {
  const $body = $('body');
  $body.html('');//clear

  // const $twids = streams.home.map((tweet) => {
  //   const $twid = $('<div class= oneTwid></div>');
  //   const text = `@${tweet.user}: ${tweet.message}`;

  //   $tweet.text(text);

  //   return $tweet;
  // });
  // $body.append($tweets);


/******************************************************************************************************** */
////////////////////////////////////////////  TITLE BAR!  //////////////////////////////////////////////////
/******************************************************************************************************** */

console.log("hello")
//TITLE STYLE
let $title = $("<div><h1 class='site-title' style='display:none'>TWIDDLER</h1></div>")


$body.append($title);
$title.css('position', 'relative');
$title.css('text-align', 'center');
$title.css('font-family', 'times');
$title.css('margin', '80px');

$('h1').delay(1000);
$('.site-title').fadeIn(3000);;

$title.css('color', 'green');

$("h3").css('margin', '400px');
$("h3").css('position', 'absolute');
$("h3").css('top', '66%');
$("h3").css('left', '48%');



/************************************************************************************** */
////////////////////////////////////////TWIDITUP!!////////////////////////////////////////
/************************************************************************************** */


$body.append("<div id= 'addTwids'><button id= twidAdd>Twid it Up!!</button></div>")

$("#twidAdd").css("background-color", "blue");
$("#twidAdd").css("color", "yellow");
$("#twidAdd").css("padding", "10px 20px");
$("#twidAdd").css("width", "125px");
$("#twidAdd").css("position", "relative");
$("#twidAdd").css("padding", "10px 10px 10px 10px");
$("#twidAdd").css("font", "times new roman");
$("#twidAdd").css("border-radius", "3px");

/************************************************************************************* */
////////////////////////////////// TWIDSPACE CSS  //////////////////////////////////////
/************************************************************************************ */


$($body).css('background-color', '#ffccff');
$body.append("<div id='titular'></div><div id='tweetSpace'></div>");
let $tweetSpace = $('#tweetSpace');

$($tweetSpace).css( 'background-color', '#F5F5F5');
$($tweetSpace).css( 'border', '1px solid #DDDDDD');
$($tweetSpace).css( 'border-radius', '4px 4px 4px 4px');
$($tweetSpace).css( 'font-size', '12px');
$($tweetSpace).css( 'font-weight', 'bold');
$($tweetSpace).css( 'padding', '10px 7px 5px');
$($tweetSpace).css( 'display', 'block');
$($tweetSpace).css( 'height', '200px');
$($tweetSpace).css( 'overflow', 'scroll');
$($tweetSpace).css( 'padding', '25px 25px 25px 25px');
$($tweetSpace).css( 'margin', 'auto');
$($tweetSpace).css( 'width', '500px');







/*users is an array of strings -- all the usernames that you're following.
streams is an object with two properties, users and home.
streams.home is an array of all tweets from all the users you're following.
streams.users is an object with properties for each user.  */
const $twids = streams.home;/*array */
const $users = streams.users;/**(.username) will get you to their page */
const $divs = document.getElementsByTagName('div');



//create a function to add twids
const makeTwids= () => {
  let $twidSet = $twids.map((twid) => {
    const $twid = $('<div class= "oneTwid"></div>');
    const $twidUser = "<div class= 'user'>" +"<h3>" + "<b>@" + twid.user + "::</b>" + "</h3>" + /*add hyperlink to profile? "See more"*/"</div>"
    const $message = ( + "<div class= message" + twid.message + "</div>");
    
    $twid.append($twidUser);
    $twid.append($message);

    return $twid.append("<div id= 'timestamp'>", moment().calendar()).append("- - - - - - - - ", moment().format()).append("</div>").append("<div id= 'try'><</div>");

  });


}


//$twidUser on click twidSpace.hide, twids.filter().show;
  //console.log(document.getElementsByTagName('div'));
//console.log(getTwids(getTwids(twids)));
//console.log(twids.map((twid) => twid.appendChild(`${twid.created_at}`)));
//console.log(window.location.pathname);

});