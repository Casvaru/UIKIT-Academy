import { LitElement, html } from 'lit';
import { acHeaderStyles } from './ac-header.css.js';

/**
 * @element ac-header
 *
 * @description
 * Main application header component with slots for logo, navigation, actions, and an optional profile picture.
 *
 * @prop {boolean} hasProfile - If true, displays the profile picture area.
 *
 * @slot logo - Slot for the application logo or brand mark.
 * @slot nav - Slot for main navigation links/items.
 * @slot actions - Slot for action icons/buttons (search, notifications, etc.).
 * @slot profile - Slot for the user profile image or element (visible only if hasProfile is true).
 *
 * @example
 * <ac-header has-profile>
 *   <div slot="logo">Logo</div>
 *   <nav slot="nav"><a href="#">Home</a></nav>
 *   <div slot="actions"><button>Search</button></div>
 *   <img slot="profile" src="avatar.jpg" alt="User Avatar" />
 * </ac-header>
 */
export class AcHeader extends LitElement {
  static styles = [acHeaderStyles];

  static properties = {
    hasProfile: { type: Boolean, attribute: 'has-profile' },
  };

  constructor() {
    super();
    this.hasProfile = false;
  }

  render() {
    return html`
      <header class="header">
        <div class="header__logo">
          <slot name="logo"></slot>
        </div>
        
        <div class="header__nav">
          <slot name="nav"></slot>
        </div>

        <div class="header__actions-wrapper">
          <div class="header__actions">
            <slot name="actions"></slot>
          </div>
          
          ${this.hasProfile ? html`
            <div class="header__profile" part="profile">
              <slot name="profile"></slot>
            </div>
          ` : ''}
        </div>
      </header>
    `;
  }
}

customElements.define('ac-header', AcHeader);
