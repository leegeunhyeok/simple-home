import MouseWheelEvent from '@/event/MouseWheelEvent'

class EventManager {
  /**
   * @description Return event listener
   */
  broker () {
    // TODO: Event type check
    return new MouseWheelEvent().changeDegree.bind(this)
  }
}

export default EventManager
