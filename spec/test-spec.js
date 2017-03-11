const findMinMax = require('../app.js');

(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [1, 100] for [4, 45, 1, 66, 89 , 6, 44, 77, 78, 18, 68, 100, 2, 93]', function () {
        expect(findMinMax([4, 45, 1, 66, 89 , 6, 44, 77, 78, 18, 68, 100, 2, 93])).toEqual([1, 100]);
      });

      it('should return [5, 6] for [6, 5, 5, 6, 5, 6, 5, 5, 6]', function () {
        expect(findMinMax([6, 5, 5, 6, 5, 6, 5, 5, 6])).toEqual([5, 6]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [11] for [11, 11, 11]', function () {
        expect(findMinMax([11, 11, 11])).toEqual([11]);
      });

      it('should return [249] for [249, 249]', function () {
        expect(findMinMax([249, 249])).toEqual([249]);
      });

      it('should return [20] for [20]', function () {
        expect(findMinMax([20])).toEqual([20]);
      });

    });

  });

})();