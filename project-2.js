/**
 * Copyright 2024 nthomas485
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/rpg-character/rpg-character.js";
import { WiredButton, WiredInput } from "wired-elements"

export const hatArray = [
  "bunny",
  "coffee",
  "construction",
  "cowboy",
  "education",
  "knight",
  "ninja",
  "party",
  "pirate",
  "watermelon",
];

/* export const characterAttributes = [
  accessories = '9',
  base = '1',
  leg = ["", "R", "L"],
  face = '5',
  faceItem = '9',
  hair = '9',
  pants = '9',
  shirt = '9',
  skin = '9',
  hatColor = '9',
]; 
*/

/**
 * `project-2`
 * 
 * @demo index.html
 * @element project-2
 */
export class Project2 extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "project-2";
  }

  constructor() {
    super();
    this.title = "";
    this.accentColor = '';
    this.dark = '';
    this.accessories = '';
    this.height = '';
    this.width = '';
    this.base = '';
    this.face = '';
    this.faceItem = '';
    this.hair = '';
    this.pants = '';
    this.shirt = '';
    this.skin = '';
    this.hatColor = '';
    this.hat = '';
    this.walking = false;
    this.leg = [];
    this.seed = null;
    this.speed = '';
    this.circle = false;
    this.fire = false;
    this.demo = false;
    this.reduceMotion = true;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      accentColor: { type: String },
      dark: { type: String },
      accessories: { type: String},
      height: { type: String },
      width: {type: String },
      base: { type: String },
      face: { type: String },
      faceItem: {type: String },
      hair: { type: String },
      pants: { type: String },
      shirt: {type: String },
      skin: { type: String },
      hatColor: { type: String },
      hat: { type: String },
      walking: { type: Boolean, Reflect: true},
      leg: { type: Array },
      speed: { type: String },
      circle: { type: Boolean, Reflect: true },
      fire: { type: Boolean, Reflect: true },
      demo: { type: Boolean, Reflect: true },
      reduceMotion: { type: Boolean, Reflect: true },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--project-2-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3><span>${this.t.title}:</span> ${this.title}</h3>
  <rpg-character ></rpg-character>
  <wired-button> Click </wired-button>
  <slot></slot>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(Project2.tag, Project2);