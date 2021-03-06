import {WebuniCard} from '../webuni-card.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('webuni-card', () => {
  test('is defined', () => {
    const el = document.createElement('webuni-card');
    assert.instanceOf(el, WebuniCard);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<webuni-card></webuni-card>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<webuni-card name="Test"></webuni-card>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = await fixture(html`<webuni-card></webuni-card>`);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
