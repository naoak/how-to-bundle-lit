import { html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators/custom-element.js";
import { state } from "lit/decorators/state.js";
import { Num, initialCount } from "./constants";

@customElement("babel-lit-demo")
export class BabelLitDemo extends LitElement {
  @state()
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
