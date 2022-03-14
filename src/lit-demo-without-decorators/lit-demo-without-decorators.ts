import { html, LitElement, TemplateResult } from "lit";
import { Num, initialCount } from "./constants";

export class LitDemoWithoutDecorators extends LitElement {
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

customElements.define("lit-demo-without-decorators", LitDemoWithoutDecorators);
