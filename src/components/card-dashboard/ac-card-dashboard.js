import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { acCardDashboardStyles } from './ac-card-dashboard.css.js';

import users from 'heroicons/24/solid/users.svg?raw';
import userGroup from 'heroicons/24/solid/user-group.svg?raw';
import chartBar from 'heroicons/24/solid/chart-bar.svg?raw';
import currencyDollar from 'heroicons/24/solid/currency-dollar.svg?raw';
import bookOpen from 'heroicons/24/solid/book-open.svg?raw';
import lightBulb from 'heroicons/24/solid/light-bulb.svg?raw';

/**
 * @element ac-card-dashboard
 *
 * @description
 * Card component for dashboard metrics, displaying a value, title, icon, and trend indicator.
 *
 * @prop {string} heading - Title above the value (e.g. "Total Students")
 * @prop {string} value - Main metric value to display (e.g. "1,240")
 * @prop {string} description - Subtitle/description below value (e.g. "Active learners this month")
 * @prop {string} iconName - Icon name to display (e.g., 'users', 'chart-bar')
 * @prop {string} trendLabel - Text to display in the trend badge (e.g. "+12% ↑")
 * @prop {'success'|'danger'|'neutral'} trendStatus - Color theme for the trend badge. Default: 'success'
 *
 * @slot icon - Custom icon slot if not using iconName
 *
 * @example
 * <ac-card-dashboard
 *   heading="Total Students"
 *   value="1,240"
 *   description="Active learners this month"
 *   icon-name="users"
 *   trend-label="+12% ↑"
 *   trend-status="success"
 * ></ac-card-dashboard>
 */
export class AcCardDashboard extends LitElement {
  static styles = [acCardDashboardStyles];

  static properties = {
    heading: { type: String },
    value: { type: String },
    description: { type: String },
    iconName: { type: String, attribute: 'icon-name' },
    trendLabel: { type: String, attribute: 'trend-label' },
    trendStatus: { type: String, attribute: 'trend-status' },
  };

  constructor() {
    super();
    this.heading = '';
    this.value = '';
    this.description = '';
    this.iconName = undefined;
    this.trendLabel = '';
    this.trendStatus = 'success';
  }

  _getIconSVG() {
    if (!this.iconName) return '';
    
    const iconMap = {
      'users': users || userGroup,
      'user-group': userGroup || users,
      'chart-bar': chartBar,
      'currency-dollar': currencyDollar,
      'book-open': bookOpen,
      'light-bulb': lightBulb
    };

    let iconSvg = iconMap[this.iconName];
    if (!iconSvg) return '';

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(iconSvg, 'image/svg+xml');
      const svgEl = doc.documentElement;
      if (svgEl && svgEl.tagName.toLowerCase() === 'svg') {
        svgEl.setAttribute('width', '1em');
        svgEl.setAttribute('height', '1em');
        svgEl.setAttribute('aria-hidden', 'true');
        svgEl.setAttribute('fill', 'currentColor');
        iconSvg = svgEl.outerHTML;
      }
    } catch (e) {
      // fallback
    }

    return iconSvg || '';
  }

  render() {
    const iconSVG = this._getIconSVG();
    const trendClass = `card-dashboard__trend--${this.trendStatus}`;

    return html`
      <div class="card-dashboard">
        <div class="card-dashboard__header">
          <div class="card-dashboard__icon-wrapper">
            ${iconSVG
              ? html`${unsafeHTML(iconSVG)}`
              : html`<slot name="icon"></slot>`}
          </div>
          ${this.trendLabel
            ? html`<div class="card-dashboard__trend ${trendClass}">${this.trendLabel}</div>`
            : ''}
        </div>
        <div class="card-dashboard__body">
          ${this.heading ? html`<h4 class="card-dashboard__title">${this.heading}</h4>` : ''}
          ${this.value ? html`<p class="card-dashboard__value">${this.value}</p>` : ''}
          ${this.description ? html`<p class="card-dashboard__description">${this.description}</p>` : ''}
        </div>
      </div>
    `;
  }
}

customElements.define('ac-card-dashboard', AcCardDashboard);
