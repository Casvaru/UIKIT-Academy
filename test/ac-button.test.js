import { expect, fixture, html } from '@open-wc/testing';
import '../src/components/button/ac-button.js';

describe('ac-button', () => {
  it('should be defined', async () => {
    const el = await fixture(html`<ac-button>Test</ac-button>`);
    expect(el).to.be.instanceOf(customElements.get('ac-button'));
  });

  it('should render default label via slot', async () => {
    const el = await fixture(html`<ac-button>Click me</ac-button>`);
    expect(el.textContent.trim()).to.equal('Click me');
  });

  it('should default to primary variant', async () => {
    const el = await fixture(html`<ac-button>Primary</ac-button>`);
    expect(el.variant).to.equal('primary');
    const inner = el.shadowRoot.querySelector('button');
    expect(inner.classList.contains('ac-button--primary')).to.be.true;
  });

  it('should apply secondary variant class', async () => {
    const el = await fixture(html`<ac-button variant="secondary">Sec</ac-button>`);
    expect(el.variant).to.equal('secondary');
    const inner = el.shadowRoot.querySelector('button');
    expect(inner.classList.contains('ac-button--secondary')).to.be.true;
  });

  it('should apply tertiary variant class', async () => {
    const el = await fixture(html`<ac-button variant="tertiary">Tertiary</ac-button>`);
    expect(el.variant).to.equal('tertiary');
    const inner = el.shadowRoot.querySelector('button');
    expect(inner.classList.contains('ac-button--tertiary')).to.be.true;
  });

  it('should apply small size class', async () => {
    const el = await fixture(html`<ac-button size="small">Small</ac-button>`);
    const inner = el.shadowRoot.querySelector('button');
    expect(inner.classList.contains('ac-button--small')).to.be.true;
  });

  it('should set disabled state', async () => {
    const el = await fixture(html`<ac-button disabled>Disabled</ac-button>`);
    const inner = el.shadowRoot.querySelector('button');
    expect(inner.disabled).to.be.true;
    expect(inner.classList.contains('ac-button--disabled')).to.be.true;
  });

  it('should render icon from heroicons when icon-name is provided', async () => {
    const el = await fixture(html`<ac-button icon-name="plus">Add</ac-button>`);
    const iconSlot = el.shadowRoot.querySelector('.ac-button__icon');
    expect(iconSlot).to.exist;
  });

  it('should combine variant + size classes', async () => {
    const el = await fixture(html`
      <ac-button variant="secondary" size="small">
        Combo
      </ac-button>
    `);
    const inner = el.shadowRoot.querySelector('button');
    expect(inner.classList.contains('ac-button--secondary')).to.be.true;
    expect(inner.classList.contains('ac-button--small')).to.be.true;
  });

  it('should support icon-name attribute with heroicons', async () => {
    const el = await fixture(html`<ac-button icon-name="plus">Add Item</ac-button>`);
    expect(el.iconName).to.equal('plus');
  });
});
