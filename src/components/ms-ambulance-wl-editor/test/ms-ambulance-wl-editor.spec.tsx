import { newSpecPage } from '@stencil/core/testing';
import { MsAmbulanceWlEditor } from '../ms-ambulance-wl-editor';

describe('ms-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MsAmbulanceWlEditor],
      html: `<ms-ambulance-wl-editor></ms-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <ms-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ms-ambulance-wl-editor>
    `);
  });
});
