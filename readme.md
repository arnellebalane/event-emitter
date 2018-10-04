# EventEmitter

JavaScript EventEmitter implementation.


## Installation

Install via npm (or yarn):

```bash
npm install @arnellebalane/event-emitter
```


## Usage

This module exposes a class that you can extend from to make your own classes
support emitting events and being listened to for events.

```js
import EventEmitter from '@arnellebalane/event-emitter';

class MyClass extends EventEmitter {
    // ...
}
```

This class is exposed as `window.EventEmitter` when not using AMD or CommonJS.


## API

Instances of `EventEmitter` and its subclasses will have the following methods:

- **`.on(name, callback)`**: Listen for an event to be emitted from the instance.
  - `name` _(String)_. The name of the event to listen to.
  - `callback` _(Function)_. The function to run when the event is emitted.
- **`.off(name[, callback])`**: Stop listening for an event to be emitted from the instance.
  - `name` _(String)_. The name of the event to stop listening to.
  - `callback` _(Function, Optional)_. The callback function to remove. If given,
    only that callback will be removed. Otherwise, all callback functions for
    that event will be removed.
- **`.emit(name[, data])`**: Broadcast an event to all observers.
  - `name` _(String)_. The name of the event to broadcast.
  - `data` _(Any, Optional)_. The data to be passed to the callback functions.


## License

MIT License
