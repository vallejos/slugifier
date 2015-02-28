/**
 * Created by Fabian Vallejos <vallejosfab@gmail.com>
 */
(function() {

    angular.module('Slugify', [])
        .factory('slugify', slugService);

    /*
     * @ngdoc factory
     * @name slugify
     *
     * @description
     *
     *
     * @param {*} value
     * @returns {String}
     *
     */
    function slugService() {

        const UNWANTED_CHARS = '/([^a-z0-9]|-)+/';

        return function (text, separator) {
            separator = !!separator ? separator : '-';

            return text.toLowerCase()
                .replace(/ /g, separator)
                .replace(UNWANTED_CHARS, '')
                .trim();
        }

    }
})();
