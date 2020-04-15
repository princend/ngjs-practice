// angular.module('home', []);

angular.module('home', []).
    component('home', {
        templateUrl: 'home/home.component.html',
        controller: ['$http',
            function HomeController($http) {
                var self = this;
                self.chapters = chapters;
                self.navigate = function (chapter) {
                location.href=`${chapter.url}`

                }
            }
        ],
        controllerAs: 'self'
    });


const chapters = [
    { lesson: 1, name: '元件', url: '/#!/trend' },
    { lesson: 2, name: '路由', url: '/#!/activities' }
]