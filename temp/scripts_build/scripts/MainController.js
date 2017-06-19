"use strict";
cc._RF.push(module, '196e6OWsYVPNarJcc7O5Rch', 'MainController');
// scripts/MainController.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Global = require("./Global");
var MainController = (function (_super) {
    __extends(MainController, _super);
    function MainController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentQuestionIndex = 0;
        _this.currentAngelIndex = 1;
        _this.currentDevilIndex = 1;
        return _this;
    }
    MainController.prototype.execEffect = function (target, node, cb) {
        node.position = node.parent.convertToNodeSpaceAR(target.convertToWorldSpaceAR(cc.v2(0, 0)));
        setTimeout(function () {
            node.active = false;
        }, 100);
        setTimeout(function () {
            node.active = true;
        }, 200);
        setTimeout(function () {
            node.active = false;
        }, 300);
        setTimeout(function () {
            node.active = true;
        }, 400);
        setTimeout(function () {
            node.active = false;
        }, 500);
        setTimeout(function () {
            node.active = true;
        }, 600);
        setTimeout(function () {
            node.position = cc.v2(10000, 10000);
            cb();
        }, 700);
    };
    MainController.prototype.newTurn = function () {
        // let randomI: number = null;
        // if (Global.countConfigData.currentNum <= Global.countConfigData.totalNum) {
        //     randomI = Math.floor(cc.random0To1() * Global.countConfigData.totalNum);
        //     while (Global.questionConfigDataArray[randomI].isUsed) {
        //         randomI = (randomI + 1) % Global.countConfigData.totalNum;
        //     }
        //     for(let i = 0; i < 7; i++) {
        //         if(!Global.questionConfigDataArray[i].isUsed) {
        //             randomI = i;
        //             break;
        //         }
        //     }
        // }
        var randomI = this.currentQuestionIndex;
        this.currentQuestionIndex++;
        Global.countConfigData.currentNum++;
        Global.questionConfigDataArray[randomI].isUsed = true;
        var question = Global.questionConfigDataArray[randomI];
        this.question = question;
        this.showAll();
        this.showData(question);
        this.playQuestionAudio();
    };
    MainController.prototype.playQuestionAudio = function () {
        cc.audioEngine.play(this.questionAudio, false, 1);
    };
    MainController.prototype.onLoad = function () {
        cc.find('Canvas').opacity = 0;
        cc.find('Canvas').runAction(cc.fadeIn(1));
        //TODO 背景音
        Global.resetAudio();
        Global.audioConfigData.backgroundHandler = cc.audioEngine.play(this.backgroundAudio, true, 1);
        this.yesBtn.on('touchstart', this.onYesBtnStart, this);
        this.noBtn.on('touchend', this.onNoBtnStart, this);
        this.yesBtn.on("touchend", this.onYesBtn, this);
        this.noBtn.on("touchend", this.onNoBtn, this);
        this.newTurn();
    };
    MainController.prototype.onYesBtnStart = function () {
        this.yesBtn.color = cc.Color.GRAY;
    };
    MainController.prototype.onNoBtnStart = function () {
        this.noBtn.color = cc.Color.GRAY;
    };
    MainController.prototype.onYesBtn = function () {
        var _this = this;
        this.yesBtn.color = cc.Color.WHITE;
        Global.scoreConfigData.score += this.question.yesAttr;
        this.hideAll();
        //TODO 播放动画
        this.playAnim(this.question.yesAttr, function () {
            var isEnd = _this.checkEnd();
            if (!isEnd) {
                _this.newTurn();
            }
        });
    };
    MainController.prototype.onNoBtn = function () {
        var _this = this;
        this.noBtn.color = cc.Color.WHITE;
        Global.scoreConfigData.score += this.question.noAttr;
        this.hideAll();
        //TODO 播放动画
        this.playAnim(this.question.noAttr, function () {
            var isEnd = _this.checkEnd();
            if (!isEnd) {
                _this.newTurn();
            }
        });
    };
    MainController.prototype.playAnim = function (attr, cb) {
        if (attr < 0) {
            // let index = -1;
            // for (let i = 1; i < 7; i++) {
            //     if (!this.angelHurtPoint.getChildByName('angelHurtPoint' + i).active) {
            //         index = i;
            //         break;
            //     }
            // }
            var index = this.currentAngelIndex;
            this.currentAngelIndex++;
            cc.audioEngine.play(this.angelAudio1, false, 1);
            //TODO 随机
            this.angelHurtPoint.getChildByName('angelHurtPoint' + index).active = true;
            this.angelHurtPoint.getChildByName('angelHurtPoint' + index).opacity = 0;
            this.angelHurtPoint.getChildByName('angelHurtPoint' + index).runAction(cc.fadeIn(1));
            var target = this.angelHurtPoint.getChildByName('angelHurtPoint' + index);
            //console.log(`${index} 天使`);
            this.execEffect(target, this.bloodNode, function () {
                //setTimeout(cb, 1000);
                cb();
            });
        }
        else {
            // let index = -1;
            // for (let i = 1; i < 7; i++) {
            //     if (this.devilHurtPoint.getChildByName('devilHurtPoint' + i).active) {
            //         index = i;
            //         break;
            //     }
            // }
            var index_1 = this.currentDevilIndex;
            this.currentDevilIndex++;
            cc.audioEngine.play(this.devilAudio, false, 1);
            this.devilHurtPoint.getChildByName('devilHurtPoint' + index_1).active = true;
            this.devilHurtPoint.getChildByName('devilHurtPoint' + index_1).opacity = 255;
            var self_1 = this;
            this.devilHurtPoint.getChildByName('devilHurtPoint' + index_1).runAction(cc.sequence(cc.fadeOut(1), cc.callFunc(function () {
                self_1.devilHurtPoint.getChildByName('devilHurtPoint' + index_1).active = false;
            })));
            //console.log(`${index} 恶魔`);
            var target = this.devilHurtPoint.getChildByName('devilHurtPoint' + index_1);
            this.execEffect(target, this.lightNode, function () {
                //setTimeout(cb, 1000);
                cb();
            });
        }
    };
    MainController.prototype.checkEnd = function () {
        this.resetResultState();
        if (Global.countConfigData.currentNum >= Global.countConfigData.totalNum) {
            if (Global.scoreConfigData.score === 0) {
                //中立
                Global.resultState.normal = true;
                // cc.find('Canvas').runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(()=>{
                //
                // })));
                cc.find('Canvas').runAction(cc.fadeOut(1));
                setTimeout(function () {
                    cc.director.loadScene("end");
                }, 1500);
                return true;
            }
            else if (Global.scoreConfigData.score > 0) {
                //天使活
                Global.resultState.good = true;
                // cc.find('Canvas').runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(()=>{
                //
                // })));
                cc.find('Canvas').runAction(cc.fadeOut(1));
                setTimeout(function () {
                    cc.director.loadScene("end");
                }, 1500);
                return true;
            }
            else if (Global.scoreConfigData.score < 0) {
                //恶魔活
                Global.resultState.bad = true;
                // cc.find('Canvas').runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(()=>{
                //
                // })));
                cc.find('Canvas').runAction(cc.fadeOut(1));
                setTimeout(function () {
                    cc.director.loadScene("end");
                }, 1500);
                return true;
            }
        }
        return false;
    };
    MainController.prototype.resetResultState = function () {
        Global.resultState.good = false;
        Global.resultState.bad = false;
        Global.resultState.normal = false;
    };
    MainController.prototype.hideAll = function () {
        this.grayLayer.active = false;
        this.dialog.active = false;
        this.yesBtn.active = false;
        this.noBtn.active = false;
        this.board.active = false;
    };
    MainController.prototype.showAll = function () {
        this.grayLayer.active = true;
        this.dialog.active = true;
        this.yesBtn.active = true;
        this.noBtn.active = true;
        this.board.active = true;
    };
    MainController.prototype.showData = function (data) {
        this.dialog.getChildByName("content").getComponent(cc.Label).string = data.content;
        this.dialog.getChildByName("title").getComponent(cc.Label).string = data.name;
    };
    return MainController;
}(cc.Component));
__decorate([
    property(cc.Node)
], MainController.prototype, "grayLayer", void 0);
__decorate([
    property(cc.Node)
], MainController.prototype, "dialog", void 0);
__decorate([
    property(cc.Node)
], MainController.prototype, "yesBtn", void 0);
__decorate([
    property(cc.Node)
], MainController.prototype, "noBtn", void 0);
__decorate([
    property(cc.Node)
], MainController.prototype, "devilEffect", void 0);
__decorate([
    property(cc.Node)
], MainController.prototype, "angelEffect", void 0);
__decorate([
    property(cc.Node)
], MainController.prototype, "devilHurtPoint", void 0);
__decorate([
    property(cc.Node)
], MainController.prototype, "angelHurtPoint", void 0);
__decorate([
    property(cc.Node)
], MainController.prototype, "board", void 0);
__decorate([
    property(cc.AudioClip)
], MainController.prototype, "questionAudio", void 0);
__decorate([
    property(cc.AudioClip)
], MainController.prototype, "devilAudio", void 0);
__decorate([
    property(cc.AudioClip)
], MainController.prototype, "angelAudio1", void 0);
__decorate([
    property(cc.AudioClip)
], MainController.prototype, "angelAudio2", void 0);
__decorate([
    property(cc.AudioClip)
], MainController.prototype, "backgroundAudio", void 0);
__decorate([
    property(cc.Node)
], MainController.prototype, "canvas", void 0);
__decorate([
    property(cc.Node)
], MainController.prototype, "lightNode", void 0);
__decorate([
    property(cc.Node)
], MainController.prototype, "bloodNode", void 0);
MainController = __decorate([
    ccclass
], MainController);
exports.default = MainController;

cc._RF.pop();