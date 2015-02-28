/**
 * Created by Fabian Vallejos <vallejosfab@gmail.com>
 */
describe('fv.Slugify service', function() {
    'use strict';

    beforeEach(module('fv.Slugify', [fv.Slugify]));

    it('should slugify all blank spaces', function() {
        expect(slugify('hello world')).toEqual('hello-world');
    });

    it('should slugify not allowed characters', function() {
        var weirdString = 'one#two?three=four';
        expect(slugify(weirdString)).toEqual('onetwothreefour');
    });

    it('should not slugify allowed characters', function () {
        var validString = '123abs04d';
        expect(slugify(validString).toEqual(validString));
    });

});
