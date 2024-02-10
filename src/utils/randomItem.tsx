

// // Function to pick a random object from the array

export default function pickRandomObject(array:any) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


