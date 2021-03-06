import { html, PolymerElement } from "@polymer/polymer";
import { customElement, observe, property } from "@polymer/decorators";

@customElement("polymer-demo")
export class PolymerDemo extends PolymerElement {
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

  @observe("count")
  log(count: number) {
    console.log(`count changed to ${count}`);
  }
}
