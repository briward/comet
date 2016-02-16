'use strict';

/**
 * Tests are written with Sassaby and can be run using Mocha.
 */
var path = require('path');
var Sassaby = require('sassaby');

/**
 * Test definitions of the comet library.
 */
describe('_comet.scss', function() {

	var file = path.resolve(__dirname + '/../dist', '_comet.scss');
	var sassaby = new Sassaby(file);

	/**
	 * Test that the comet-container() mixin works appropriately.
	 */
	describe('comet-container()', function() {
		it('should return .pure-g', function() {
			sassaby.standaloneMixin('comet-container').called().createsSelector('.pure-g');
		});
	});

	/**
	 * Test that the comet-unit() mixin works appropriately.
	 */
	describe('comet-unit(1, 2)', function() {
		it('should return .pure-u-1-2', function() {
			sassaby.standaloneMixin('comet-unit').calledWithArgs([1, 2]).createsSelector('.pure-u-1-2');
		});
	});

});
