!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.EventEmitter=t()}(this,function(){var e=function(){this.$listeners={}};return e.prototype.on=function(e,t){this.$listeners[e]||(this.$listeners[e]=[]),this.$listeners[e].push(t)},e.prototype.off=function(e,t){if(this.$listeners[e]){if(t instanceof Function){var i=this.$listeners[e].indexOf(t);this.$listeners[e].splice(i,1)}this.$listeners[e].length&&t||delete this.$listeners[e]}},e.prototype.emit=function(e,t){this.$listeners[e]&&this.$listeners[e].forEach(function(e){return e(t)})},e});
//# sourceMappingURL=event-emitter.umd.js.map