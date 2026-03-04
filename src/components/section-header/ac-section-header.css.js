import { css } from 'lit';

export const acSectionHeaderStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--section-header-gap, 16px);
    padding: var(--section-header-padding, 24px);
  }

  .section-header__content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs, 4px);
    flex: 1;
    min-width: 0;
  }

  .section-header__title {
    font-family: var(--section-header-title-font, 'Merriweather', sans-serif);
    font-size: var(--h5, 24px);
    font-weight: 700;
    color: var(--section-header-title-color, #e7e7e7);
    margin: 0;
    line-height: 1.2;
  }

  .section-header__description {
    font-family: var(--section-header-description-font, 'Lato', sans-serif);
    font-size: var(--font-size-body-base, 16px);
    color: var(--section-header-description-color, #A4A4A4);
    margin: 0;
    line-height: 1.5;
  }

  .section-header__actions {
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    .section-header {
      flex-direction: column;
      align-items: stretch;
      gap: var(--spacing-lg, 24px);
    }

    .section-header__title {
      font-size: var(--h5, 25px);
    }

    .section-header__actions {
      width: 100%;
    }

    .section-header__actions ::slotted(*) {
      width: 100%;
    }
  }
`;
