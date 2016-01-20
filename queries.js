/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({ name : 'Library West'}, function(err, item) {
    if (err) throw err;
    console.log(item);
   })
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   Listing.find({code:'CABL'},function(err,item) {
    if (err) throw err;
    console.log(item);
    item.remove(function(err) {
      if (err) throw err;
    })
   })
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate({name:'Phelps Memorial Hospital Center'},{address:'701 North Broadway, Sleepy Hollow, NY 10591'},function(err,item) {
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