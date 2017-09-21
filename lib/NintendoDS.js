const GameConsole = require("./GameConsole");
const WebBrowser = require("./WebBrowser");
const extend = require("./extend");

function NintendoDS(){
  this.systemName = "Nintendo DS";
}

extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;