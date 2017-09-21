const GameConsole = require("./GameConsole");
const WebBrowser = require("./WebBrowser");
const extend = require("./extend");

function NintendoDS(){
  this.systemName = "Nintendo DS";
}

NintendoDS.prototype = Object.create(GameConsole.prototype);

extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;