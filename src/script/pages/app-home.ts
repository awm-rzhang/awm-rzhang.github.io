import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Welcome!';

  static get styles() {
    return css`
      #welcomeBar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #welcomeBar fluent-card {
        margin-bottom: 12px;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }


      #mainInfo fluent-anchor::part(control), #infoCard fluent-anchor::part(control) {
        color: white;
      }

      @media (min-width: 1024px) {
        #welcomeCard,
        #infoCard {
          width: 54%;
        }
      }

      @media (horizontal-viewport-segments: 2) {
        #welcomeBar {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      @media(prefers-color-scheme: light) {
        fluent-card {
          --fill-color: #edebe9;
        }

        #mainInfo fluent-anchor::part(control), #infoCard fluent-anchor::part(control) {
          color: initial;
        }
      }

      @media(prefers-color-scheme: dark) {
        fluent-card {
          --fill-color: #4e4e4e;
          color: white;
          border: none;
        }
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>
      <div>
        <div id="welcomeBar">
          <fluent-card id="infoCard">
            <h2>Features</h2>

            <ul>
              <li>
                <fluent-anchor
                  href="/cra-pwa"
                  appearance="hypertext"
                  >PWA example</fluent-anchor
                >
              </li>

              <li>
                <fluent-anchor
                  href="/react-lab"
                  appearance="hypertext"
                  >Ryanz Space</fluent-anchor
                >
              </li>
            </ul>
          </fluent-card>

          <fluent-anchor href="${(import.meta as any).env.BASE_URL}about" appearance="accent">Navigate to About</fluent-anchor>
        </div>

        <pwa-install>Install Ryanz Space</pwa-install>
      </div>
    `;
  }
}
