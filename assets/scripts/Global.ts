export let questionConfigDataArray: Array<QuestionConfigData> = [
    {
        name: '请求',
        yesAttr: -1,
        noAttr: 1,
        content: `你脑海里出现一个声音的回响，它告诉你，选择其中一个人处刑，你就可以获得另外一个人的奖赏，你愿意这么做吗？`,
        isUsed: false
    },
    {
        name: '暴力',
        yesAttr: 1,
        noAttr: -1,
        content: `树上下的两个人，脸上的表情都非常痛苦，他们虚弱无力地低吟着，似乎在向你求救。可你还没搞清楚这里的状况，你会花时间来尝试救他们吗？`,
        isUsed: false
    },
    {
        name: '贪吃',
        yesAttr: -1,
        noAttr: 1,
        content: `你已经饿了很久很久，饥肠辘辘的你似乎有点神智不清，看着眼前两个垂死之人，竟然产生了食欲，如果可以，你会吃掉他们其中一个吗？`,
        isUsed: false
    },
    {
        name: '色欲',
        yesAttr: -1,
        noAttr: 1,
        content: `被树根缠绕的人对你说：救我，我可以赐予你一个纯洁无瑕，不谙世事的处女；另一个被树枝穿刺的人对你说：杀了他，你将可以和我美丽的妻子共度一夜，很多男人都觊觎着她。你会考虑他们的提议吗？`,
        isUsed: false
    },
    {
        name: '嫉妒',
        yesAttr: -1,
        noAttr: 1,
        content: `细心观察之下，树上树下两个人各有一样你渴望但永远得不到的东西，此时你脑海里冒出一个邪恶的念头，你得不到的别人也别想拥有。此时，你会遵循自己内心的真实想法吗？`,
        isUsed: false
    },
    {
        name: '懒惰',
        yesAttr: -1,
        noAttr: 1,
        content: `你突然发现，被树枝穿刺的人，他曾经蓄意射杀了你的挚友，尽管那是他们之间的恩怨；被树根缠绕的人，他曾经夺你所爱，让你饱受失恋的痛苦。趁着四下无人，你会考虑动手吗？`,
        isUsed: false
    },
    {
        name: '宽恕',
        yesAttr: -1,
        noAttr: 1,
        content: `现在，树上树下两个人的生死都由你来决定，动弹不得他们犹如待宰羔羊，生命是如此脆弱，而你却能赋予他们生存的权利，如果可以，你想以后都能主宰他们的命运吗？`,
        isUsed: false
    },
];

export let countConfigData: CountConfigData = {
    currentNum: 0,
    totalNum: 7
};

export let scoreConfigData: ScoreConfigData = {
    score: 0
};

export let resultState: ResultState = {
    good: false,
    bad: false,
    normal: false
};

export let audioConfigData: AudioConfigData = {
    backgroundHandler: null,
    goodHandler: null,
    badHandler: null,
    normalHandler: null
};

export let resetAudio = ()=>{
    if(this.audioConfigData.goodHandler !== null){
        cc.audioEngine.stop(this.audioConfigData.goodHandler);
    }
    if(this.audioConfigData.badHandler !== null){
        cc.audioEngine.stop(this.audioConfigData.badHandler);
    }
    if(this.audioConfigData.normalHandler !== null){
        cc.audioEngine.stop(this.audioConfigData.normalHandler);
    }
    if(this.audioConfigData.backgroundHandler !== null){
        cc.audioEngine.stop(this.audioConfigData.backgroundHandler);
    }
};