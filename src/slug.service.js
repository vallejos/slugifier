/**
 * Created by Fabian Vallejos <vallejosfab@gmail.com>
 */
(function() {

    angular.module('fv.Slugify', [])
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
    function slugify() {

        const UNWANTED_CHARS = '/([^a-z0-9]|-)+/';

        return function slugify(text, separator) {
            separator = !!separator ? separator : '-';

            return text.toLowerCase()
                .replace(/ /g, separator)
                .replace(UNWANTED_CHARS, '')
                .trim();
        }

    }
})();
