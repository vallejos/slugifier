/**
 * Created by Fabian Vallejos <vallejosfab@gmail.com>
 */
describe('fv.Slugify', function() {
    'use strict';

    beforeEach(module('fv.Slugify'));

    it('should slugify blank spaces', function() {
        expect(slugify('hello world')).toBe('hello-world');
    });
});
