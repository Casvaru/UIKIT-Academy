import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { acCardStyles } from './ac-card.css.js';
import arrowRight from 'heroicons/24/solid/arrow-right.svg?raw';

/**
 * @element ac-card
 *
 * @description
 * Card component for the UIKIT-Academy design system.
 *
 * @prop {string} title - The title of the card.
 * @prop {boolean} hasArrow - Whether to show a right arrow next to the title. Default: false.
 */
export class AcCard extends LitElement {
  static styles = [acCardStyles];

  static properties = {
    title: { type: String, reflect: true },
    hasArrow: { type: Boolean, reflect: true, attribute: 'has-arrow' },
    href: { type: String, reflect: true },
    target: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.title = '';
    this.hasArrow = false;
    this.href = '';
    this.target = '_self';
  }

  /** Get the SVG HTML for the icon */
  _getIconSVG(name) {
    if (!name || name !== 'arrow-right') return '';
    
    const iconMap = {
      'arrow-right': arrowRight,
    };

    let iconSvg = iconMap[name];
    if (!iconSvg) return '';

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(iconSvg, 'image/svg+xml');
      const svgEl = doc.documentElement;
      if (svgEl && svgEl.tagName.toLowerCase() === 'svg') {
        svgEl.setAttribute('width', '1em');
        svgEl.setAttribute('height', '1em');
        svgEl.setAttribute('fill', 'currentColor');
        iconSvg = svgEl.outerHTML;
      }
    } catch (e) {}

    return iconSvg || '';
  }

  render() {
    const arrowSVG = (this.title && this.hasArrow) ? this._getIconSVG('arrow-right') : '';

    return html`
      <div class="ac-card ${!this.title ? 'ac-card--no-title' : ''}">
        ${this.title ? html`
          <header class="ac-card__header">
            <h3 class="ac-card__title">${this.title}</h3>
            ${arrowSVG ? html`
              ${this.href ? html`
                <a href="${this.href}" target="${this.target}" class="ac-card__icon">
                  ${unsafeHTML(arrowSVG)}
                </a>
              ` : html`
                <span class="ac-card__icon">
                  ${unsafeHTML(arrowSVG)}
                </span>
              `}
            ` : ''}
          </header>
        ` : ''}

        <div class="ac-card__content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('ac-card', AcCard);
