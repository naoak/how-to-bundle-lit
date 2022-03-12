import { html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators/custom-element.js";

@customElement("swc-demo")
export class SWCDemo extends LitElement {
  static properties = {
    count: {
      type: Number,
    },
  };

  private count: number = 0;

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
