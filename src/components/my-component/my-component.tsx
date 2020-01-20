import { Component, h, EventEmitter, Element, Event, Listen } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Element() el: HTMLMyComponentElement;

  @Event() testEvent: EventEmitter;

  @Listen('testEvent')
  testEventListener(e: CustomEvent) {
    console.log(`Listener: Before preventDefault(): Default prevented: `, e.defaultPrevented);
    e.preventDefault();
    console.log(`Listener: After preventDefault(): Default prevented: `, e.defaultPrevented);
  }

  emitEvent() {
    const event = this.testEvent.emit();

    console.log(`Emitter: Default prevented:`, event.defaultPrevented);
  }

  render() {
    return <button onClick={() => this.emitEvent()}>Fire Test Event</button>;
  }
}
