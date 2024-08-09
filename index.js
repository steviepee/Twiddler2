
$(document).ready(() => {
  const $body = $('body');
  $body.html('');

  const $tweets = streams.home.map((tweet) => {
    const $tweet = $('<div></div>');
    const text = `@${tweet.user}: ${tweet.message}`;

    $tweet.text(text);

    return $tweet;
  });
  $body.append($tweets);

});
/*users is an array of strings -- all the usernames that you're following.
streams is an object with two properties, users and home.
streams.home is an array of all tweets from all the users you're following.
streams.users is an object with properties for each user.  */
const twids = streams.home/*array */
const profile = streams.users/**(.username) will get you to their page */





const getTwids = (array) => {
  let result = array.filter((twid) => {
    return moment(twid.created_at).fromNow > 'an hour ago' && $(!"body:contains(twid)")
  });
  return result;
}
console.log(getTwids(getTwids(twids)));
console.log();
console.log();
console.log();
console.log();