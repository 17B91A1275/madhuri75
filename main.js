function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status== "200"){
      callback(xhr.responseText);
  }
};
xhr.send(null);
}

getfile("data.json",function(text){
  var data =JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.CareerObjective);
})
var child = document.querySelector(".childone");
function details(det){
 var img = document.createElement("img");
 img.src = det.image;
 child.appendChild(img);
 var name = document.createElement("h3");
 name.textContent = det.name;
 child.appendChild(name);
 var phoneno = document.createElement("h3");
 phoneno.textContent = det.phoneno;
 child.appendChild(phoneno);
 var mail = document.createElement("a");
 mail.href = "mailto:madhuri.setti02@gmail.com";
 mail.textContent = det.email;
 child.appendChild(mail);

 var Address1= document.createElement("h3");
 Address1.textContent = det.Address1;
 child.appendChild(Address1);

 var Address = document.createElement("h3");
 Address.textContent = det.Address;
 child.appendChild(Address);

 var b= document.createElement("hr");
 child.appendChild(b);
}
var child2 = document.querySelector(".childtwo");
function career(det){
  var car = document.createElement("h2");
  car.textContent = det.car;
  child2.appendChild(car);

  var c= document.createElement("hr");
  child2.appendChild(c);

  var info = document.createElement("h3");
  info.textContent = det.info;
  child2.appendChild(info);
}
