function bubbleSort(array) {
	while (!orderChecker(array)) {
		swap(array);
	}
	return array;
}

function orderChecker(array) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] > array[i + 1]) {
			return false;
		} else {
			continue;
		}
	}
	return true;
}

function swap(array) {
	console.log('test');
	for (var i = 0; i < array.length; i++) {
		if (array[i] > array[i + 1]) {
			let lesser = array[i + 1];
			let greater = array[i];
			array[i] = lesser;
			array[i + 1] = greater;
		}
	}
	return array;
}
