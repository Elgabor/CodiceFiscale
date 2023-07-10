Disclaimer: This code was created as an exercise to test my practical skills and not just rely on theory. If I were to create the complete tax code, I would need to add an API connected to the list of municipalities throughout Italy, which is approximately 13,000, and another API connected to the list of provinces. I manually wrote some provinces and municipalities just to test the code. Perhaps in the future, I will connect these APIs to improve the functionality of the tax code :).

Step 1: The surname
The first part of the tax code, which consists of the first 3 characters, pertains to the surname. Generally, the rule is to take the first 3 consonants. There are special cases to consider:

If the surname does not have 3 consonants, the vowels are taken until reaching the required 3 characters.
Another special case is when the surname has only 2 characters. In this case, the third character of the tax code will be "X."
For compound surnames, they should be considered as one unit without spaces.

Step 2: The given name
Moving on to characters 4 to 6, which pertain to the given name, the criteria are similar to those for the surname, but with a difference. For consonants, the first, third, and fourth are taken if the name has more than 3 consonants; otherwise, the first three are taken. There are special cases to consider:

If there are only two consonants, the first vowel is taken.
If there are only 2 characters, the letter "X" is added.
Compound names should be treated as a single string without spaces.

Step 3: Date of birth
Characters 7 to 11 indicate the date of birth. In the tax code, this is represented by the last two digits of the year, followed by a letter representing the month from "A" for January to "T" for December, and then the day of birth. There is a difference between males and females: for females, the day of birth is increased by 40. For example:

A woman born on July 6, 1981, will have the following string in the tax code related to the date of birth: "81L46."
A man born on July 6, 1981, will have the following string in the tax code related to the date of birth: "81L06."

Step 4: Place of birth
The tax code should include the value corresponding to the municipal cadastral code of the municipality where the person was born. For example, a taxpayer born in Rome will have the string "H501" in the final part of the tax code. If this information is not known, it can be retrieved from the website of the Territorial Agency. Special cases: for foreign citizens or Italians born abroad, the tax code refers to the country of birth, not the city, and the sequence starts with the letter "Z" followed by the 3-digit country identifier.

Step 5: Final letter
The last character of the tax code serves as a control character. It is calculated using a simple algorithm: the values from the code developed above are arranged in sequence, distinguishing odd characters (i.e., the 1st, 3rd, 5th, and so on) and even characters (the 2nd, 4th, 6th), and they are converted into numeric values based on predefined tables.
The values obtained from the conversion of alphanumeric characters are added together, and the result is divided by 26 (a fixed coefficient). The remainder of the division will provide the identifying code.
