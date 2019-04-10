
class MouseMoveEvent {
  /**
   * @description Change menu degree
   * @param {MouseEvent} event
   */
  changeDegree (event) {
    let x = event.clientX
    let speed = this.state.speed
    this.degree = x / (this.state.screenWidth / speed) * 360
  }
}

export default MouseMoveEvent
