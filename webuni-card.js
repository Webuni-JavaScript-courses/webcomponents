/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html, css} from 'lit-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class WebuniCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 32px;
        font-family: 'Roboto', sans-serif;
        color: #424242;
        box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
        border-radius: 10px;
      }
      p {
        font-weight: bold;
      }
    `;
  }

  static get properties() {
    return {
      title: {type: String}
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
      <h1>${this.title}</h1>
      <slot></slot>
    `;
  }
}

window.customElements.define('webuni-card', WebuniCard);
