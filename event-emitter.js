export default class EventEmitter {
    constructor() {
        this.$listeners = {};
    }

    on(name, callback) {
        if (!this.$listeners[name]) {
            this.$listeners[name] = [];
        }
        this.$listeners[name].push(callback);
    }

    off(name, callback) {
        if (!this.$listeners[name]) return;
        if (callback instanceof Function) {
            const index = this.$listeners[name].indexOf(callback);
            this.$listeners[name].splice(index, 1);
        }
        if (!this.$listeners[name].length || !callback) {
            delete this.$listeners[name];
        }
    }

    emit(name, data) {
        if (!this.$listeners[name]) return;
        this.$listeners[name].forEach(callback => callback(data));
    }
}
