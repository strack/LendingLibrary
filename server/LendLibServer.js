  Meteor.startup(function () {
    Meteor.publish("Categories", function() {
      return lists.find({owner:this.userId},{fields:{Category:1}});
    });
    Meteor.publish("listdetails", function(category_id){
      return lists.find({_id:category_id});
    });
  });