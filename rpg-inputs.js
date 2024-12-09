import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/rpg-character/rpg-character.js";
import { WiredButton, WiredInput } from "wired-elements"

/**
 * `rpg-inputs`
 * 
 * @demo index.html
 * @element rpg-inputs
 */
export class rpgInputs extends DDDSuper(I18NMixin(LitElement)) {
  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.owner = "";
    this.slug = "";
    this.description = "";
    this.lastUpdated = "";
    this.logo = '';
    this.created = '';
    this.hex = '';
    this.theme = '';
    this.icon = '';
    this.url = '';
  }

  static get properties() {
    return {
      source: { type: String },
      title: { type: String },
      lastUpdated: { type: String },
      description: { type: String },
      content: { type: String },
      slug: { type: String },
      logo: { type: String },
      created: { type: String },
      hex: { type: String },
      theme: { type: String },
      icon: { type: String },
      url: { type: String },
    };
  }

  static get styles() {
    return [css`

        .wrapper{
          width: 100%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-left: -12px;
          align-items: center;
          //max-height: 360px;
          border:var(--ddd-border-lg);
          border-radius: var(--ddd-radius-m);
          padding: var(--ddd-spacing-2); 
          text-decoration: none;
          background-color: var(--site-hex-code, --ddd-theme-accent);
          margin-bottom: var(--ddd-spacing-2);
        }
         .logo {
        display: flex; 
        justify-content: center;
        align-items: center;
        max-width: 560px; 
        max-height: 260px; 
        overflow: hidden; 
        } 
    
        .image div {
        max-width: 200px;
        font-size: 16px;
        font-weight: bold;
        }
    
        .logo img {
          width: 100%; 
          height: auto;
          object-fit: cover; 
        }
        .title{
          font-size: 35px;
          color: black;
        }
        .info{
          color: black;
        }
        .secondaryCreator{
        display: inline-block;
      }
      a{
        text-decoration: none;
      }
      a:hover{
        text-decoration: none;
        color: fuchsia;
      }
      a:visited{
        text-decoration: none;
      a:active{
        text-decoration: none;
        color: black;
      }
    }
    
    
        `];
  }

  render() {
    return html`
    <div class="inputs">
      <div class="gender">
        <wired-combo .value=${this.attributes.base} @select="${(e) => this.updateResults('base', e.target.value)}">
          <wired-item value="1">Male</wired-item>
          <wired-item value="5">Female</wired-item>
        </wired-combo>
      </div>
      <div class="name">Name:
        <wired-input
        id='name'
        type='text'
        placeholder='Enter a name'
        @input='${(e)=> this.updateResults('name', e.value)}'
        ></wired-input>
      </div>

      <div class="hair">Hair:
      <wired-checkbox
        id='hair'
        ?checked='${this.attributes.base === 1}'
        placeholder='Enter a name'
        @change='${(e)=> this.updateResults('base', e.target.value ? 1 : 0)}'
        >Hair</wired-checkbox>
      </div>

      <div class="charSize">
        <wired-slider
          id="size"
          value="${this.attributes.size}"
          min="100"
          max="600"
          @change="${(e) => this.updateResults('size', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="face">Face:
      <wired-slider
          id="face"
          value="${this.attributes.face}"
          min="0"
          max="5"
          @change="${(e) => this.updateResults('face', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="faceItem">Item:
      <wired-slider
         id="faceitem"
          value="${this.attributes.faceitem}"
          min="0"
          max="9"
          @change="${(e) => this.updateResults('faceitem', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="hairStyle">Hair Style:
      <wired-slider
          id="hair"
          value="${this.attributes.hair}"
          min="0"
          max="9"
          @change="${(e) => this.updateResults('hairstyle', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="pantStyle">Pants:
      <wired-slider
          id="pants"
          value="${this.attributes.pants}"
          min="0"
          max="9"
          @change="${(e) => this.updateResults('pants', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="shirtStyle">Shirt:
      <wired-slider
          id="shirt"
          value="${this.attributes.shirt}"
          min="0"
          max="9"
          @change="${(e) => this.updateResults('shirt', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="skin">Skin:
      <wired-slider
          id="skin"
          value="${this.attributes.skin}"
          min="0"
          max="9"
          @change="${(e) => this.updateResults('skin', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="hatColor">Hat Color:
      <wired-slider
          id="hatColor"
          value="${this.attributes.hatColor}"
          min="0"
          max="9"
          @change="${(e) => this.updateResults('hatColor', parseInt(e.detail.value))}"
          ></wired-slider>
      </div>

      <div class="fire">
        <wired-checkbox ?checked="${this.attributes.fire}" @change="${(e) => this.updateResults('fire', e.target.checked)}">Fire</wired-checkbox>
      </div>

      <div class="walking">
        <wired-checkbox ?checked="${this.attributes.walking}" @change="${(e) => this.updateResults('walking', e.target.checked)}">Walking</wired-checkbox>
      </div>
    </div>
    
        `;
  }

  SeedMaker() {
    const { base, face, faceitem, hair, pants, shirt, skin, hatColor} = this.attributes;
    this.attributes.seed = `${base}${face}${faceitem}${hair}${pants}${shirt}${skin}${hatColor}`;
  }

  updateResults(key, value) {
    this.attributes = { ...this.attributes, [key]: value };
    this.SeedMaker();
    this.requestUpdate();
  }

 /*  updateSettings() {
    const seed = this.characterSettings.seed;
    const paddedSeed = seed.padStart(8, "0").slice(0, 8);
    const values = paddedSeed.split("").map((v) => parseInt(v, 10));
  
    [
      this.attributes.base,
      this.attributes.face,
      this.attributes.faceitem,
      this.attributes.hair,
      this.attributes.pants,
      this.attributes.shirt,
      this.attributes.skin,
      this.attributes.hatColor,
    ] = values;
  
    this.requestUpdate(); // Ensure UI updates after applying settings
  } */
  static get tag() {
    return "rpg-inputs";
  }
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(rpgInputs.tag, rpgInputs);
