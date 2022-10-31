function subtotals(array) {
  let subtotalArray = Array(array.length);
  for (let i = 0; i < array.length; i++)
  {
    let subtotal = 0;for (let j = 0; j <= i; j++)
    {
      subtotal += array[j];
    }
    subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
console.log(subtotals([1,2,3,4,5]));
// Time: O(n^2)
// Space: O(1)
