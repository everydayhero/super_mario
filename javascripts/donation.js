var Donation = Backbone.Model.extend({});
  
var Donations = Backbone.Collection.extend({
  model: Donation,
  url: 'https://x:x8@heroix.everydayhero.com.au/api/v1/donations.json?callback=?',
  comparator: function(donation) {
    return donation.get('id');
  },
  parse: function(response) {
    var self = this;
    return _(response).reject(function(result) {
      return _(self.models).detect(function(model) {
        return result.id === model.id;
      });
    });
  }
});