
class MouseWheelEvent {
  /**
   * @description Change menu degree
   * @param {MouseEvent} event
   */
  changeDegree (event) {
    let delta = Math.sign(event.deltaY)
    this.degree += delta * this.state.speed * 10
  }
}

export default MouseWheelEvent
