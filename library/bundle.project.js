require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"End":[function(require,module,exports){
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
},{"./Global":"Global"}],"Global":[function(require,module,exports){
"use strict";
cc._RF.push(module, '064d6bTyIJGT7mDmTei+Pd+', 'Global');
// scripts/Global.ts

var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionConfigDataArray = [
    {
        name: '请求',
        yesAttr: -1,
        noAttr: 1,
        content: "\u4F60\u8111\u6D77\u91CC\u51FA\u73B0\u4E00\u4E2A\u58F0\u97F3\u7684\u56DE\u54CD\uFF0C\u5B83\u544A\u8BC9\u4F60\uFF0C\u9009\u62E9\u5176\u4E2D\u4E00\u4E2A\u4EBA\u5904\u5211\uFF0C\u4F60\u5C31\u53EF\u4EE5\u83B7\u5F97\u53E6\u5916\u4E00\u4E2A\u4EBA\u7684\u5956\u8D4F\uFF0C\u4F60\u613F\u610F\u8FD9\u4E48\u505A\u5417\uFF1F",
        isUsed: false
    },
    {
        name: '暴力',
        yesAttr: 1,
        noAttr: -1,
        content: "\u6811\u4E0A\u4E0B\u7684\u4E24\u4E2A\u4EBA\uFF0C\u8138\u4E0A\u7684\u8868\u60C5\u90FD\u975E\u5E38\u75DB\u82E6\uFF0C\u4ED6\u4EEC\u865A\u5F31\u65E0\u529B\u5730\u4F4E\u541F\u7740\uFF0C\u4F3C\u4E4E\u5728\u5411\u4F60\u6C42\u6551\u3002\u53EF\u4F60\u8FD8\u6CA1\u641E\u6E05\u695A\u8FD9\u91CC\u7684\u72B6\u51B5\uFF0C\u4F60\u4F1A\u82B1\u65F6\u95F4\u6765\u5C1D\u8BD5\u6551\u4ED6\u4EEC\u5417\uFF1F",
        isUsed: false
    },
    {
        name: '贪吃',
        yesAttr: -1,
        noAttr: 1,
        content: "\u4F60\u5DF2\u7ECF\u997F\u4E86\u5F88\u4E45\u5F88\u4E45\uFF0C\u9965\u80A0\u8F98\u8F98\u7684\u4F60\u4F3C\u4E4E\u6709\u70B9\u795E\u667A\u4E0D\u6E05\uFF0C\u770B\u7740\u773C\u524D\u4E24\u4E2A\u5782\u6B7B\u4E4B\u4EBA\uFF0C\u7ADF\u7136\u4EA7\u751F\u4E86\u98DF\u6B32\uFF0C\u5982\u679C\u53EF\u4EE5\uFF0C\u4F60\u4F1A\u5403\u6389\u4ED6\u4EEC\u5176\u4E2D\u4E00\u4E2A\u5417\uFF1F",
        isUsed: false
    },
    {
        name: '色欲',
        yesAttr: -1,
        noAttr: 1,
        content: "\u88AB\u6811\u6839\u7F20\u7ED5\u7684\u4EBA\u5BF9\u4F60\u8BF4\uFF1A\u6551\u6211\uFF0C\u6211\u53EF\u4EE5\u8D50\u4E88\u4F60\u4E00\u4E2A\u7EAF\u6D01\u65E0\u7455\uFF0C\u4E0D\u8C19\u4E16\u4E8B\u7684\u5904\u5973\uFF1B\u53E6\u4E00\u4E2A\u88AB\u6811\u679D\u7A7F\u523A\u7684\u4EBA\u5BF9\u4F60\u8BF4\uFF1A\u6740\u4E86\u4ED6\uFF0C\u4F60\u5C06\u53EF\u4EE5\u548C\u6211\u7F8E\u4E3D\u7684\u59BB\u5B50\u5171\u5EA6\u4E00\u591C\uFF0C\u5F88\u591A\u7537\u4EBA\u90FD\u89CA\u89CE\u7740\u5979\u3002\u4F60\u4F1A\u8003\u8651\u4ED6\u4EEC\u7684\u63D0\u8BAE\u5417\uFF1F",
        isUsed: false
    },
    {
        name: '嫉妒',
        yesAttr: -1,
        noAttr: 1,
        content: "\u7EC6\u5FC3\u89C2\u5BDF\u4E4B\u4E0B\uFF0C\u6811\u4E0A\u6811\u4E0B\u4E24\u4E2A\u4EBA\u5404\u6709\u4E00\u6837\u4F60\u6E34\u671B\u4F46\u6C38\u8FDC\u5F97\u4E0D\u5230\u7684\u4E1C\u897F\uFF0C\u6B64\u65F6\u4F60\u8111\u6D77\u91CC\u5192\u51FA\u4E00\u4E2A\u90AA\u6076\u7684\u5FF5\u5934\uFF0C\u4F60\u5F97\u4E0D\u5230\u7684\u522B\u4EBA\u4E5F\u522B\u60F3\u62E5\u6709\u3002\u6B64\u65F6\uFF0C\u4F60\u4F1A\u9075\u5FAA\u81EA\u5DF1\u5185\u5FC3\u7684\u771F\u5B9E\u60F3\u6CD5\u5417\uFF1F",
        isUsed: false
    },
    {
        name: '懒惰',
        yesAttr: -1,
        noAttr: 1,
        content: "\u4F60\u7A81\u7136\u53D1\u73B0\uFF0C\u88AB\u6811\u679D\u7A7F\u523A\u7684\u4EBA\uFF0C\u4ED6\u66FE\u7ECF\u84C4\u610F\u5C04\u6740\u4E86\u4F60\u7684\u631A\u53CB\uFF0C\u5C3D\u7BA1\u90A3\u662F\u4ED6\u4EEC\u4E4B\u95F4\u7684\u6069\u6028\uFF1B\u88AB\u6811\u6839\u7F20\u7ED5\u7684\u4EBA\uFF0C\u4ED6\u66FE\u7ECF\u593A\u4F60\u6240\u7231\uFF0C\u8BA9\u4F60\u9971\u53D7\u5931\u604B\u7684\u75DB\u82E6\u3002\u8D81\u7740\u56DB\u4E0B\u65E0\u4EBA\uFF0C\u4F60\u4F1A\u8003\u8651\u52A8\u624B\u5417\uFF1F",
        isUsed: false
    },
    {
        name: '宽恕',
        yesAttr: -1,
        noAttr: 1,
        content: "\u73B0\u5728\uFF0C\u6811\u4E0A\u6811\u4E0B\u4E24\u4E2A\u4EBA\u7684\u751F\u6B7B\u90FD\u7531\u4F60\u6765\u51B3\u5B9A\uFF0C\u52A8\u5F39\u4E0D\u5F97\u4ED6\u4EEC\u72B9\u5982\u5F85\u5BB0\u7F94\u7F8A\uFF0C\u751F\u547D\u662F\u5982\u6B64\u8106\u5F31\uFF0C\u800C\u4F60\u5374\u80FD\u8D4B\u4E88\u4ED6\u4EEC\u751F\u5B58\u7684\u6743\u5229\uFF0C\u5982\u679C\u53EF\u4EE5\uFF0C\u4F60\u60F3\u4EE5\u540E\u90FD\u80FD\u4E3B\u5BB0\u4ED6\u4EEC\u7684\u547D\u8FD0\u5417\uFF1F",
        isUsed: false
    },
];
exports.countConfigData = {
    currentNum: 0,
    totalNum: 7
};
exports.scoreConfigData = {
    score: 0
};
exports.resultState = {
    good: false,
    bad: false,
    normal: false
};
exports.audioConfigData = {
    backgroundHandler: null,
    goodHandler: null,
    badHandler: null,
    normalHandler: null
};
exports.resetAudio = function () {
    if (_this.audioConfigData.goodHandler !== null) {
        cc.audioEngine.stop(_this.audioConfigData.goodHandler);
    }
    if (_this.audioConfigData.badHandler !== null) {
        cc.audioEngine.stop(_this.audioConfigData.badHandler);
    }
    if (_this.audioConfigData.normalHandler !== null) {
        cc.audioEngine.stop(_this.audioConfigData.normalHandler);
    }
    if (_this.audioConfigData.backgroundHandler !== null) {
        cc.audioEngine.stop(_this.audioConfigData.backgroundHandler);
    }
};

cc._RF.pop();
},{}],"MainController":[function(require,module,exports){
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
},{"./Global":"Global"}],"ShowTxt":[function(require,module,exports){
"use strict";
cc._RF.push(module, '3e702GSwe5BgJ/kJsdJCmBK', 'ShowTxt');
// scripts/ShowTxt.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShowTxt = (function (_super) {
    __extends(ShowTxt, _super);
    function ShowTxt() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.content0 = '';
        _this.content1 = "   \u6211\u662F\u88AB\u4E00\u4E2A\u6C89\u91CD\u7684\u96F7\u58F0\u60CA\u9192\u7684";
        _this.content2 = "\u7741\u5F00\u8FF7\u8499\u7684\u7761\u773C\uFF0C\u53D1\u73B0\u70DF\u96FE\u5F25\u6F2B\uFF0C";
        _this.content3 = "\u5F80\u56DB\u5468\u89C2\u770B\u65F6\u624D\u53D1\u89C9\uFF0C\u6211\u5DF2\u6765\u5230\u4E86";
        _this.content4 = "\u5730\u72F1\u4E4B\u8C37\u7684\u8FB9\u7F18\u3002  ";
        _this.content5 = "-- \u4F46\u4E01\u00B7\u300A\u795E\u66F2\u300B ";
        return _this;
    }
    ShowTxt.prototype.onLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.showContent();
        }, 2000);
    };
    ShowTxt.prototype.showContent = function () {
        var _this = this;
        debugger;
        var length = 0;
        var currentContentIndex = 0;
        var maxContentIndex = 5;
        this.handler = setInterval(function () {
            console.log(_this["content" + currentContentIndex]);
            if (length >= _this["content" + currentContentIndex].length) {
                if (currentContentIndex >= maxContentIndex) {
                    clearInterval(_this.handler);
                    _this.loadMainScene();
                }
                else {
                    currentContentIndex++;
                    length = 0;
                }
            }
            _this["contentLabel" + currentContentIndex].string = _this["content" + currentContentIndex].substr(0, length++);
        }, 100);
    };
    ShowTxt.prototype.loadMainScene = function () {
        setTimeout(function () {
            cc.find("Canvas").runAction(cc.sequence(cc.fadeOut(1), cc.callFunc(function () {
                cc.director.loadScene("main");
            })));
        }, 2000);
    };
    return ShowTxt;
}(cc.Component));
__decorate([
    property(cc.Label)
], ShowTxt.prototype, "contentLabel0", void 0);
__decorate([
    property(cc.Label)
], ShowTxt.prototype, "contentLabel1", void 0);
__decorate([
    property(cc.Label)
], ShowTxt.prototype, "contentLabel2", void 0);
__decorate([
    property(cc.Label)
], ShowTxt.prototype, "contentLabel3", void 0);
__decorate([
    property(cc.Label)
], ShowTxt.prototype, "contentLabel4", void 0);
__decorate([
    property(cc.Label)
], ShowTxt.prototype, "contentLabel5", void 0);
__decorate([
    property(cc.Label)
], ShowTxt.prototype, "label", void 0);
ShowTxt = __decorate([
    ccclass
], ShowTxt);
exports.default = ShowTxt;

