import { css } from 'lit';

export const acCardDashboardStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  .card-dashboard {
    background-color: var(--card-dashboard-bg, var(--color-black-medium, #1F2024));
    border-radius: var(--card-dashboard-radius, var(--border-radius-base, 16px));
    padding: var(--card-dashboard-padding, var(--spacing-lg, 24px));
    display: flex;
    flex-direction: column;
    gap: var(--card-dashboard-gap, var(--spacing-base, 16px));
    border: 1px solid var(--card-dashboard-border-color, transparent);
    box-shadow: var(--card-dashboard-shadow, none);
    border: 1px solid var(--card-dashboard-border, transparent);
  }

  .card-dashboard__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .card-dashboard__icon-wrapper {
    width: var(--card-dashboard-icon-size, 48px);
    height: var(--card-dashboard-icon-size, 48px);
    border-radius: var(--card-dashboard-icon-radius, var(--border-radius-sm, 12px));
    background-color: var(--card-dashboard-icon-bg, rgba(0, 113, 247, 0.15));
    color: var(--card-dashboard-icon-color, var(--color-primary-500, #0071F7));
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-dashboard__icon-wrapper svg,
  .card-dashboard__icon-wrapper ::slotted(svg) {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }

  .card-dashboard__trend {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    border-radius: 100px;
    font-size: var(--font-size-body-sm, 14px);
    font-weight: 600;
    font-family: var(--body-font, 'Lato', sans-serif);
    line-height: 1;
  }

  .card-dashboard__trend--success {
    background-color: var(--card-dashboard-trend-bg-success, rgba(74, 222, 128, 0.1));
    color: var(--card-dashboard-trend-color-success, var(--color-succes-400, #4ADE80));
  }

  .card-dashboard__trend--danger {
    background-color: var(--card-dashboard-trend-bg-danger, rgba(248, 113, 113, 0.1));
    color: var(--card-dashboard-trend-color-danger, #F87171);
  }

  .card-dashboard__trend--neutral {
    background-color: var(--card-dashboard-trend-bg-neutral, rgba(231, 231, 231, 0.1));
    color: var(--card-dashboard-trend-color-neutral, var(--color-white-medium, #CECECE));
  }

  .card-dashboard__body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm, 8px);
  }

  .card-dashboard__title {
    font-family: var(--body-font, 'Lato', sans-serif);
    font-size: var(--card-dashboard-title-size, var(--font-size-body-base, 16px));
    color: var(--card-dashboard-title-color, var(--color-white-dark, #A4A4A4));
    margin: 0;
    font-weight: 500;
  }

  .card-dashboard__value {
    font-family: var(--body-title, 'Merriweather', sans-serif);
    font-size: var(--card-dashboard-value-size, var(--h4, 30px));
    color: var(--card-dashboard-value-color, var(--color-white, #e7e7e7));
    font-weight: bold;
    margin: 0;
    line-height: 1.2;
  }

  .card-dashboard__description {
    font-family: var(--body-font, 'Lato', sans-serif);
    font-size: var(--card-dashboard-description-size, var(--font-size-body-sm, 14px));
    color: var(--card-dashboard-description-color, var(--color-white-dark, #A4A4A4));
    margin: 0;
  }
`;
