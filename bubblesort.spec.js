describe('Bubble Sort', function() {
	var array;
	beforeEach(function() {
		array = [5, 9, 2, 1, 4, 7, 6];
	});
	it('handles an empty array', function() {
		expect(bubbleSort([])).toEqual([]);
	});
	it('handles an array of one item, idiot', function() {
		expect(bubbleSort([1])).toEqual([1]);
	});
	it('sorts a simple array of more than one', function() {
		expect(bubbleSort([2, 4, 3])).toEqual([2, 3, 4]);
	});
	it('sorts a more complex array', function() {
		expect(bubbleSort(array)).toEqual([1, 2, 4, 5, 6, 7, 9]);
	});
});

describe('Swap', function() {
	let testArr;
	beforeEach(function() {
		testArr = [5, 9, 2, 1, 4, 7, 6];
	});
	it('is a helper function', function() {
		expect(typeof swap).toBe('function');
	});
	it('calls swap the correct number of times and does the correct amount of comparisons', function() {
		spyOn(window, 'swap').and.callThrough();
		expect(bubbleSort(testArr)).toEqual([1, 2, 4, 5, 6, 7, 9]);
		expect(swap.calls.count()).toEqual(3);
		expect(swap.calls.count() * testArr.length).toEqual(21);
	});
});
