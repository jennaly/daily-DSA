// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

//given a URL
//return the domain name as a string
//("") => ""
//returning output
//domain name always ends with .com
//does a period signal the end of a domain name
//will the argument always be a url? no symbols, strange character?
//will the url always start with http:// or https:// ?
//will there be anything before the domain name that is not included in the provided test cases here?

//use replace to relace the start of the URL with an empty string
//call replace 3 times to cover all the variations
//use . as a separator to split up my string into 2 elements in an array, everything before the .(com), and everything after
//return array[0] because that's where the domain name is

function domainName(url) {
    return url.replace("http://","").replace("https://", "").replace("www.", "").split(".")[0]
  }
  
  console.log(domainName("http://github.com/carbonfive/raygun"))
  console.log(domainName("http://www.zombie-bites.com"))
  console.log(domainName("https://www.cnet.com")) 