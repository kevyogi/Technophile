const Watch = require("./Watch");
const Tablet = require("./Tablet");
const extend = require("./extend");

function SmartWatch(){
  Watch.call(this);
}

SmartWatch.prototype = Object.create(Watch.prototype);

extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;