import { css } from 'lit';

export const acButtonStyles = css`
  :host {
    display: inline-block;
  }

  /* ─── Base Button ─── */
  .ac-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm, 8px);
    font-family: var(--body-font, 'Lato', sans-serif);
    font-size: var(--font-size-sm, 14px);
    font-weight: 500;
    cursor: pointer;
    border: var(--border-sm, 2px) solid transparent;
    border-radius: var(--button-rounded, var(--border-radius-sm, 8px));
    height: var(--button-height-base, var(--component-height-base, 40px));
    padding: 0 var(--spacing-base, 16px);
    transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
    user-select: none;
    white-space: nowrap;
    color: var(--button-text-color, #e7e7e7);
  }

  /* ─── Size: small ─── */
  .ac-button--small {
    height: var(--button-height-small, var(--component-height-small, 36px));
    font-size: var(--font-size-xs, 12px);
    padding: 0 var(--spacing-sm, 8px);
  }

  /* ═══════════════════════════════════════
     PRIMARY variant
     ═══════════════════════════════════════ */

  /* Filled (default) */
  .ac-button--primary {
    background-color: var(--primary-button-primary-background, var(--color-primary-600, #0C41FF));
    color: var(--button-text-color, #e7e7e7);
    border-color: transparent;
  }

  .ac-button--primary:hover {
    background-color: var(--primary-button-primary-background-hover, var(--color-primary-500, #0071F7));
  }

  .ac-button--primary:active {
    background-color: var(--color-primary-700, #002CCC);
  }

  /* Outline */
  .ac-button--primary.ac-button--outline {
    background-color: var(--primary-button-primary-background-outline, transparent);
    color: var(--button-text-color, #e7e7e7);
    border-color: var(--primary-button-primary-background, var(--color-primary-600, #0C41FF));
  }

  .ac-button--primary.ac-button--outline:hover {
    background-color: var(--primary-button-primary-color-outline-hover, var(--color-primary-400, #809BFF));
    border-color: var(--primary-button-primary-color-outline-hover, var(--color-primary-400, #809BFF));
  }

  /* ═══════════════════════════════════════
     SECONDARY variant
     ═══════════════════════════════════════ */

  /* Filled (default) */
  .ac-button--secondary {
    background-color: var(--color-black-medium, #1F2024);
    color: var(--button-text-color, #e7e7e7);
    border-color: transparent;
  }

  .ac-button--secondary:hover {
    background-color: var(--secondary-button-secondary-color-hover, var(--color-black-light, #27292E));
  }

  .ac-button--secondary:active {
    background-color: var(--color-black, #141518);
  }

  /* Outline */
  .ac-button--secondary.ac-button--outline {
    background-color: transparent;
    color: var(--button-text-color, #e7e7e7);
    border-color: var(--secondary-button-secondary-color-outline-hover, var(--color-black-stroke, #40424A));
  }

  .ac-button--secondary.ac-button--outline:hover {
    background-color: var(--secondary-button-secondary-color-outline-hover, var(--color-black-stroke, #40424A));
  }

  /* ═══════════════════════════════════════
     DISABLED state
     ═══════════════════════════════════════ */
  .ac-button--disabled,
  .ac-button--disabled:hover,
  .ac-button--disabled:active {
    background-color: var(--button-color-disable, var(--color-white-dark, #A4A4A4));
    color: var(--button-text-color-disable, var(--color-black-light, #27292E));
    border-color: transparent;
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.7;
  }

  /* ─── Icon slot ─── */
  .ac-button__icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    line-height: 1;
  }

  .ac-button__icon ::slotted(*) {
    width: 1em;
    height: 1em;
  }
`;
