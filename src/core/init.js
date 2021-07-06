import { _initAnimate } from "../animate/index";
import { isObject, __$styleInject } from "../utils";

import { initScrollEvent } from "./scrollEvent.js"

function initMixin( AnimationController ){
    AnimationController.prototype._init = _init;
    AnimationController.prototype._initAnimate = _initAnimate;
}

function _init(options){
    let vm = this;
    this._options = isObject(options) ? options : {};
    initScrollEvent(vm)
}

export {
    initMixin
}