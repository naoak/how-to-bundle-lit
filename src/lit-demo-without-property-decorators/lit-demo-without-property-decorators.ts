import { html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { type Num, initialCount } from "./constants";

@customElement("lit-demo-without-property-decorators")
export class LitDemoWithoutPropertyDecorators extends LitElement {
  static properties = {
    count: {
      type: Number,
    },
  };

  private count: Num = initialCount;

  protected render(): TemplateResult {
    return html`
      <div>count: ${this.count}</div>
      <button @click=${this.increment}>increment</button>
    `;
  }

  private increment() {
    this.count++;
  }
}
