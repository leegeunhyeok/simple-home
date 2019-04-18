import MouseMoveEvent from '@/event/MouseMoveEvent'

class EventManager {
  /**
   * @description Return event listener
   */
  broker () {
    // TODO: Event type check
    return new MouseMoveEvent().changeDegree.bind(this)
  }
}

export default EventManager
