const preference = "Have you heard of Python? I really love Python!";
console.log(preference.replaceAll("Python", "JavaScript"));

const preference2 = "My most prefered languages are 1-Java, 2-Python and 3-C#";
console.log(preference2.replaceAll(/\d-\S+/g, "JavaScript"));
// "d" = digit
// "-" = -
// "S+" = non-whitespace, one or more
// "g" = global flag