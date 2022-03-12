import { html, PolymerElement } from "@polymer/polymer";
import { customElement, property } from "@polymer/decorators";

@customElement("tsc-polymer-demo")
export class TSCPolymerDemo extends PolymerElement {
  @property({ type: Number })
  count: number = 0;

  static get template() {
    return html`
      <div>count: [[count]]</div>
      <button on-click="increment">increment</button>
    `;
  }

  increment() {
    this.count++;
  }
}
