/*
All output goes to the console and uses template literals (with the ticks). 
Rename the Form1 form 'pets'.
On the 'pets' form, create an array named 'petNames' that contains the pet names below. 
Hint: remember to add quotes around each name to show it is a string.

Darcy, Jack, Jerry, Marty, Vito, Vinny, Riley, Saddie, Marge, Sam

Use an array method to create a new array named "withMarmaduke" that holds the original array data with the string "Marmaduke" added as the last item. Use the 'pets' array in this one line of code.  
Write some code that uses at least one array method to do something - pick an interesting one from  the MSN Javascript Array Reference Guide provided by Code Academy: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array (Links to an external site.)
The program must let the user pick one of these to do - there are many ways you can write code to do this - think of one :)
> remove "Vinny" from the array.
> remove "Marty" from the array.
> add "Nancy" to the front of the array.
> add their name to the end of the array.
> tell the user the array index where "Riley" is located in the array. 
> tell the user the array index where "Cindy" is located. This should return-1 since "Cindy" is not in the array. 
> show the 'withMarmaduke' array data.
After each user-chosen activity (eg. remove 'Vinny'), output to the console the action taken ('remove Vinny') and the current state of the petNames array using this format: 

The action taken was: Remove Vinny
The remaining array data are: 
Darcy, Jack, Jerry, Marty, Vito, Riley, Saddie, Marge, Sam
When you are completely done coding and it all works perfectly, in GH Desktop create a Pull Request and send it up to GitHub website. 
Then do a Pull Request, and then Merge (have to scroll down for this). GH will merge your branch (with your changes/commits) with the current master. This has the net effect of replacing or overwriting the master with your branch version. Now your branch is the new master!
*/

let petNames = ['Darcy', 'Jack', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']
let withMarmaduke = petNames.concat('Marmaduke')

// find the index of an item in the array
let positionIndexJack = petNames.indexOf('Jack')
alert(positionIndexJack)

let selectAction = prompt('List one of the following actions: Remove Vinny, Remove Marty, Add Nancy, Add Your Name, Index Riley, Index Cindy, Show withMarmaduke.')

if (selectAction == 'Remove Vinny') {
  let value = 'Vinny' 
  petNames = petNames.filter( item => item !== value)
  alert(`The action taken was: ${selectAction}\nThe remaining data are:\n${petNames}`)
} else if (selectAction == 'Remove Marty') {
  let value = 'Marty' 
  petNames = petNames.filter( item => item !== value)
  alert(`The action taken was: ${selectAction}\nThe remaining data are:\n${petNames}`)
} else if (selectAction == 'Add Nancy') {
  petNames.unshift('Nancy')
  alert(`The action taken was: ${selectAction}\nThe remaining data are:\n${petNames}`)
} else if (selectAction == 'Add Your Name') {
  let yourName = prompt('List your name:')
  petNames.push(yourName)
  alert(`The action taken was: ${selectAction}\nThe remaining data are:\n${petNames}`)
} else if (selectAction == 'Index Riley') {
  indexRiley = petNames.indexOf('Riley')
  alert(`The action taken was: ${selectAction}\nThe remaining data are:\n${indexRiley}`)
} else if (selectAction == 'Index Cindy') {
  indexCindy = petNames.indexOf('Cindy')
  alert(`The action taken was: ${selectAction}\nThe remaining data are:\n${indexCindy}`)
} else if (selectAction == 'Show withMarmaduke') {
  alert(`The action taken was: ${selectAction}\nThe remaining data are:\n${withMarmaduke}`)
} 










  
