"use strict";
cc._RF.push(module, '6ab49GeZ1hJYrCtsRM0sBgk', 'End');
// scripts/End.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Global = require("./Global");
var End = (function (_super) {
    __extends(End, _super);
    function End() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    End.prototype.onLoad = function () {
        cc.find('Canvas').opacity = 0;
        cc.find('Canvas').runAction(cc.fadeIn(1));
        debugger;
        Global.resetAudio();
        if (Global.resultState.good) {
            this.angel.active = true;
            Global.audioConfigData.goodHandler = cc.audioEngine.play(this.goodAudio, true, 1);
        }
        else if (Global.resultState.bad) {
            this.devil.active = true;
            Global.audioConfigData.badHandler = cc.audioEngine.play(this.badAudio, true, 1);
        }
        else if (Global.resultState.normal) {
            this.normal.active = true;
            Global.audioConfigData.normalHandler = cc.audioEngine.play(this.normalAudio, true, 1);
        }
    };
    return End;
}(cc.Component));
__decorate([
    property(cc.Node)
], End.prototype, "angel", void 0);
__decorate([
    property(cc.Node)
], End.prototype, "devil", void 0);
__decorate([
    property(cc.Node)
], End.prototype, "normal", void 0);
__decorate([
    property(cc.AudioClip)
], End.prototype, "goodAudio", void 0);
__decorate([
    property(cc.AudioClip)
], End.prototype, "badAudio", void 0);
__decorate([
    property(cc.AudioClip)
], End.prototype, "normalAudio", void 0);
End = __decorate([
    ccclass
], End);
exports.default = End;

cc._RF.pop();