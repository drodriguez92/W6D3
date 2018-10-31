const APIUtil = require('./api_util');

class FollowToggle {
 constructor(el, options) {
  this.$el = $(el);
  this.userId = this.$el.data('userId') || options.userId;
  this.followState = (this.$el.data('initial-follow-state') ||
  options.followState);

  this.render();
  this.$el.on('click', this.handleClick.bind(this));
 }

 handleClick (e) {
   let followToggle = this;
   e.preventDefault();
   if(this.followState === 'followed') {
     followToggle.followState = "unfollowing";
     followToggle.render();
     APIUtil.unfollowUser(this.userId).then(() => {
       followToggle.followstate = "unfollowed";
       followToggle.render();
     });
   } else if (this.followState === 'unfollowed') {
     followToggle.followState = "following";
     followToggle.render();
     APIUtil.followUser(this.userId).then(() => {
       followToggle.followState = 'followed';
       followToggle.render();
     });
   }
 }


 render() {
   switch(this.followState) {
     case ('unfollowing'): {
      this.$el.prop("disabled", true);
       // this.followState.disabled = true;
       break;
     }

     case ('following'): {
       this.$el.prop("disabled", true);
       // this.followState.disabled = true;
       break;
     }
     case ('followed'): {
       this.$el.prop("disabled", false);
       this.$el.html('Unfollow!');

       break;
     }
     case ('unfollowed'): {
       this.$el.prop("disabled", false);
       this.$el.html('Follow!');

       break;
     }
   }
 }
}

module.exports = FollowToggle;
