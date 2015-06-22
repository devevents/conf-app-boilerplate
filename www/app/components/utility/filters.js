'use strict';
angular.module('confboilerplate.filters', [])
    .filter('rawHtml', ['$sce', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    }]);

//# sourceMappingURL=../../../app/components/utility/filters.js.map