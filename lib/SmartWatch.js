const Watch = require("./Watch");
const Tablet = require("./Tablet");
const extend = require("./extend");

function SmartWatch(){
  Watch.call(this);
}

extend(SmartWatch.prototype, Watch.prototype);
extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;