var ActivitiesController = function () {
    var self = this;
    self.activities = activities;
    self.url=location.href;
}


var activities =
    [{
        id: 1,
        Title: '紅包派送',
        SubTitle: '限時領取紅包活動',
        Icon: 'fa fa-envelope-open',
        Url: '/#!/activities/RedEnvelopeManagement',
        Display: this.viewRedEnvelopeManagementAuthority
    },
    {
        id: 2,
        Title: '限時優惠',
        SubTitle: '限時指定平台派送',
        Icon: 'fa fa-clock-o',
        Url: '/#!/activities/DiscountWallet',
        Display: this.viewTimeLimitEventAuthority
    },
    {
        id: 3,
        Title: '幸運轉盤',
        SubTitle: '機率轉盤活動',
        Icon: 'fa fa-circle',
        Url: '/#!/activities/LuckyWheelManagement',
        Display: this.viewLuckyWheelManagementAuthority
    },
    {
        id: 4,
        Title: '簽到獎勵',
        SubTitle: '簽到獎勵送彩金',
        Icon: 'fa fa-calendar-check-o',
        Url: '/#!/activities/CheckinEvent',
        Display: this.viewCheckInOfferAuthority
    },
    {
        id: 5,
        Title: '任務挑戰',
        SubTitle: '完成任務目標送彩金',
        Icon: 'fa fa-th',
        Url: '/#!/activities/MissionReward',
        Display: this.viewMissionRewardAuthority
    },
    {
        id: 6,
        Title: '時來運轉',
        SubTitle: '機率轉盤活動',
        Icon: 'fa fa-empire',
        Url: '/#!/activities/NewLuckyWheel',
        Display: this.viewNewLuckyWheelAuthority
    }];




