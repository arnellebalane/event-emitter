var t=function(){this.$listeners={}};t.prototype.on=function(t,e){this.$listeners[t]||(this.$listeners[t]=[]),this.$listeners[t].push(e)},t.prototype.off=function(t,e){if(this.$listeners[t]){if(e instanceof Function){var s=this.$listeners[t].indexOf(e);this.$listeners[t].splice(s,1)}this.$listeners[t].length&&e||delete this.$listeners[t]}},t.prototype.emit=function(t,e){if(this.$listeners[t]){var s=arguments.length>1;this.$listeners[t].forEach(function(t){return s?t(e):t()})}};export default t;
//# sourceMappingURL=event-emitter.mjs.map
