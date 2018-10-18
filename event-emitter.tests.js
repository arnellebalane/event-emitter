import {describe} from 'riteway';
import sinon from 'sinon';
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
    const instance = new EventEmitter();

    const callback1 = sinon.spy();
    const callback2 = sinon.spy();
    instance.on('name1', callback1);
    instance.on('name2', callback2);

    instance.emit('name1', 'data1');

    assert({
        given: 'an event name and data',
        should: 'call the callback functions for the event',
        actual: callback1.calledOnce,
        expected: true
    });

    assert({
        given: 'an event name and data',
        should: 'not call the callback functions for other events',
        actual: callback2.notCalled,
        expected: true
    });

    assert({
        given: 'an event name and data',
        should: 'pass the data to the callback functions for the event',
        actual: callback1.calledOnceWithExactly('data1'),
        expected: true
    });

    instance.emit('name2');

    assert({
        given: 'an event name and no data',
        should: 'not pass anything to the callback functions for the event',
        actual: callback2.calledOnceWithExactly(),
        expected: true
    });
});
