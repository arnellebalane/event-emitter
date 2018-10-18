import {describe} from 'riteway';
import EventEmitter from './event-emitter';

describe('EventEmitter#constructor', async assert => {
    const instance = new EventEmitter();

    assert({
        given: 'a new instance',
        should: 'have an empty $listeners object',
        actual: instance.$listeners,
        expected: {}
    });
});

describe('EventEmitter#on', async assert => {
    const instance = new EventEmitter();

    const callback = () => {};
    instance.on('name', callback);

    assert({
        given: 'an event name and callback function',
        should: 'create a listeners array in $listeners with event name as key',
        actual: instance.$listeners['name'] instanceof Array,
        expected: true
    });

    assert({
        given: 'an event name and callback function',
        should: 'add the callback in the listeners array',
        actual: instance.$listeners['name'],
        expected: [callback]
    });
});

describe('EventEmitter#off', async assert => {
    const instance = new EventEmitter();

    const callback1 = () => {};
    const callback2 = () => {};
    instance.on('name', callback1);
    instance.on('name', callback2);

    instance.off('name', callback1);

    assert({
        given: 'an event name and callback function',
        should: 'remove the the callback from the listeners array',
        actual: instance.$listeners['name'],
        expected: [callback2]
    });

    instance.off('name', callback2);

    assert({
        given: 'there are no more callbacks for event name',
        should: 'delete the listeners array for event name',
        actual: instance.$listeners['name'],
        expected: undefined
    });

    instance.on('name', callback1);
    instance.on('name', callback2);

    instance.off('name');

    assert({
        given: 'only an event name',
        should: 'delete the listeners array for event name',
        actual: instance.$listeners['name'],
        expected: undefined
    });
});

describe('EventEmitter#emit', async assert => {

});
