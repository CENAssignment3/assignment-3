
/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'), 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect(config.db.uri);
/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   
  Listing.find({name:"Library West"}, function(err, listing){
    if(err) throw err;
    console.log(listing);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   
   Listing.findOneAndRemove({code:"CABL"},function(err,item){
    if (err) throw err;
    console.log(item);
   });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({name:"Phelps Laboratory"},{address:"102 Phelps Lab, Gainesville, FL 32611"},function(err,item) {
    if (err) throw err;
    console.log(item);
   })
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find({},function(err,items) {
    if (err) throw err;
    console.log(items);
   })
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();