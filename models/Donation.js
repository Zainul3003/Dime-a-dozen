const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const DonationSchema = new Schema({
   donorname:{ type:String ,uppercase:true},
   ownername:{ type:String ,uppercase:true},
   shopname:{ type:String ,uppercase:true},  
   amount:{ type:Number}
});
 
const Donation = mongoose.model('Donation',DonationSchema);
 
module.exports = Donation;