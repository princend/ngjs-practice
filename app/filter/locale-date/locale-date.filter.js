'use strict';

angular.module('filter').filter('localeDate', function () {
    return function (input) {
        var day_list = ['日', '一', '二', '三', '四', '五', '六'];
        if (input) {
            var format = `${input.toLocaleDateString().split('/')[0]}/${input.toLocaleDateString().split('/')[1].padStart(2, '0')}/${input.toLocaleDateString().split('/')[2].padStart(2, '0')}
         (${day_list[input.getDay()]}) ${input.toTimeString().split(' ')[0]}`;
        }
        return format;
    }
})
