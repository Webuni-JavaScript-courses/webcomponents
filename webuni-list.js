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
 export class WebuniList extends LitElement {
   static get styles() {
     return css`
       :host {
         display: block;
         font-family: 'Roboto', sans-serif;
         color: #424242;
         width: 30%;
         font-size: 18px;
       }
        .container {
            border-radius: 10px;
            border-color: #E0E0E0;
            border-width: 1px;
            border-style: solid;
        }
        .title {
            text-align: center;
            font-weight: bottom;
            background-color: #E0E0E0;
            border-radius: 10px 10px 0 0;
        }
        .title, .item {
            padding: 15px;
        }
        .bottom-border {
            border-bottom-color: #E0E0E0;
            border-bottom-width: 1px;
            border-bottom-style: solid;
        }

        li {
            list-style: none;
        }
     `;
   }
 
   constructor() {
     super();
   }

   static get properties() {
    return {
      title: {type: String},
      item1: {type: String},
      item2: {type: String},
      item3: {type: String}
    };
  }
 
   render() {
     return html`
       <link rel="preconnect" href="https://fonts.gstatic.com">
       <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet">
       <div class="container">
            <div class="title bottom-border">${this.title}</div
            <ul>
                <li class="item bottom-border">${this.item1}</li>
                <li class="item bottom-border">${this.item2}</li>
                <li class="item">${this.item3}</li>
            </ul>
       </div>
     `;
   }
 }
 
 window.customElements.define('webuni-list', WebuniList);
 