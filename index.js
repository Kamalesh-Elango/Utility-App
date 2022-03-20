
const readLineSync = require('readline-sync');
const util = () =>
  {
const answer = readLineSync.question('Choose the operation you want to perform: \n1.URL Encoder/Decoder \n2.Base64 Encoder/Decoder\n3.String Hashing\n4.Epoch Converters\n5.Binary/Decimal/Hex/Octal Converters \n6.RGB <=> Hex converters\n');

switch(answer)
  {
    case '1':
      urlEncodeDecode();
      break;
    case '2':
      base64EncodeDecode();
      break;
    case '3':
      stringHash();
      break;
    case '4':
      epochConversion();
      break;
    case '5':
      numberBaseConverters();
      break;
    case '6':
      hexRgbConverter();
      break;
    default:
      console.log('Enter a valid input');
      break;
  }

    
function urlEncodeDecode()
  {
    const util1choice = readLineSync.question('Welcome to URL Encoder/Decoder. Which utility function would you like to use? \n1.urlEncode \n2.urlDecode\n');
    const url = readLineSync.question('Enter the url you want to opearate on\n');

    if(util1choice === '1')
    {
  console.log(encodeURIComponent(url))
    }
    else if(util1choice === '2')
    {
      
      console.log(decodeURIComponent(url));
    }
    else
    {
      console.log('Invalid input');
    }
  }

function base64EncodeDecode()
  {
    const util2choice = readLineSync.question('Welcome to Base 64 Encoder/Decoder. Which utility function would you like to use? \n1.base64Encode \n2.base64Decode\n');
    const link = readLineSync.question('Enter the input:\n');
    if(util2choice === '1')
    {
console.log(Buffer.from(link).toString('base64'));
    }
    else if(util2choice === '2')
    {
      
      console.log(Buffer.from(link, 'base64').toString('ascii'));
    }
    else
    {
      console.log('Invalid input');
    }
  }

function stringHash() {
  const crypto = require('crypto');
  console.log('Welcome to StringHashing. \n')
  const algo =['md5','sha1','sha256','sha512']
   const util3Choice = readLineSync.question('Choose an algortithm for string hashing 1-4 \n');
  const link = readLineSync.question('Enter the input:\n'); console.log(crypto.createHash(algo[Number(util3Choice)-1]).update(link).digest('hex'));
}
    
function epochConversion()
  {
    const choice4 = readLineSync.question('Choose:\n1.Epoch to Human date \n2.Human date to Epoch\n');
    if(choice4 === '1')
    {
      const epoch = readLineSync.question('Enter epoch number: \n');
      var myDate = new Date(parseInt(epoch)*1000);
      console.log(`conversion result: ${myDate.toLocaleString()}`);
    }
    else if(choice4 ==='2')
    {
    const month = readLineSync.question('Enter month: \n');
    const date = readLineSync.question('Enter date: \n');
    const year = readLineSync.question('Enter year: \n');
    const time = readLineSync.question('Enter time: \n');
    const dateValue = `${month} ${date}, ${year} ${time}`;
    var myDate = new Date(dateValue); 
    var myEpoch = myDate.getTime()/1000.0;
    console.log(`Epoch date: ${myEpoch}`);
    }
  }

function numberBaseConverters()
  {
    console.log("Welcome to base conversion tool\n");
const input = readLineSync.question('Enter the number to be converted:\n');
const inputBase = readLineSync.question('Enter the base of the input number:\n1.Binary -- 2\n2.Decimal -- 10\n3.HexaDecimal -- 16\n4.Octal -- 8\n');
const resultBase = readLineSync.question('Enter the base to be converted:\n1.Binary -- 2\n2.Decimal -- 10\n3.HexaDecimal -- 16\n4.Octal -- 8\n');

  const result = parseInt(input + ' ', Number(inputBase)).toString(resultBase);
    console.log(`The converted result: ${result}`);
  }

function hexRgbConverter()
{
  const utilChoice6 = readLineSync.question('Choose:\n1.Hex to RGB convertsion\n2.RGB to Hex\n');

  if(utilChoice6 === '1')
  {
    const userInput = readLineSync.question('Enter the input:\n');
    let rgbArray = userInput.match(/.{1,2}/g);
    const red = parseInt(rgbArray[0],16);
    const green = parseInt(rgbArray[1],16);
    const blue = parseInt(rgbArray[2],16);
    console.log(`Red:${red}, Green:${green}, Blue:${blue}`);
  }
  else if(utilChoice6 === '2')
  {
    const redData= readLineSync.question('Enter the red value:\n');
    const greenData = readLineSync.question('Enter the green value:\n');
    const blueData = readLineSync.question('Enter the blue value:\n');
  redInput = parseInt(redData).toString(16);
  greenInput = parseInt(greenData).toString(16);
  blueInput = parseInt(blueData).toString(16);
  if (redInput.length === 1)
    redInput = "0" + redInput;
  if (greenInput.length === 1)
    greenInput = "0" + greenInput;
  if (blueInput.length === 1)
    blueInput = "0" + blueInput; console.log(`Hex valu: #${redInput}${greenInput}${blueInput}`);
  }
}


    
  }



util();