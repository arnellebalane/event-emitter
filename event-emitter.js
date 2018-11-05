// @flow

export default class EventEmitter {
    $listeners: Object

    constructor() {
        this.$listeners = {};
    }

    on(name: string, callback: Function): void {
        if (!this.$listeners[name]) {
            this.$listeners[name] = [];
        }
        this.$listeners[name].push(callback);
    }

    off(name: string, callback?: Function): void {
        if (!this.$listeners[name]) {
            return;
        }
        if (callback instanceof Function) {
            const index = this.$listeners[name].indexOf(callback);
            this.$listeners[name].splice(index, 1);
        }
        if (!this.$listeners[name].length || !callback) {
            delete this.$listeners[name];
        }
    }

    emit(name: string, data?: mixed): void {
        if (!this.$listeners[name]) {
            return;
        }
        const hasData = arguments.length > 1;
        this.$listeners[name].forEach(callback => (hasData ? callback(data) : callback()));
    }
}
