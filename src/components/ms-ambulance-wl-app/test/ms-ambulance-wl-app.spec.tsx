import { newSpecPage } from '@stencil/core/testing';
import { MsAmbulanceWlApp } from '../ms-ambulance-wl-app';

describe('ms-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MsAmbulanceWlApp],
      html: `<ms-ambulance-wl-app></ms-ambulance-wl-app>`,
    });
    expect(page.root).toEqualHtml(`
      <ms-ambulance-wl-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ms-ambulance-wl-app>
    `);
  });
});
