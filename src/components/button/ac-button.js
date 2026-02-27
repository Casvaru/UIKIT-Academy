import { LitElement, html } from 'lit';
import { acButtonStyles } from './ac-button.css.js';

/**
 * @element ac-button
 *
 * @description
 * Button component for the UIKIT-Academy design system.
 * Designed as a framework-agnostic Web Component (works in React, Angular, Vue, Laravel Blade, etc.)
 *
 * @prop {'primary'|'secondary'} variant - Visual variant. Default: 'primary'
 * @prop {'filled'|'outline'} appearance - Fill style. Default: 'filled'
 * @prop {'base'|'small'} size - Button size. Default: 'base'
 * @prop {boolean} disabled - Whether the button is disabled. Default: false
 * @prop {boolean} icon - Whether to show the icon slot. Default: false
 *
 * @slot - Default slot for button label text
 * @slot icon - Slot for custom icon content (shown when icon=true)
 *
 * @csspart button - The native <button> element inside the shadow DOM
 *
 * @example
 * <ac-button variant="primary" appearance="filled">Click me</ac-button>
 * <ac-button variant="secondary" appearance="outline" icon>
 *   <span slot="icon">+</span>
 *   Button
 * </ac-button>
 */
export class AcButton extends LitElement {
  static styles = [acButtonStyles];

  static properties = {
    variant: { type: String, reflect: true },
    appearance: { type: String, reflect: true },
    size: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    icon: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.variant = 'primary';
    this.appearance = 'filled';
    this.size = 'base';
    this.disabled = false;
    this.icon = false;
  }

  /** Build CSS class list from properties */
  _getClasses() {
    const classes = ['ac-button', `ac-button--${this.variant}`];

    if (this.appearance === 'outline') {
      classes.push('ac-button--outline');
    }

    if (this.size === 'small') {
      classes.push('ac-button--small');
    }

    if (this.disabled) {
      classes.push('ac-button--disabled');
    }

    return classes.join(' ');
  }

  render() {
    return html`
      <button
        part="button"
        class=${this._getClasses()}
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled}
      >
        ${this.icon
          ? html`<span class="ac-button__icon"><slot name="icon">+</slot></span>`
          : ''}
        <slot></slot>
      </button>
    `;
  }
}

customElements.define('ac-button', AcButton);
