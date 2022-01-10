/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote:'The only way to go fast is to go well.',
    source:'Robert C. Martin',
    citation:'Twitter @unclebobmartin',
    year:'Aug. 20, 2019',
    tags: 'Uncle Bob, Efficiency'
  },
  {
    quote:'Clean code reads like well-written prose.',
    citation:'Clean Code: A Handbook of Agile Software Craftsmanship',
    source:'Grady Booch',
    year:'2009',
    tags: 'Grady Booch, Clean Code'
  },
  {
    quote:'The first rule of functions is that they should be small. The second rule of functions is that they should be smaller than that.',
    source:'Robert C. Martin',
    citation:'Clean Code: A Handbook of Agile Software Craftsmanship',
    year:'2009',
    tags: 'Uncle Bob, Clean Code, Functions'
  },
  {
    quote:'One difference between a smart programmer and a professional programmer is that the professional understands that clarity is king. Professionals use their powers for good and write code that others can understand.',
    source:'Robert C. Martin',
    citation:'Clean Code: A Handbook of Agile Software Craftsmanship',
    year:'2009',
    tags: 'Uncle Bob, Clean Code, Professionalism' 
  },
  {
    quote:'You should name a variable using the same care with which you name a first-born child.',
    source:'James O. Coplien',
    citation:'Clean Code: A Handbook of Agile Software Craftsmanship',
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
 randomIndex = Math.floor( Math.random() * quotes.length ); 
 return quotes[randomIndex];
};

/***
 * `printQuote` function
***/
function printQuote () {
  quoteToPrint = getRandomQuote();
  quoteHTML = `
  <p class="quote">${quoteToPrint.quote}</p>
  <p class="source">${quoteToPrint.source}
  `;

  // If quote has citation property, add to source line
  if(quoteToPrint.citation)
    quoteHTML += `<span class="citation">${quoteToPrint.citation}</span>`;
  
  // If quote has year prperty, add year to source line
  if(quoteToPrint.year)
    quoteHTML += `<span class="year">${quoteToPrint.year}</span>`;

  // If quote has tags property, add new paragraph line for tags
  if(quoteToPrint.tags)
    quoteHTML += `</p><p class="tags">tags: ${quoteToPrint.tags}`;

  quoteHTML += `</p>`;
  
  return document.getElementById('quote-box').innerHTML = quoteHTML;
};

// Function to generate random number 0 and above. Requires parameter "upperBound", the number to go up to, inclusive
function randomPositiveNum(upperBound){
  return Math.floor( Math.random() * (upperBound + 1) );
}

// Generates a new rgb value and applies to document body background.
// Thanks to "W3Schools" for reference to change background using document.style: https://www.w3schools.com/jsref/prop_style_background.asp
function updateBackgroundToRandomRGB() {
  let newRGB = `rgb(${randomPositiveNum( 255 )},${randomPositiveNum(255)},${randomPositiveNum(255)})`;
  document.body.style.background = newRGB;
}

// Function to update both bg color and load-quote, for use with setInterval()
function loadQuoteandBGColor (){
  updateBackgroundToRandomRGB();
  printQuote();
}

// Update quote after a set number of milliseconds
let rotateQuotes = setInterval(loadQuoteandBGColor,7000);

/***
 * Source: Code below provided by Treehouse (project files)
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.getElementById('load-quote').addEventListener("click", updateBackgroundToRandomRGB, false);