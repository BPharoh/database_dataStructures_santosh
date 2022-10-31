function logAtLeast5(n)
{
  for (let i = 1; i <= Math.max(5, n); i++)
  {    console.log(i);
  }
}

console.log(logAtLeast5(3))

// Time: O(n)
// Space: O(1)
