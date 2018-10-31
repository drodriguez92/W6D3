const FollowToggle = require ('./follow_toggle.js');

$(function () {
  $('button.follow_toggle').each( (i, btn) => new FollowToggle(btn, {}));
});
