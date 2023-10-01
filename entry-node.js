var library = require("./index");
var supportedLocales = require("./supported-locales");

for (var requireLocale of Object.values(supportedLocales)) {
  library.registerLocale(requireLocale());
}

module.exports = library;
