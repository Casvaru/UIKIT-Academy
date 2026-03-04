import { css } from 'lit';

export const acHeaderStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
    width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  .header {
    display: flex;
    align-items: center;
    height: var(--header-height, 72px);
    padding: var(--header-padding-y, 0) var(--header-padding-x, 32px);
    background-color: var(--header-bg, #141518);
    border-bottom: 1px solid var(--header-border-color, #40424A);
    width: 100%;
  }

  .header__logo {
    display: flex;
    align-items: center;
    margin-right: var(--header-logo-margin-right, 48px);
    flex-shrink: 0;
  }

  .header__logo-img {
    height: 32px;
    display: block;
  }

  .header__nav {
    display: flex;
    align-items: center;
    gap: var(--header-nav-gap, 32px);
    flex-grow: 1; /* Pushes actions to the right if we use flex-grow or actions use margin-left: auto */
  }

  /* We can style slotted nav elements directly if needed, but normally we let user style them, 
     or apply a flex layout to the slot */
  .header__nav ::slotted(*) {
    display: flex;
    align-items: center;
    gap: var(--header-nav-gap, 32px);
  }

  .header__actions-wrapper {
    display: flex;
    align-items: center;
    gap: var(--header-actions-gap, 24px);
    margin-left: auto;
    flex-shrink: 0;
  }

  .header__actions {
    display: flex;
    align-items: center;
    gap: var(--spacing-base, 16px);
  }

  .header__actions ::slotted(*) {
    display: flex;
    align-items: center;
    gap: var(--spacing-base, 16px);
  }

  .header__profile {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--header-profile-size, 32px);
    height: var(--header-profile-size, 32px);
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--color-black-stroke, #40424A); /* Placeholder bg */
  }

  .header__profile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header__profile ::slotted(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .header {
      padding: 0 var(--spacing-base, 16px);
      justify-content: space-between;
    }
    
    .header__logo {
      margin-right: 16px;
    }

    .header__nav {
      display: none; /* Hide nav on mobile by default, usually handled by a hamburger menu */
    }
  }
`;
