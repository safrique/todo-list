import { Component } from './Component.js'

export class Button extends Component {
  constructor (button_text, click_function, params = []) {
    super()
    this.buildComponent(button_text, click_function, params)
  }

  buildComponent (button_text, click_function, params) {
    // console.log(`button_text=${button_text} click_function=${click_function} params: string=${params.toString()} > spread=`, ...params, ` > array=`, params)
    this.component = document.createElement(`button`)
    this.component.innerHTML = button_text
    if (params.length) {
      this.component.onclick = () => click_function(...params)
    } else { this.component.onclick = () => click_function(params) }
  }
}