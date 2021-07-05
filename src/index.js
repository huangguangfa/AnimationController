
import { initMixin } from "./core/init.js"
function AnimationController(options){
    this._initAnimate()
    this._init(options)
}


initMixin( AnimationController )

export default AnimationController;
