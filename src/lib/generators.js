// lib/generators.js
function generateCzechBirthNumber() {
  // Generate a random date between 1900 and 1999
  const birthDate = new Date(1900, 0, 1)
  birthDate.setDate(birthDate.getDate() + Math.floor(Math.random() * 36524))
  const birthDateStr = birthDate.toISOString().slice(2, 10).replace(/-/g, "")

  // Generate a random 3-digit number for a male (even number)
  let uniqueNumber = String(Math.floor(Math.random() * 500) * 2).padStart(
    3,
    "0"
  )

  // Concatenate the birth date and the unique number
  let birthNumber = birthDateStr + uniqueNumber

  // Calculate the checksum
  while (parseInt(birthNumber, 10) % 11 !== 0) {
    uniqueNumber = String(Math.floor(Math.random() * 500) * 2).padStart(3, "0")
    birthNumber = birthDateStr + uniqueNumber
  }

  return birthNumber
}

function generateNineDigits() {
  // Generate a random 9-digit number
  return Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join(
    ""
  )
}

function generateVin() {
  // Define the characters that can be used in a VIN
  let vinChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  vinChars = vinChars.replace("I", "").replace("O", "").replace("Q", "")

  // Generate a random 17-character VIN
  let vin = ""
  for (let i = 0; i < 17; i++) {
    vin += vinChars.charAt(Math.floor(Math.random() * vinChars.length))
  }

  return vin
}

function generateLicensePlate() {
  // Generate a random 1-digit number
  let firstDigit = Math.floor(Math.random() * 9) + 1

  // Generate a random uppercase letter
  let letter = String.fromCharCode(Math.floor(Math.random() * 26) + 65)

  // Generate a random 1-digit number
  let secondDigit = Math.floor(Math.random() * 9) + 1

  // Generate a random 4-digit number
  let digits = ""
  for (let i = 0; i < 4; i++) {
    digits += Math.floor(Math.random() * 10)
  }

  return `${firstDigit}${letter}${secondDigit} ${digits}`
}

function generateDate() {
  // Generate a random date between 1946 and today
  const startDate = new Date(1946, 0, 1)
  const endDate = new Date()
  const timeBetweenDates = endDate.getTime() - startDate.getTime()
  const daysBetweenDates = timeBetweenDates / (1000 * 60 * 60 * 24)
  const randomNumberOfDays = Math.floor(Math.random() * daysBetweenDates)
  const randomDate = new Date(
    startDate.getTime() + randomNumberOfDays * (1000 * 60 * 60 * 24)
  )

  // Format the date as MM/DD/YYYY
  const month = String(randomDate.getMonth() + 1).padStart(2, "0")
  const day = String(randomDate.getDate()).padStart(2, "0")
  const year = randomDate.getFullYear()

  return `${month}/${day}/${year}`
}

function generateEmail() {
  // Generate a random string of lowercase letters for the email username
  const usernameLength = Math.floor(Math.random() * 6) + 5
  let username = ""
  for (let i = 0; i < usernameLength; i++) {
    username += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  // Generate a random string of lowercase letters for the email domain
  const domainLength = Math.floor(Math.random() * 3) + 3
  let domain = ""
  for (let i = 0; i < domainLength; i++) {
    domain += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  // Form the email
  const email = username + "@" + domain + ".com"

  return email
}

function generateName() {
  // Generate a random string of lowercase letters for the name
  const nameLength = Math.floor(Math.random() * 6) + 5
  let name = ""
  for (let i = 0; i < nameLength; i++) {
    name += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  return name
}

function generateStreetName() {
  // Predefined list of street types
  const streetTypes = [
    "Street",
    "Avenue",
    "Boulevard",
    "Drive",
    "Road",
    "Lane",
    "Terrace",
    "Place",
    "Court",
    "Cove",
    "Alley",
  ]

  // Generate a random string of lowercase letters for the street name
  const nameLength = Math.floor(Math.random() * 6) + 5
  let name = ""
  for (let i = 0; i < nameLength; i++) {
    name += String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  // Choose a random street type
  const streetType = streetTypes[Math.floor(Math.random() * streetTypes.length)]

  // Form the full street name
  const fullName =
    name.charAt(0).toUpperCase() + name.slice(1) + " " + streetType

  return fullName
}

function generateZipCode() {
  // Generate a random number between 10000 and 99999
  const zipCode = Math.floor(Math.random() * 90000) + 10000

  // Return the zip code as a string
  return String(zipCode)
}

function generateAmount() {
  // Generate a random number between 1 and 10000 for the whole part
  const wholePart = Math.floor(Math.random() * 10000) + 1

  // Generate a random number between 0 and 99 for the decimal part
  const decimalPart = Math.floor(Math.random() * 100)

  // Convert both numbers to strings and concatenate them with a dot in between
  const moneyAmount = wholePart + "." + String(decimalPart).padStart(2, "0")

  return moneyAmount
}

function generateCzechCity() {
  // Predefined list of Czech cities
  const cities = [
    "Prague",
    "Brno",
    "Ostrava",
    "Pilsen",
    "Liberec",
    "Olomouc",
    "Usti nad Labem",
    "Hradec Kralove",
    "Ceske Budejovice",
    "Pardubice",
  ]

  // Choose a random city
  const city = cities[Math.floor(Math.random() * cities.length)]

  return city
}

function dabs() {
  return "dabs"
}

function generateCzechAccountNumber() {
  // Generate a random number (either 0 or 1)
  const randomNumber = Math.floor(Math.random() * 2)

  // If the random number is 0, return '00', otherwise return '123'
  return randomNumber === 0 ? "00" : "123"
}

function generateDoorNumber() {
  // Generate a random number between 1 and 500
  const doorNumber = Math.floor(Math.random() * 500) + 1

  // Return the door number as a string
  return String(doorNumber)
}

export const generators = {
  "birth number": generateCzechBirthNumber,
  "nine digits": generateNineDigits,
  dabs: dabs,
  name: generateName,
  email: generateEmail,
  "street name": generateStreetName,
  "street nº": generateDoorNumber,
  ZIP: generateZipCode,
  city: generateCzechCity,
  date: generateDate,
  amount: generateAmount,
  "bank account": generateCzechAccountNumber,
  VIN: generateVin,
  "license plate": generateLicensePlate,
}
