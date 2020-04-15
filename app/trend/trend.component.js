'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
    module('trend').
    component('trend', {
        templateUrl: 'trend/trend.template.html',
        controller: ['Phone', '$http',
            function PhoneListController(Phone, $http) {



                var self = this;
                setTimeout(() => {
                    $http.get('phones/trend.json').then(function (response) {
                        self.phones = response.data;
                    });
                }, 100);

                self.allCheck = false;
                self.stair = false;
                self.memberLevels = MemberLevels;



                self.checkAll = () => {
                    self.memberLevels.forEach(level => {
                        level.selected = self.allCheck;
                    });
                }

                self.checkSingle = () => {
                    self.allCheck = self.memberLevels.every(level => level.selected);
                }

                self.changeCondition = () => {
                    self.stair = !self.stair;
                }

                self.inputTyping = function (inputValue) {

                    if (!inputValue) { self.memberLevels.forEach(level => level.show = true) }
                    else {
                        self.memberLevels.forEach(level => {
                            level.show = level.name.toUpperCase().includes(inputValue.toUpperCase()) 
                        })
                    }
                }

            }
        ]
    });


const MemberLevels = [
    { id: 1, name: '一般會員', selected: false, show: true },
    { id: 2, name: '老會員第一層', selected: false, show: true },
    { id: 3, name: '黃金VIP會員', selected: false, show: true },
    { id: 4, name: '老會員新生層', selected: false, show: true },
    { id: 5, name: '老會員第二層', selected: false, show: true },
    { id: 6, name: '微信二維碼支付', selected: false, show: true },
    { id: 7, name: '老會員第五層', selected: false, show: true },
    { id: 8, name: '第一層新生會員存款', selected: false, show: true },
    { id: 9, name: '微信大額支付等級', selected: false, show: true },
    { id: 10, name: '8888', selected: false, show: true },
    { id: 11, name: '銀行卡被凍結', selected: false, show: true },
    { id: 12, name: '不參與反水跟優惠', selected: false, show: true },
    { id: 13, name: '江蘇鹽城', selected: false, show: true },
    { id: 14, name: '輸贏層', selected: false, show: true },
    { id: 15, name: '線上存款層級', selected: false, show: true },
    { id: 16, name: '大小寫轉換TeSt', selected: false, show: true },
    { id: 17, name: '大小寫轉換test', selected: false, show: true },
]