cc._RF.pop();
},{}]},{},["End","Global","MainController","ShowTxt"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0VuZC50cyIsImFzc2V0cy9zY3JpcHRzL0dsb2JhbC50cyIsImFzc2V0cy9zY3JpcHRzL01haW5Db250cm9sbGVyLnRzIiwiYXNzZXRzL3NjcmlwdHMvU2hvd1R4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTTtBQUNOO0FBRUE7QUFBaUM7QUFBakM7O0FBbUNBO0FBbEJJO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0E7QUFDSjtBQUFFO0FBQ0U7QUFDQTtBQUNKO0FBQUU7QUFDRTtBQUNBO0FBQ0o7QUFDSjtBQUdKO0FBQUE7QUFqQ0k7QUFEQztBQUNjO0FBRWY7QUFEQztBQUNjO0FBRWY7QUFEQztBQUNlO0FBR2hCO0FBREM7QUFDdUI7QUFHeEI7QUFEQztBQUNzQjtBQUd2QjtBQURDO0FBQ3lCO0FBZlQ7QUFEcEI7QUFDb0I7QUFBQTs7Ozs7Ozs7QUNIckI7O0FBQVc7QUFDUDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0Q7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNEO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBQ0Q7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7QUFDRDtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQUNKO0FBRVU7QUFDUDtBQUNBO0FBQ0g7QUFFVTtBQUNQO0FBQ0g7QUFFVTtBQUNQO0FBQ0E7QUFDQTtBQUNIO0FBRVU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBRVU7QUFDUDtBQUNJO0FBQ0o7QUFDQTtBQUNJO0FBQ0o7QUFDQTtBQUNJO0FBQ0o7QUFDQTtBQUNJO0FBQ0o7QUFDSjs7Ozs7Ozs7O0FDdkZNO0FBQ047QUFFQTtBQUE0QztBQUQ1QztBQUFBO0FBZ0RZO0FBQ0E7QUFDQTs7QUFnUFo7QUEzT0k7QUFDSTtBQUNBO0FBQ0k7QUFDSjtBQUNBO0FBQ0k7QUFDSjtBQUNBO0FBQ0k7QUFDSjtBQUNBO0FBQ0k7QUFDSjtBQUNBO0FBQ0k7QUFDSjtBQUNBO0FBQ0k7QUFDSjtBQUNBO0FBQ0k7QUFDQTtBQUNKO0FBQ0o7QUFFQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0o7QUFFQTtBQUNJO0FBQ0o7QUFFQTtBQUVJO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ1I7QUFJQTtBQUNJO0FBQ0o7QUFFQTtBQUNJO0FBQ0o7QUFFQTtBQUFBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0E7QUFDSTtBQUNKO0FBQ0o7QUFDSjtBQUVBO0FBQUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNJO0FBQ0o7QUFDSjtBQUVKO0FBRUE7QUFFSTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0o7QUFFSjtBQUFFO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0o7QUFDSjtBQUNKO0FBRUE7QUFDSTtBQUNBO0FBQ0k7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0o7QUFHQTtBQUNKO0FBQUU7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0o7QUFDQTtBQUNKO0FBQUU7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0o7QUFDQTtBQUNKO0FBQ0o7QUFDQTtBQUNKO0FBRUE7QUFDSTtBQUNBO0FBQ0E7QUFDSjtBQUdRO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNKO0FBRVE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0o7QUFFUTtBQUVKO0FBQ0E7QUFFSjtBQUNKO0FBQUE7QUE3Ukk7QUFEQztBQUNrQjtBQUVuQjtBQURDO0FBQ2U7QUFFaEI7QUFEQztBQUNlO0FBRWhCO0FBREM7QUFDYztBQUVmO0FBREM7QUFDb0I7QUFFckI7QUFEQztBQUNvQjtBQUVyQjtBQURDO0FBQ3VCO0FBRXhCO0FBREM7QUFDdUI7QUFHeEI7QUFEQztBQUNjO0FBR2Y7QUFEQztBQUMyQjtBQUc1QjtBQURDO0FBQ3dCO0FBR3pCO0FBREM7QUFDeUI7QUFHMUI7QUFEQztBQUN5QjtBQUcxQjtBQURDO0FBQzZCO0FBRzlCO0FBREM7QUFDZTtBQUdoQjtBQURDO0FBQ2tCO0FBR25CO0FBREM7QUFDaUI7QUE3Q0Q7QUFEcEI7QUFDb0I7QUFBQTs7Ozs7Ozs7O0FDSGY7QUFHTjtBQUFxQztBQURyQztBQUFBO0FBRVk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXFEWjtBQWpDSTtBQUFBO0FBQ0k7QUFDSTtBQUNKO0FBQ0o7QUFFQTtBQUFBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0E7QUFDSTtBQUNJO0FBQ0E7QUFDSjtBQUFFO0FBQ0U7QUFDQTtBQUNKO0FBQ0o7QUFDQTtBQUNKO0FBQ0o7QUFFQTtBQUNJO0FBQ0k7QUFDSTtBQUNKO0FBQ0o7QUFDSjtBQUNKO0FBQUE7QUFsREk7QUFEQztBQUN1QjtBQUV4QjtBQURDO0FBQ3VCO0FBRXhCO0FBREM7QUFDdUI7QUFFeEI7QUFEQztBQUN1QjtBQUV4QjtBQURDO0FBQ3VCO0FBRXhCO0FBREM7QUFDdUI7QUFLeEI7QUFEQztBQUN1QjtBQXhCUDtBQURwQjtBQUNvQjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCAqIGFzIEdsb2JhbCBmcm9tIFwiLi9HbG9iYWxcIlxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBhbmdlbDogY2MuTm9kZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGV2aWw6IGNjLk5vZGU7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vcm1hbDogY2MuTm9kZTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZ29vZEF1ZGlvOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGJhZEF1ZGlvOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIG5vcm1hbEF1ZGlvOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzJykub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzJykucnVuQWN0aW9uKGNjLmZhZGVJbigxKSk7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgR2xvYmFsLnJlc2V0QXVkaW8oKTtcclxuICAgICAgICBpZihHbG9iYWwucmVzdWx0U3RhdGUuZ29vZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuZ2VsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIEdsb2JhbC5hdWRpb0NvbmZpZ0RhdGEuZ29vZEhhbmRsZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZ29vZEF1ZGlvLHRydWUsMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKEdsb2JhbC5yZXN1bHRTdGF0ZS5iYWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXZpbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBHbG9iYWwuYXVkaW9Db25maWdEYXRhLmJhZEhhbmRsZXIgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmFkQXVkaW8sdHJ1ZSwxKTtcclxuICAgICAgICB9IGVsc2UgaWYoR2xvYmFsLnJlc3VsdFN0YXRlLm5vcm1hbCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBHbG9iYWwuYXVkaW9Db25maWdEYXRhLm5vcm1hbEhhbmRsZXIgPSAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLm5vcm1hbEF1ZGlvLHRydWUsMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIiwiZXhwb3J0IGxldCBxdWVzdGlvbkNvbmZpZ0RhdGFBcnJheTogQXJyYXk8UXVlc3Rpb25Db25maWdEYXRhPiA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAn6K+35rGCJyxcclxuICAgICAgICB5ZXNBdHRyOiAtMSxcclxuICAgICAgICBub0F0dHI6IDEsXHJcbiAgICAgICAgY29udGVudDogYOS9oOiEkea1t+mHjOWHuueOsOS4gOS4quWjsOmfs+eahOWbnuWTje+8jOWug+WRiuivieS9oO+8jOmAieaLqeWFtuS4reS4gOS4quS6uuWkhOWIke+8jOS9oOWwseWPr+S7peiOt+W+l+WPpuWkluS4gOS4quS6uueahOWllui1j++8jOS9oOaEv+aEj+i/meS5iOWBmuWQl++8n2AsXHJcbiAgICAgICAgaXNVc2VkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAn5pq05YqbJyxcclxuICAgICAgICB5ZXNBdHRyOiAxLFxyXG4gICAgICAgIG5vQXR0cjogLTEsXHJcbiAgICAgICAgY29udGVudDogYOagkeS4iuS4i+eahOS4pOS4quS6uu+8jOiEuOS4iueahOihqOaDhemDvemdnuW4uOeXm+iLpu+8jOS7luS7rOiZmuW8seaXoOWKm+WcsOS9juWQn+edgO+8jOS8vOS5juWcqOWQkeS9oOaxguaVkeOAguWPr+S9oOi/mOayoeaQnua4healmui/memHjOeahOeKtuWGte+8jOS9oOS8muiKseaXtumXtOadpeWwneivleaVkeS7luS7rOWQl++8n2AsXHJcbiAgICAgICAgaXNVc2VkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAn6LSq5ZCDJyxcclxuICAgICAgICB5ZXNBdHRyOiAtMSxcclxuICAgICAgICBub0F0dHI6IDEsXHJcbiAgICAgICAgY29udGVudDogYOS9oOW3sue7j+mlv+S6huW+iOS5heW+iOS5he+8jOmlpeiCoOi+mOi+mOeahOS9oOS8vOS5juacieeCueelnuaZuuS4jea4he+8jOeci+edgOecvOWJjeS4pOS4quWeguatu+S5i+S6uu+8jOern+eEtuS6p+eUn+S6humjn+assu+8jOWmguaenOWPr+S7pe+8jOS9oOS8muWQg+aOieS7luS7rOWFtuS4reS4gOS4quWQl++8n2AsXHJcbiAgICAgICAgaXNVc2VkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAn6Imy5qyyJyxcclxuICAgICAgICB5ZXNBdHRyOiAtMSxcclxuICAgICAgICBub0F0dHI6IDEsXHJcbiAgICAgICAgY29udGVudDogYOiiq+agkeaguee8oOe7leeahOS6uuWvueS9oOivtO+8muaVkeaIke+8jOaIkeWPr+S7pei1kOS6iOS9oOS4gOS4que6r+a0geaXoOeRle+8jOS4jeiwmeS4luS6i+eahOWkhOWls++8m+WPpuS4gOS4quiiq+agkeaeneepv+WIuueahOS6uuWvueS9oOivtO+8muadgOS6huS7lu+8jOS9oOWwhuWPr+S7peWSjOaIkee+juS4veeahOWmu+WtkOWFseW6puS4gOWknO+8jOW+iOWkmueUt+S6uumDveiniuinjuedgOWlueOAguS9oOS8muiAg+iZkeS7luS7rOeahOaPkOiuruWQl++8n2AsXHJcbiAgICAgICAgaXNVc2VkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAn5auJ5aaSJyxcclxuICAgICAgICB5ZXNBdHRyOiAtMSxcclxuICAgICAgICBub0F0dHI6IDEsXHJcbiAgICAgICAgY29udGVudDogYOe7huW/g+inguWvn+S5i+S4i++8jOagkeS4iuagkeS4i+S4pOS4quS6uuWQhOacieS4gOagt+S9oOa4tOacm+S9huawuOi/nOW+l+S4jeWIsOeahOS4nOilv++8jOatpOaXtuS9oOiEkea1t+mHjOWGkuWHuuS4gOS4qumCquaBtueahOW/teWktO+8jOS9oOW+l+S4jeWIsOeahOWIq+S6uuS5n+WIq+aDs+aLpeacieOAguatpOaXtu+8jOS9oOS8mumBteW+quiHquW3seWGheW/g+eahOecn+WunuaDs+azleWQl++8n2AsXHJcbiAgICAgICAgaXNVc2VkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAn5oeS5oOwJyxcclxuICAgICAgICB5ZXNBdHRyOiAtMSxcclxuICAgICAgICBub0F0dHI6IDEsXHJcbiAgICAgICAgY29udGVudDogYOS9oOeqgeeEtuWPkeeOsO+8jOiiq+agkeaeneepv+WIuueahOS6uu+8jOS7luabvue7j+iThOaEj+WwhOadgOS6huS9oOeahOaMmuWPi++8jOWwveeuoemCo+aYr+S7luS7rOS5i+mXtOeahOaBqeaAqO+8m+iiq+agkeaguee8oOe7leeahOS6uu+8jOS7luabvue7j+WkuuS9oOaJgOeIse+8jOiuqeS9oOmlseWPl+WkseaBi+eahOeXm+iLpuOAgui2geedgOWbm+S4i+aXoOS6uu+8jOS9oOS8muiAg+iZkeWKqOaJi+WQl++8n2AsXHJcbiAgICAgICAgaXNVc2VkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAn5a695oGVJyxcclxuICAgICAgICB5ZXNBdHRyOiAtMSxcclxuICAgICAgICBub0F0dHI6IDEsXHJcbiAgICAgICAgY29udGVudDogYOeOsOWcqO+8jOagkeS4iuagkeS4i+S4pOS4quS6uueahOeUn+atu+mDveeUseS9oOadpeWGs+Wumu+8jOWKqOW8ueS4jeW+l+S7luS7rOeKueWmguW+heWusOe+lOe+iu+8jOeUn+WRveaYr+WmguatpOiEhuW8se+8jOiAjOS9oOWNtOiDvei1i+S6iOS7luS7rOeUn+WtmOeahOadg+WIqe+8jOWmguaenOWPr+S7pe+8jOS9oOaDs+S7peWQjumDveiDveS4u+WusOS7luS7rOeahOWRvei/kOWQl++8n2AsXHJcbiAgICAgICAgaXNVc2VkOiBmYWxzZVxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBsZXQgY291bnRDb25maWdEYXRhOiBDb3VudENvbmZpZ0RhdGEgPSB7XHJcbiAgICBjdXJyZW50TnVtOiAwLFxyXG4gICAgdG90YWxOdW06IDdcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgc2NvcmVDb25maWdEYXRhOiBTY29yZUNvbmZpZ0RhdGEgPSB7XHJcbiAgICBzY29yZTogMFxyXG59O1xyXG5cclxuZXhwb3J0IGxldCByZXN1bHRTdGF0ZTogUmVzdWx0U3RhdGUgPSB7XHJcbiAgICBnb29kOiBmYWxzZSxcclxuICAgIGJhZDogZmFsc2UsXHJcbiAgICBub3JtYWw6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGF1ZGlvQ29uZmlnRGF0YTogQXVkaW9Db25maWdEYXRhID0ge1xyXG4gICAgYmFja2dyb3VuZEhhbmRsZXI6IG51bGwsXHJcbiAgICBnb29kSGFuZGxlcjogbnVsbCxcclxuICAgIGJhZEhhbmRsZXI6IG51bGwsXHJcbiAgICBub3JtYWxIYW5kbGVyOiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgbGV0IHJlc2V0QXVkaW8gPSAoKT0+e1xyXG4gICAgaWYodGhpcy5hdWRpb0NvbmZpZ0RhdGEuZ29vZEhhbmRsZXIgIT09IG51bGwpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5hdWRpb0NvbmZpZ0RhdGEuZ29vZEhhbmRsZXIpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5hdWRpb0NvbmZpZ0RhdGEuYmFkSGFuZGxlciAhPT0gbnVsbCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmF1ZGlvQ29uZmlnRGF0YS5iYWRIYW5kbGVyKTtcclxuICAgIH1cclxuICAgIGlmKHRoaXMuYXVkaW9Db25maWdEYXRhLm5vcm1hbEhhbmRsZXIgIT09IG51bGwpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5hdWRpb0NvbmZpZ0RhdGEubm9ybWFsSGFuZGxlcik7XHJcbiAgICB9XHJcbiAgICBpZih0aGlzLmF1ZGlvQ29uZmlnRGF0YS5iYWNrZ3JvdW5kSGFuZGxlciAhPT0gbnVsbCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmF1ZGlvQ29uZmlnRGF0YS5iYWNrZ3JvdW5kSGFuZGxlcik7XHJcbiAgICB9XHJcbn07IiwiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbmltcG9ydCAqIGFzIEdsb2JhbCBmcm9tICcuL0dsb2JhbCc7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5Db250cm9sbGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBncmF5TGF5ZXI6IGNjLk5vZGU7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGRpYWxvZzogY2MuTm9kZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgeWVzQnRuOiBjYy5Ob2RlO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBub0J0bjogY2MuTm9kZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZGV2aWxFZmZlY3Q6IGNjLk5vZGU7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGFuZ2VsRWZmZWN0OiBjYy5Ob2RlO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBkZXZpbEh1cnRQb2ludDogY2MuTm9kZTtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYW5nZWxIdXJ0UG9pbnQ6IGNjLk5vZGU7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib2FyZDogY2MuTm9kZTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgcXVlc3Rpb25BdWRpbzogY2MuQXVkaW9DbGlwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBkZXZpbEF1ZGlvOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGFuZ2VsQXVkaW8xOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGFuZ2VsQXVkaW8yOiBjYy5BdWRpb0NsaXA7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGJhY2tncm91bmRBdWRpbzogY2MuQXVkaW9DbGlwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FudmFzOiBjYy5Ob2RlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbGlnaHROb2RlOiBjYy5Ob2RlO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmxvb2ROb2RlOmNjLk5vZGU7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50UXVlc3Rpb25JbmRleDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY3VycmVudEFuZ2VsSW5kZXg6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIGN1cnJlbnREZXZpbEluZGV4OiBudW1iZXIgPSAxO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHF1ZXN0aW9uOiBRdWVzdGlvbkNvbmZpZ0RhdGE7XHJcblxyXG4gICAgZXhlY0VmZmVjdCh0YXJnZXQsbm9kZSxjYil7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IG5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRhcmdldC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwwKSkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LDEwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSwyMDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LDMwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSw0MDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LDUwMCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSw2MDApO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGNjLnYyKDEwMDAwLDEwMDAwKTtcclxuICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICB9LDcwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV3VHVybigpIHtcclxuICAgICAgICAvLyBsZXQgcmFuZG9tSTogbnVtYmVyID0gbnVsbDtcclxuICAgICAgICAvLyBpZiAoR2xvYmFsLmNvdW50Q29uZmlnRGF0YS5jdXJyZW50TnVtIDw9IEdsb2JhbC5jb3VudENvbmZpZ0RhdGEudG90YWxOdW0pIHtcclxuICAgICAgICAvLyAgICAgcmFuZG9tSSA9IE1hdGguZmxvb3IoY2MucmFuZG9tMFRvMSgpICogR2xvYmFsLmNvdW50Q29uZmlnRGF0YS50b3RhbE51bSk7XHJcbiAgICAgICAgLy8gICAgIHdoaWxlIChHbG9iYWwucXVlc3Rpb25Db25maWdEYXRhQXJyYXlbcmFuZG9tSV0uaXNVc2VkKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByYW5kb21JID0gKHJhbmRvbUkgKyAxKSAlIEdsb2JhbC5jb3VudENvbmZpZ0RhdGEudG90YWxOdW07XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgZm9yKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYoIUdsb2JhbC5xdWVzdGlvbkNvbmZpZ0RhdGFBcnJheVtpXS5pc1VzZWQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICByYW5kb21JID0gaTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgcmFuZG9tSSA9IHRoaXMuY3VycmVudFF1ZXN0aW9uSW5kZXg7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UXVlc3Rpb25JbmRleCsrO1xyXG5cclxuICAgICAgICBHbG9iYWwuY291bnRDb25maWdEYXRhLmN1cnJlbnROdW0rKztcclxuICAgICAgICBHbG9iYWwucXVlc3Rpb25Db25maWdEYXRhQXJyYXlbcmFuZG9tSV0uaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcXVlc3Rpb24gPSBHbG9iYWwucXVlc3Rpb25Db25maWdEYXRhQXJyYXlbcmFuZG9tSV07XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbiA9IHF1ZXN0aW9uO1xyXG4gICAgICAgIHRoaXMuc2hvd0FsbCgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0RhdGEocXVlc3Rpb24pO1xyXG4gICAgICAgIHRoaXMucGxheVF1ZXN0aW9uQXVkaW8oKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5UXVlc3Rpb25BdWRpbygpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMucXVlc3Rpb25BdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzJykub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzJykucnVuQWN0aW9uKGNjLmZhZGVJbigxKSk7XHJcbiAgICAgICAgICAgIC8vVE9ETyDog4zmma/pn7NcclxuICAgICAgICAgICAgR2xvYmFsLnJlc2V0QXVkaW8oKTtcclxuICAgICAgICAgICAgR2xvYmFsLmF1ZGlvQ29uZmlnRGF0YS5iYWNrZ3JvdW5kSGFuZGxlciA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iYWNrZ3JvdW5kQXVkaW8sIHRydWUsIDEpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy55ZXNCdG4ub24oJ3RvdWNoc3RhcnQnLCB0aGlzLm9uWWVzQnRuU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vQnRuLm9uKCd0b3VjaGVuZCcsIHRoaXMub25Ob0J0blN0YXJ0LCB0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMueWVzQnRuLm9uKFwidG91Y2hlbmRcIiwgdGhpcy5vblllc0J0biwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9CdG4ub24oXCJ0b3VjaGVuZFwiLCB0aGlzLm9uTm9CdG4sIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5uZXdUdXJuKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvblllc0J0blN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMueWVzQnRuLmNvbG9yID0gY2MuQ29sb3IuR1JBWTtcclxuICAgIH1cclxuXHJcbiAgICBvbk5vQnRuU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub0J0bi5jb2xvciA9IGNjLkNvbG9yLkdSQVk7XHJcbiAgICB9XHJcblxyXG4gICAgb25ZZXNCdG4oKSB7XHJcbiAgICAgICAgdGhpcy55ZXNCdG4uY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICBHbG9iYWwuc2NvcmVDb25maWdEYXRhLnNjb3JlICs9IHRoaXMucXVlc3Rpb24ueWVzQXR0cjtcclxuICAgICAgICB0aGlzLmhpZGVBbGwoKTtcclxuICAgICAgICAvL1RPRE8g5pKt5pS+5Yqo55S7XHJcbiAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLnF1ZXN0aW9uLnllc0F0dHIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlzRW5kID0gdGhpcy5jaGVja0VuZCgpO1xyXG4gICAgICAgICAgICBpZiAoIWlzRW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1R1cm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTm9CdG4oKSB7XHJcbiAgICAgICAgdGhpcy5ub0J0bi5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIEdsb2JhbC5zY29yZUNvbmZpZ0RhdGEuc2NvcmUgKz0gdGhpcy5xdWVzdGlvbi5ub0F0dHI7XHJcbiAgICAgICAgdGhpcy5oaWRlQWxsKCk7XHJcbiAgICAgICAgLy9UT0RPIOaSreaUvuWKqOeUu1xyXG4gICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5xdWVzdGlvbi5ub0F0dHIsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlzRW5kID0gdGhpcy5jaGVja0VuZCgpO1xyXG4gICAgICAgICAgICBpZiAoIWlzRW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1R1cm4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbShhdHRyOiBudW1iZXIsIGNiOiAoKSA9PiB2b2lkKSB7XHJcblxyXG4gICAgICAgIGlmIChhdHRyIDwgMCkge1xyXG4gICAgICAgICAgICAvLyBsZXQgaW5kZXggPSAtMTtcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDE7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgIGlmICghdGhpcy5hbmdlbEh1cnRQb2ludC5nZXRDaGlsZEJ5TmFtZSgnYW5nZWxIdXJ0UG9pbnQnICsgaSkuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuY3VycmVudEFuZ2VsSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuZ2VsSW5kZXgrKztcclxuXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5hbmdlbEF1ZGlvMSwgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICAvL1RPRE8g6ZqP5py6XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuZ2VsSHVydFBvaW50LmdldENoaWxkQnlOYW1lKCdhbmdlbEh1cnRQb2ludCcgKyBpbmRleCkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5hbmdlbEh1cnRQb2ludC5nZXRDaGlsZEJ5TmFtZSgnYW5nZWxIdXJ0UG9pbnQnICsgaW5kZXgpLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmFuZ2VsSHVydFBvaW50LmdldENoaWxkQnlOYW1lKCdhbmdlbEh1cnRQb2ludCcgKyBpbmRleCkucnVuQWN0aW9uKGNjLmZhZGVJbigxKSk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmFuZ2VsSHVydFBvaW50LmdldENoaWxkQnlOYW1lKCdhbmdlbEh1cnRQb2ludCcgKyBpbmRleCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCR7aW5kZXh9IOWkqeS9v2ApO1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWNFZmZlY3QodGFyZ2V0LHRoaXMuYmxvb2ROb2RlLCgpPT57XHJcbiAgICAgICAgICAgICAgICAvL3NldFRpbWVvdXQoY2IsIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBpbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkrKykge1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMuZGV2aWxIdXJ0UG9pbnQuZ2V0Q2hpbGRCeU5hbWUoJ2RldmlsSHVydFBvaW50JyArIGkpLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmN1cnJlbnREZXZpbEluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnREZXZpbEluZGV4Kys7XHJcblxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZGV2aWxBdWRpbywgZmFsc2UsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmRldmlsSHVydFBvaW50LmdldENoaWxkQnlOYW1lKCdkZXZpbEh1cnRQb2ludCcgKyBpbmRleCkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5kZXZpbEh1cnRQb2ludC5nZXRDaGlsZEJ5TmFtZSgnZGV2aWxIdXJ0UG9pbnQnICsgaW5kZXgpLm9wYWNpdHkgPSAyNTU7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5kZXZpbEh1cnRQb2ludC5nZXRDaGlsZEJ5TmFtZSgnZGV2aWxIdXJ0UG9pbnQnICsgaW5kZXgpLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5mYWRlT3V0KDEpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRldmlsSHVydFBvaW50LmdldENoaWxkQnlOYW1lKCdkZXZpbEh1cnRQb2ludCcgKyBpbmRleCkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coYCR7aW5kZXh9IOaBtumtlGApO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5kZXZpbEh1cnRQb2ludC5nZXRDaGlsZEJ5TmFtZSgnZGV2aWxIdXJ0UG9pbnQnICsgaW5kZXgpO1xyXG4gICAgICAgICAgICB0aGlzLmV4ZWNFZmZlY3QodGFyZ2V0LHRoaXMubGlnaHROb2RlLCgpPT57XHJcbiAgICAgICAgICAgICAgICAvL3NldFRpbWVvdXQoY2IsIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRW5kKCkge1xyXG4gICAgICAgIHRoaXMucmVzZXRSZXN1bHRTdGF0ZSgpO1xyXG4gICAgICAgIGlmIChHbG9iYWwuY291bnRDb25maWdEYXRhLmN1cnJlbnROdW0gPj0gR2xvYmFsLmNvdW50Q29uZmlnRGF0YS50b3RhbE51bSkge1xyXG4gICAgICAgICAgICBpZiAoR2xvYmFsLnNjb3JlQ29uZmlnRGF0YS5zY29yZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy/kuK3nq4tcclxuICAgICAgICAgICAgICAgIEdsb2JhbC5yZXN1bHRTdGF0ZS5ub3JtYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MuZmluZCgnQ2FudmFzJykucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmZhZGVPdXQoMSksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyB9KSkpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykucnVuQWN0aW9uKGNjLmZhZGVPdXQoMSkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZFwiKTtcclxuICAgICAgICAgICAgICAgIH0sMTUwMCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKEdsb2JhbC5zY29yZUNvbmZpZ0RhdGEuc2NvcmUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WkqeS9v+a0u1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLnJlc3VsdFN0YXRlLmdvb2QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MuZmluZCgnQ2FudmFzJykucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmZhZGVPdXQoMSksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyB9KSkpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykucnVuQWN0aW9uKGNjLmZhZGVPdXQoMSkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZFwiKTtcclxuICAgICAgICAgICAgICAgIH0sMTUwMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChHbG9iYWwuc2NvcmVDb25maWdEYXRhLnNjb3JlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgLy/mgbbprZTmtLtcclxuICAgICAgICAgICAgICAgIEdsb2JhbC5yZXN1bHRTdGF0ZS5iYWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MuZmluZCgnQ2FudmFzJykucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmZhZGVPdXQoMSksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyB9KSkpO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzJykucnVuQWN0aW9uKGNjLmZhZGVPdXQoMSkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImVuZFwiKTtcclxuICAgICAgICAgICAgICAgIH0sMTUwMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRSZXN1bHRTdGF0ZSgpIHtcclxuICAgICAgICBHbG9iYWwucmVzdWx0U3RhdGUuZ29vZCA9IGZhbHNlO1xyXG4gICAgICAgIEdsb2JhbC5yZXN1bHRTdGF0ZS5iYWQgPSBmYWxzZTtcclxuICAgICAgICBHbG9iYWwucmVzdWx0U3RhdGUubm9ybWFsID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgaGlkZUFsbCgpIHtcclxuICAgICAgICB0aGlzLmdyYXlMYXllci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRpYWxvZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnllc0J0bi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vQnRuLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYm9hcmQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93QWxsKCkge1xyXG4gICAgICAgIHRoaXMuZ3JheUxheWVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaWFsb2cuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnllc0J0bi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9CdG4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJvYXJkLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93RGF0YShkYXRhOiBRdWVzdGlvbkNvbmZpZ0RhdGEpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kaWFsb2cuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpLmdldENvbXBvbmVudDxjYy5MYWJlbD4oY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEuY29udGVudDtcclxuICAgICAgICB0aGlzLmRpYWxvZy5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudDxjYy5MYWJlbD4oY2MuTGFiZWwpLnN0cmluZyA9IGRhdGEubmFtZTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93VHh0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgY29udGVudDA6IHN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBjb250ZW50MTogc3RyaW5nID0gYCAgIOaIkeaYr+iiq+S4gOS4quayiemHjeeahOmbt+WjsOaDiumGkueahGA7XHJcbiAgICBwcml2YXRlIGNvbnRlbnQyOiBzdHJpbmcgPSBg552B5byA6L+36JKZ55qE552h55y877yM5Y+R546w54Of6Zu+5byl5ryr77yMYDtcclxuICAgIHByaXZhdGUgY29udGVudDM6IHN0cmluZyA9IGDlvoDlm5vlkajop4LnnIvml7bmiY3lj5Hop4nvvIzmiJHlt7LmnaXliLDkuoZgO1xyXG4gICAgcHJpdmF0ZSBjb250ZW50NDogc3RyaW5nID0gYOWcsOeLseS5i+iwt+eahOi+uee8mOOAgiAgYDtcclxuICAgIHByaXZhdGUgY29udGVudDU6IHN0cmluZyA9IGAtLSDkvYbkuIHCt+OAiuelnuabsuOAiyBgO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGNvbnRlbnRMYWJlbDA6IGNjLkxhYmVsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY29udGVudExhYmVsMTogY2MuTGFiZWw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjb250ZW50TGFiZWwyOiBjYy5MYWJlbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGNvbnRlbnRMYWJlbDM6IGNjLkxhYmVsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY29udGVudExhYmVsNDogY2MuTGFiZWw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjb250ZW50TGFiZWw1OiBjYy5MYWJlbDtcclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZXI6IGFueTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGxhYmVsOiBjYy5MYWJlbDtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcclxuICAgICAgICB9LDIwMDApXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvbnRlbnQoKSB7XHJcbiAgICAgICAgZGVidWdnZXI7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IDA7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDb250ZW50SW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBtYXhDb250ZW50SW5kZXggPSA1O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXNbYGNvbnRlbnQke2N1cnJlbnRDb250ZW50SW5kZXh9YF0pO1xyXG4gICAgICAgICAgICBpZihsZW5ndGggPj0gdGhpc1tgY29udGVudCR7Y3VycmVudENvbnRlbnRJbmRleH1gXS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRDb250ZW50SW5kZXggPj0gbWF4Q29udGVudEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZE1haW5TY2VuZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q29udGVudEluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzW2Bjb250ZW50TGFiZWwke2N1cnJlbnRDb250ZW50SW5kZXh9YF0uc3RyaW5nID0gdGhpc1tgY29udGVudCR7Y3VycmVudENvbnRlbnRJbmRleH1gXS5zdWJzdHIoMCxsZW5ndGgrKyk7XHJcbiAgICAgICAgfSwxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRNYWluU2NlbmUoKXtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXNcIikucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmZhZGVPdXQoMSksY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW5cIik7XHJcbiAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgfSwyMDAwKVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=