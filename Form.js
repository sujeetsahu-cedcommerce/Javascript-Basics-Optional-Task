function getFormData(event) {
  event.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var DOB = document.getElementById("DOB").value;
  let address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var areaPin = document.getElementById("areaPin").value;
  var State = document.getElementById("State").value;
  var Qualification = document.getElementById("Qualification").value;

  var gender = document.querySelector('input[name="gender"]:checked').value;
  var Specializaton = [];
  var checkboxes = document.getElementsByName("selectSpecialization").value;
  console.log(checkboxes);
  var markedCheckbox = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  var password = document.getElementById("password").value;
  for (i = 0; i < markedCheckbox.length; i++) {
    console.log(markedCheckbox[i].value);
  }
  console.log(markedCheckbox.length);
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(mobile);
  console.log(DOB);
  console.log(address);
  console.log(city);
  console.log(areaPin);
  console.log(State);
  console.log(Qualification);
  console.log(gender);
  console.log(password);

  const data = [
    firstName,
    lastName,
    email,
    mobile,
    gender,
    DOB,
    address,
    city,
    areaPin,
    State,
    Qualification,
    // markedCheckbox,
    password,
  ];
  let text =
    '<table border="1"><tr><th>First Name</th><th>Last Name</th><th>email </th><th>mobile</th><th>gender</th><th>dob</th><th>address</th><th>city</th><th>pin</th><th>state</th><th>qualification</th><th>specialization</th><th>Password</th></tr><tr>'
  for (let i in data) {
    if (i == 11) {
      text +=
          "<td>"
      for (let j = 0; j < markedCheckbox.length; j++) {
        text +=markedCheckbox[j].value
          // "<td>"+ markedCheckbox[j].value + "</td>";
      }
      text+="</td>"
    }
    text += "<td>" + data[i] + "</td>";
  }
  text += "</tr></table>";
  document.getElementById("display").innerHTML = text;
}
