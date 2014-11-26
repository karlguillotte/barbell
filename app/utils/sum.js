var sum = function(numbers) {
	return numbers.map(Number).reduce(reduce, 0);
};

export function reduce(previousValue, value) {
  return previousValue + value;
}

export function sumBy(objects, key) {
	return sum(objects.getEach(key));
}

export default sum;