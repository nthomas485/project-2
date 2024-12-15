/**
 * Copyright 2024 nthomas485
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/rpg-character/rpg-character.js";
import { WiredButton, WiredInput } from "wired-elements"
import { rpgInputs } from "./rpg-inputs.js";
import "./rpg-inputs.js";

export const hatArray = [
  "none",
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
    this.data = {
      seed: "0000000000",
      base: 0, // 0 for no hair, 1 for hair
      face: 0,
      hat: 0,
      accessories: 0,
      faceItem: 0,
      hair: 0,
      pants: 0,
      shirt: 0,
      skin: 0,
      leg: "",
      eyeColor: 0,
      glasses: false,
      hatColor: 0,
      size: 200,
      name: "",
      fire: false,
      walking: false,
      circle: false,
      size: 250,
    };
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      accentColor: { type: String },
      dark: { type: String },
      accessories: { type: String },
      height: { type: String },
      width: { type: String },
      base: { type: String },
      face: { type: String },
      faceItem: { type: String },
      hair: { type: String },
      pants: { type: String },
      shirt: { type: String },
      skin: { type: String },
      hatColor: { type: String },
      hat: { type: String },
      walking: { type: Boolean, Reflect: true },
      leg: { type: Array },
      speed: { type: String },
      circle: { type: Boolean, Reflect: true },
      fire: { type: Boolean, Reflect: true },
      demo: { type: Boolean, Reflect: true },
      reduceMotion: { type: Boolean, Reflect: true },
      data: { type: Object },
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
      wired-slider {
        --wired-slider-bar-color: pink;
        --wired-slider-knob-color: grey;
      }

      .inputs{
        color: lightblue;
      }

      .display-seed{
        color: lightblue;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <div class="display-name"> ${this.data.name}</div>
  <rpg-character
      .base="${this.data.base}"
      .gender="${this.data.gender}"
      .face="${this.data.face}"
      .faceItem="${this.data.faceItem}"
      .accessories="${this.data.accessories}"
      .hair="${this.data.hair}"
      .pants="${this.data.pants}"
      .hat="${hatArray[this.data.hat]}"
      .shirt="${this.data.shirt}"
      .skin="${this.data.skin}"
      .hatColor="${this.data.hatColor}"
      .leg="${this.data.leg}"
      ?fire="${this.data.fire}"
      ?walking="${this.data.walking}"
      ?circle="${this.data.circle}"></rpg-character>
  <div class="display-seed"> Seed: ${this.data.seed}</div>
    <div class="inputs">
      <div class="name">Name:
        <wired-input id='name' type='text' placeholder='Enter a name'
        @input='${(e) => this.updateResults('name', e.target.value)}'
        ></wired-input>
      </div>

      <div class="random"> 
    <wired-button @click="${(e) => this.randomizeCharacter()}">Randomize</wired-button>
  </div>

      <!-- <div class="gender">
      <wired-slider id="gender"  .value="${this.data.gender}"  min="0" max="9"
          @change="${(e) => this.updateResults('gender', parseInt(e.detail.value))}"
          ></wired-slider>
        <wired-combo .value="${this.data.base}" @select="${(e) => this.updateResults('base', e.detail.value)}">
          <wired-item value="1">Male</wired-item>
          <wired-item value="5">Female</wired-item>
        </wired-combo> 
      </div> -->

      <div class="hair">Hair:
      <wired-checkbox id='hair'  ?checked='${this.data.base === 1}' 
        @change='${(e) => this.updateResults('base', e.target.checked ? 1 : 0)}'
        ></wired-checkbox>
      </div>

      ${this.data.base === 1 ? html` 
      <div class="hairStyle">Hair Style:
      <wired-slider id="hair" value="0" .value="${this.data.hair}"  min="0"  max="9"  
      @change="${(e) => this.updateResults('hair', parseInt(e.detail.value))}"
        ></wired-slider>
      </div>` : ''}

      <!-- <div class="charSize">
        <wired-slider  id="size"  .value="${this.data.size}" min="100" max="600"
          @change="${(e) => this.updateResults('size', parseInt(e.detail.value))}"
          ></wired-slider>
      </div> -->

      <div class="face">Face:
      <wired-slider id="face"  value="0" .value="${this.data.face}"  min="0" max="5"
          @change="${(e) => this.updateResults('face', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="faceItem">FaceItem:
      <wired-slider id="faceItem"  value="0" .value="${this.data.faceItem}" min="0"  max="9"
          @change="${(e) => this.updateResults('faceItem', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="accessory">Accessory:
      <wired-slider id="accessory"  value="0" .value="${this.data.accessories}" min="0"  max="9"
          @change="${(e) => this.updateResults('accessories', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <!-- ${this.data.base === 1 ? html` 
      <div class="hairStyle">Hair Style:
      <wired-slider id="hair" .value="${this.data.hair}"  min="0"  max="9"  
      @change="${(e) => this.updateResults('hairstyle', parseInt(e.detail.value))}"
        ></wired-slider>
      </div>` : ''} -->

      <div class="hat">Hat:
      <wired-slider id="hat" value="0" .value="${this.hatArray}"  min="0"  max="9"  
      @change="${(e) => this.updateResults('hat', [parseInt(e.detail.value)])}"
        ></wired-slider>
      </div>

      <div class="pants">Pants:
      <wired-slider id="pants" value="0" .value="${this.data.pants}"  min="0"  max="9"
          @change="${(e) => this.updateResults('pants', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="shirt">Shirt:
      <wired-slider  id="shirt"  value="0" .value="${this.data.shirt}" min="0"  max="9"
          @change="${(e) => this.updateResults('shirt', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="skin">Skin:
      <wired-slider  id="skin" value="0" .value="${this.data.skin}"  min="0"  max="9"
          @change="${(e) => this.updateResults('skin', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="hatColor">Hat Color:
      <wired-slider  id="hatColor" value="0" .value="${this.data.hatColor}"  min="0" max="9"
          @change="${(e) => this.updateResults('hatColor', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>
      <br>

      <div class="fire">
        <wired-checkbox ?checked="${this.data.fire}" @change="${(e) => this.updateResults('fire', e.target.checked)}">Fire</wired-checkbox>
      </div>

      <div class="walking">
        <wired-checkbox ?checked="${this.data.walking}" @change="${(e) => this.updateResults('walking', e.target.checked)}">Walking</wired-checkbox>
      </div>

      <div class="circle">
        <wired-checkbox ?checked="${this.data.circle}" @change="${(e) => this.updateResults('circle', e.target.checked)}">Circle</wired-checkbox>
      </div>

      <div class="share">
        <wired-button alt="share" @click="${(e) => this._generateShareLink()}">
          Share
        </wired-button>
      </div>

      <div id="notification" class="notification"></div>
  <!-- <rpg-inputs
      .base="${this.data.base}"
      .face="${this.data.face}"
      .faceitem="${this.data.faceitem}"
      .hair="${this.data.hair}"
      .pants="${this.data.pants}"
      .shirt="${this.data.shirt}"
      .skin="${this.data.skin}"
      .size="${this.data.size}"
  ></rpg-inputs> -->
  <!-- <wired-button> Click </wired-button> -->
  <slot></slot>
  </div>
</div>`;
  }

  SeedMaker() {
    const { base, hair, face, faceItem, accessories, pants, shirt, skin, hat, hatColor } = this.data;
    this.data.seed = `${accessories ? accessories : '0'}${base ? base : '0'}${face ? face : '0'}${faceItem ? faceItem : '0'}${hair ? hair : '0'}${pants ? pants : '0'}${shirt ? shirt : '0'}${skin ? skin : '0'}${hat ? hat : '0'}${hatColor ? hatColor : '0'}`;
  }

  updateResults(key, value) {
    let timeout;
    this.data = { ...this.data, [key]: value };
    console.log(this.data.hat)
    this.SeedMaker();
    this.requestUpdate();
    console.log(this.seedIndex())
  }

  seedIndex() {
    const array = [
      this.data.accessories,
      this.data.base,
      this.data.face,
      this.data.faceItem,
      this.data.hair,
      this.data.pants,
      this.data.shirt,
      this.data.hatColor,

    ]
    return array.join("")
  }

  shareLink() {
    const link = `${location.origin}${location.pathname}?seed=${this.data.seed}&hat=${this.data.hat}&fire=${this.data.fire}&walking=${this.data.walking}&circle=${this.data.circle}`;
    navigator.clipboard.writeText(link);
    alert("Link copied!");
  }

  _generateShareLink() {
    const baseUrl = window.location.href.split("?")[0];
    const params = new URLSearchParams({ seed: this.data.seed }).toString();
    const shareLink = `${baseUrl}?${params}&hat=${this.data.hat}&fire=${this.data.fire}&walking=${this.data.walking}&circle=${this.data.circle}`;

    navigator.clipboard.writeText(shareLink).then(
      () => this._showNotification("Link copied!"),
      (err) => this._showNotification(`Error: ${err}`)
    );
  }

  _showNotification(message) {
    const notification = this.shadowRoot.getElementById("notification");
    notification.textContent = message;
    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
    }, 2000);
  }

  connectedCallback() {
    super.connectedCallback();
    const params = new URLSearchParams(window.location.search);

    if (params.has("seed")) {
      this.data.seed = params.get("seed");
      this.updateSettings(); // Apply the seed to settings
    }
    console.log("Seed on page load:", this.data.seed);
    this.requestUpdate();
  }

  updateSettings() {
    const seed = this.data.seed;
    const paddedSeed = seed.padStart(8, "0").slice(0, 8);
    const values = paddedSeed.split("").map((v) => parseInt(v, 10));

    [
      this.data.base,
      this.data.face,
      this.data.faceitem,
      this.data.hair,
      this.data.pants,
      this.data.shirt,
      this.data.skin,
      this.data.hatColor,
    ] = values;

    this.requestUpdate(); // Ensure UI updates after applying settings
  }

  randomizeCharacter() {
    this.data = {
      ...this.data, // Preserve other properties
      base: Math.floor(Math.random() * 2),            // 0 or 1
      face: Math.floor(Math.random() * 6),            // Range: 0-5
      faceItem: Math.floor(Math.random() * 10),       // Range: 0-9
      hair: Math.floor(Math.random() * 10),           // Range: 0-9
      pants: Math.floor(Math.random() * 10),          // Range: 0-9
      shirt: Math.floor(Math.random() * 10),          // Range: 0-9
      skin: Math.floor(Math.random() * 10),           // Range: 0-9
      hatColor: Math.floor(Math.random() * 10),       // Range: 0-9
      accessories: Math.floor(Math.random() * 10),    // Range: 0-9
      hat: Math.floor(Math.random() * hatArray.length), // Random hat from hatArray
      fire: Math.random() > 0.5,                      // Random true/false
      walking: Math.random() > 0.5,                   // Random true/false
      circle: Math.random() > 0.5,                    // Random true/false
      //name: `Random-${Math.floor(Math.random() * 1000)}`
    };

    this.SeedMaker();
    this.requestUpdate();
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