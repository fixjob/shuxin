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