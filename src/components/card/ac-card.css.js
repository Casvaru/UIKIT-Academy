import { css } from 'lit';

export const acCardStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  .ac-card {
    background-color: var(--ac-card-bg, #1F2024);
    border: var(--ac-card-border-width, 1px) solid var(--ac-card-border-color, #27292E);
    border-radius: var(--ac-card-radius, 8px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .ac-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--ac-card-padding, 24px) var(--ac-card-padding, 24px) calc(var(--ac-card-padding, 24px) / 2);
    gap: var(--spacing-base, 16px);
  }

  .ac-card__title {
    font-family: var(--ac-card-title-font, 'Merriweather', serif);
    font-size: var(--ac-card-title-size, 20px);
    color: var(--ac-card-title-color, #e7e7e7);
    font-weight: var(--ac-card-title-weight, bold);
    margin: 0;
  }

  .ac-card__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    color: var(--ac-card-arrow-color, #CECECE);
    cursor: pointer;
    text-decoration: none;
  }

  .ac-card__content {
    padding: var(--ac-card-padding, 24px);
  }

  /* Adjust padding when no title is present */
  .ac-card--no-title .ac-card__content {
    padding-top: var(--ac-card-padding, 24px);
  }
`;
