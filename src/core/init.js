import { initAnimate } from "../animate/index"
function initMixin( AnimationController ){
    AnimationController.prototype._init = _init;
    AnimationController.prototype._initAnimate = initAnimate;

}


function _init(){
    AnimationController.prototype._init = function(options){
        this._options = options
        
    };
}


export {
    initMixin
}