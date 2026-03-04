import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { acButtonStyles } from './ac-button.css.js';
import plus from 'heroicons/24/solid/plus.svg?raw';
import trash from 'heroicons/24/solid/trash.svg?raw';
import pencil from 'heroicons/24/solid/pencil.svg?raw';
import check from 'heroicons/24/solid/check.svg?raw';
import xMark from 'heroicons/24/solid/x-mark.svg?raw';
import arrowLeft from 'heroicons/24/solid/arrow-left.svg?raw';
import arrowRight from 'heroicons/24/solid/arrow-right.svg?raw';
import arrowDownTray from 'heroicons/24/solid/arrow-down-tray.svg?raw';
import arrowUpTray from 'heroicons/24/solid/arrow-up-tray.svg?raw';
import cog6Tooth from 'heroicons/24/solid/cog-6-tooth.svg?raw';
import user from 'heroicons/24/solid/user.svg?raw';
import heart from 'heroicons/24/solid/heart.svg?raw';
import star from 'heroicons/24/solid/star.svg?raw';
import magnifyingGlass from 'heroicons/24/solid/magnifying-glass.svg?raw';
import bars3 from 'heroicons/24/solid/bars-3.svg?raw';
import bell from 'heroicons/24/solid/bell.svg?raw';

/**
 * @element ac-button
 *
 * @description
 * Button component for the UIKIT-Academy design system.
 * Designed as a framework-agnostic Web Component (works in React, Angular, Vue, Laravel Blade, etc.)
 *
 * @prop {'primary'|'secondary'|'tertiary'} variant - Visual variant. Default: 'primary'
 * @prop {'base'|'small'} size - Button size. Default: 'base'
 * @prop {boolean} disabled - Whether the button is disabled. Default: false
 * @prop {string} iconName - Heroicons name to display (e.g., 'plus', 'trash', 'pencil'). Default: undefined
 *
 * @slot - Default slot for button label text
 * @slot icon - Slot for custom icon content (shown when icon=true)
 *
 * @csspart button - The native <button> element inside the shadow DOM
 *
 * @example
 * <ac-button variant="primary">Click me</ac-button>
 * <ac-button variant="primary" icon-name="plus">Add Item</ac-button>
 * <ac-button variant="secondary" icon-name="trash">Delete</ac-button>
 * <ac-button variant="tertiary">Tertiary Button</ac-button>
 */
export class AcButton extends LitElement {
  static styles = [acButtonStyles];

  static properties = {
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    iconName: { type: String, reflect: true, attribute: 'icon-name' },
    iconOnly: { type: Boolean, reflect: true, attribute: 'icon-only' },
    ariaLabel: { type: String, attribute: 'aria-label' },
    href: { type: String },
    target: { type: String },
  };

  constructor() {
    super();
    this.variant = 'primary';
    this.size = 'base';
    this.disabled = false;
    this.iconName = undefined;
    this.iconOnly = false;
    this.ariaLabel = '';
    this.href = undefined;
    this.target = '_self';
  }

  connectedCallback() {
    super.connectedCallback();
    // Accessibility check: icon-only buttons must have an accessible name
    if (this.iconOnly && (!this.ariaLabel || this.ariaLabel.trim() === '')) {
      // eslint-disable-next-line no-console
      console.warn('ac-button: `icon-only` is set but no `aria-label` provided. This may be inaccessible.');
    }
  }

  /** Get the SVG HTML for the icon from heroicons */
  _getIconSVG() {
    if (!this.iconName) return '';
    
    const iconMap = {
      'plus': plus,
      'trash': trash,
      'pencil': pencil,
      'check': check,
      'x': xMark,
      'arrow-left': arrowLeft,
      'arrow-right': arrowRight,
      'download': arrowDownTray,
      'upload': arrowUpTray,
      'settings': cog6Tooth,
      'user': user,
      'heart': heart,
      'star': star,
      'search': magnifyingGlass,
      'menu': bars3,
      'bell': bell,
    };

    let iconSvg = iconMap[this.iconName];
    if (!iconSvg) return '';

    // Normalize the SVG: ensure width/height and currentColor fill so it inherits button color
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(iconSvg, 'image/svg+xml');
      const svgEl = doc.documentElement;
      if (svgEl && svgEl.tagName.toLowerCase() === 'svg') {
        svgEl.setAttribute('width', '1em');
        svgEl.setAttribute('height', '1em');
        svgEl.setAttribute('aria-hidden', 'true');
        // force fill to currentColor so it follows button color
        svgEl.setAttribute('fill', 'currentColor');
        iconSvg = svgEl.outerHTML;
      }
    } catch (e) {
      // if DOMParser not available or parse fails, fall back to raw string
    }

    return iconSvg || '';
  }

  /** Build CSS class list from properties */
  _getClasses() {
    const classes = ['ac-button', `ac-button--${this.variant}`];
    if (this.iconOnly) {
      classes.push('ac-button--icon-only');
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
    const iconSVG = this._getIconSVG();
    const content = html`
      ${iconSVG
        ? html`<span class="ac-button__icon">${unsafeHTML(iconSVG)}</span>`
        : html`<slot name="icon"></slot>`}

      ${this.iconOnly ? '' : html`<slot></slot>`}
    `;

    const classes = this._getClasses();

    if (this.href) {
      return html`
        <a
          part="button"
          class=${classes}
          href=${this.href}
          target=${this.target}
          aria-label=${this.iconOnly && this.ariaLabel ? this.ariaLabel : undefined}
          ?disabled=${this.disabled}
        >
          ${content}
        </a>
      `;
    }

    return html`
      <button
        part="button"
        class=${classes}
        ?disabled=${this.disabled}
        aria-disabled=${this.disabled}
        aria-label=${this.iconOnly && this.ariaLabel ? this.ariaLabel : undefined}
      >
        ${content}
      </button>
    `;
  }
}

customElements.define('ac-button', AcButton);
