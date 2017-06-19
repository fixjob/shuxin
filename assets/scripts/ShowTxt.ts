const {ccclass, property} = cc._decorator;

@ccclass
export default class ShowTxt extends cc.Component {
    private content0: string = '';
    private content1: string = `   我是被一个沉重的雷声惊醒的`;
    private content2: string = `睁开迷蒙的睡眼，发现烟雾弥漫，`;
    private content3: string = `往四周观看时才发觉，我已来到了`;
    private content4: string = `地狱之谷的边缘。  `;
    private content5: string = `-- 但丁·《神曲》 `;

    @property(cc.Label)
    contentLabel0: cc.Label;
    @property(cc.Label)
    contentLabel1: cc.Label;
    @property(cc.Label)
    contentLabel2: cc.Label;
    @property(cc.Label)
    contentLabel3: cc.Label;
    @property(cc.Label)
    contentLabel4: cc.Label;
    @property(cc.Label)
    contentLabel5: cc.Label;

    private handler: any;

    @property(cc.Label)
    private label: cc.Label;

    onLoad(){
        setTimeout(()=>{
            this.showContent();
        },2000)
    }

    showContent() {
        debugger;
        let length = 0;
        let currentContentIndex = 0;
        let maxContentIndex = 5;
        this.handler = setInterval(()=>{
            console.log(this[`content${currentContentIndex}`]);
            if(length >= this[`content${currentContentIndex}`].length) {
                if(currentContentIndex >= maxContentIndex) {
                    clearInterval(this.handler);
                    this.loadMainScene();
                } else {
                    currentContentIndex++;
                    length = 0;
                }
            }
            this[`contentLabel${currentContentIndex}`].string = this[`content${currentContentIndex}`].substr(0,length++);
        },100);
    }

    loadMainScene(){
        setTimeout(()=>{
            cc.find("Canvas").runAction(cc.sequence(cc.fadeOut(1),cc.callFunc(()=>{
                cc.director.loadScene("main");
            })));
        },2000)
    }
}
