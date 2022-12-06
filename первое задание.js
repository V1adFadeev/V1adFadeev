function filter(mail, blacklist) {
    // console.log(mail, blacklist);
    for (let list of mail) {
        // console.log(list);
      let z = blacklist.indexOf(list);
    //   console.log(z)
      if (z === -1) {
        emails.push(list)
      }
    }
}

let emails = [];
let postalAddresses = ['dalv', 'ProdVil', '12345', 'login', 'dick', 'fiLoR2'];
let postalAddressesBlecklist = [ '12345', 'login', 'dick'];

filter(postalAddresses, postalAddressesBlecklist);
console.log(emails);
