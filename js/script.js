const scriptURL =
  "https://script.google.com/macros/s/AKfycbw8Qjb8kwcNYIA6ysw3FQtpUfuDFnmKEomstE5UhfdpAA4vw_QXzwGSbNgZbhbdkUzf/exec";
const form = document.forms["rumahimpian-contact"];
const btnKirim = document.querySelector(".btn-sent");
const btnLoad = document.querySelector(".btn-load");
const btnAlert = document.querySelector(".btn-alert");

// if submit on click
// tampilkan loading hilangkan kirim

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoad.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoad.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilin alert
      btnAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// script for subscribe

{
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbw1Fk1t02wAu_Li4dA1FO7VQvUbsp2ml8oJ09DfXlnmNHhk1lpMWNWTYeczwg8WSRLJ/exec";
  const form = document.forms["formEmail"];
  const btnKirimEmail = document.querySelector(".btn-kirim");
  const btnLoadEmail = document.querySelector(".btn-load2");
  const btnAlertEmail = document.querySelector(".alert-subs");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    btnLoadEmail.classList.toggle("d-none");
    btnKirimEmail.classList.toggle("d-none");
    fetch(scriptUrl, { method: "POST", body: new FormData(form) })
      .then((response) => {
        // tampilkan tombol kirim, hilangkan tombol loading
        btnLoadEmail.classList.toggle("d-none");
        btnKirimEmail.classList.toggle("d-none");
        // tampilin alert
        btnAlertEmail.classList.toggle("d-none");
        // reset form
        form.reset();
        console.log("Success!", response);
      })
      .catch((error) => console.error("Error!", error.message));
  });
}

function opentab(tabname) {
  const visi = document.getElementById("visi");
  const misi = document.getElementById("misi");
  const about = document.getElementById("about");

  const visiTab = document.getElementsByClassName("tab-visi")
  const misiTab = document.getElementsByClassName("tab-misi")
  const aboutTab = document.getElementsByClassName("tab-about")


  if (tabname === "visi") {
    visi.style.display = "block";
    misi.style.display = "none";
    about.style.display = "none";
    visiTab.classList.toggle("active")
  } else if (tabname === "misi") {
    visi.style.display = "none";
    misi.style.display = "block";
    about.style.display = "none";
    misiTab.classList.toggle("active");
  } else {
    visi.style.display = "none";
    misi.style.display = "none";
    about.style.display = "block";
    aboutTab.classList.toggle("active");
  }
}
