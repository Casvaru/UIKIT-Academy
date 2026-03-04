import { LitElement, html } from 'lit';
import { acSectionHeaderStyles } from './ac-section-header.css.js';

/**
 * @element ac-section-header
 *
 * @description
 * Section header component for displaying page/section titles with descriptions and actions.
 *
 * @prop {string} heading - The main title text
 * @prop {string} description - The description text below the title
 *
 * @slot button - Slot for action buttons (e.g., ac-button)
 *
 * @example
 * <ac-section-header
 *   heading="My Section"
 *   description="This is the section description"
 * >
 *   <ac-button slot="button" variant="primary">Action</ac-button>
 * </ac-section-header>
 */
export class AcSectionHeader extends LitElement {
  static styles = [acSectionHeaderStyles];

  static properties = {
    heading: { type: String },
    description: { type: String },
  };

  constructor() {
    super();
    this.heading = '';
    this.description = '';
  }

  render() {
    return html`
      <div class="section-header">
        <div class="section-header__content">
          ${this.heading
            ? html`<h4 class="section-header__title">${this.heading}</h4>`
            : ''}
          ${this.description
            ? html`<p class="section-header__description">${this.description}</p>`
            : ''}
        </div>
        <div class="section-header__actions">
          <slot name="button"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('ac-section-header', AcSectionHeader);
