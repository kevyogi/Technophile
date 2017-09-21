const Tablet = require("./Tablet");
const Phone = require("./Phone");
const GameConsole = require("./GameConsole");
const WebBrowser = require("./WebBrowser");
const extend = require("./extend");

function SmartPhone(phoneNumber){
  this.systemName = "Smart Phone";
  this.phoneNumber = phoneNumber;
}

SmartPhone.prototype = Object.create(Phone.prototype);

extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);

module.exports = SmartPhone;