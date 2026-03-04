import { css } from 'lit';

export const acButtonStyles = css`
  :host {
    display: inline-block;
  }

  /* ═══════════════════════════════════════
     BASE BUTTON - All fallbacks defined inline
     ═══════════════════════════════════════ */
  .ac-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm, 8px);
    font-family: var(--body-font) !important;
    font-size: var(--font-size-sm, 14px);
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    border: var(--border-sm, 2px) solid transparent;
    border-radius: var(--button-rounded, var(--border-radius-sm, 8px));
    height: var(--button-height-base, 40px);
    padding: 0 var(--spacing-lg, 24px);
    transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
    outline: none;
    user-select: none;
    white-space: nowrap;
    color: var(--button-text-color, #e7e7e7);
  }

  /* Size: small */
  .ac-button--small {
    height: var(--button-height-small, 36px);
    font-size: var(--font-size-sm, 14px);
    padding: 0 var(--spacing-lg, 24px);
  }

  /* ═══════════════════════════════════════
     PRIMARY variant - filled
     ═══════════════════════════════════════ */
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

  /* ═══════════════════════════════════════
     SECONDARY variant - no background
     ═══════════════════════════════════════ */
  .ac-button--secondary {
    background-color: transparent;
    color: var(--button-text-color, #e7e7e7);
    border-color: transparent;
  }

  .ac-button--secondary:hover {
    background-color: var(--secondary-button-secondary-background-hover, var(--color-black-light, #27292E));
  }

  .ac-button--secondary:active {
    background-color: transparent;
    border-color: transparent;
  }

  /* ═══════════════════════════════════════
     TERTIARY variant - outline
     ═══════════════════════════════════════ */
  .ac-button--tertiary {
    background-color: var(--tertiary-button-tertiary-background, var(--color-black-medium, #1F2024));
    color: var(--button-text-color, #e7e7e7);
    border-color: var(--tertiary-button-tertiary-border, var(--color-black-stroke, #40424A));
  }

  .ac-button--tertiary:hover {
    background-color: var(--tertiary-button-tertiary-background-hover, var(--color-black-light, #27292E));
    border-color: var(--tertiary-button-tertiary-border-hover, var(--color-black-stroke, #40424A));
  }

  .ac-button--tertiary:active {
    background-color: var(--tertiary-button-tertiary-background-active, rgba(0,0,0,0.95));
    border-color: var(--tertiary-button-tertiary-border-hover, var(--color-black-stroke, #40424A));
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

  /* Focus styles for accessibility (WCAG) */
  .ac-button--primary:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--primary-button-focus-ring, var(--focus-ring-color, rgba(12,65,255,0.9)));
  }

  .ac-button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px var(--focus-ring-color, rgba(12,65,255,0.9));
  }

  .ac-button--icon-only:focus-visible {
    box-shadow: 0 0 0 3px var(--focus-ring-color, rgba(12,65,255,0.9));
  }

  /* Icon slot */
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

  .ac-button__icon svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
    color: inherit;
  }

  /* Icon-only button */
  .ac-button--icon-only {
    padding: 0;
    width: var(--button-height-base, 40px);
    justify-content: center;
  }

  .ac-button--icon-only.ac-button--small {
    width: var(--button-height-small, 36px);
  }

  @media (max-width: 1024px) {
    :host {
      display: block;
      width: 100%;
    }

    .ac-button {
      width: 100%;
      display: flex;
    }
  }
`;
