const form = document.querySelector("form");
const namaDepanInput = document.getElementById("nama_depan");
const namaDepanError = document.getElementById("nama_depan_error");
const namaDepanErrorIcon = document.getElementById("nama_depan_error_icon");
const namaBelakangInput = document.getElementById("nama_belakang");
const namaBelakangError = document.getElementById("nama_belakang_error");
const namaBelakangErrorIcon = document.getElementById(
  "nama_belakang_error_icon"
);
const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("username_error");
const usernameErrorIcon = document.getElementById("username_error_icon");
const emailInput = document.getElementById("email");
const emailSuccess = document.getElementById("email_success");
const emailSuccessIcon = document.getElementById("email_success_icon");
const alamatInput = document.getElementById("alamat");
const alamatError = document.getElementById("alamat_error");
const alamatErrorIcon = document.getElementById("alamat_error_icon");
const kotaKabupatenInput = document.getElementById("kota_kabupaten");
const kotaKabupatenError = document.getElementById("kota_kabupaten_error");
const kotaKabupatenErrorIcon = document.getElementById(
  "kota_kabupaten_error_icon"
);
const provinsiInput = document.getElementById("provinsi");
const provinsiError = document.getElementById("provinsi_error");
const provinsiErrorIcon = document.getElementById("provinsi_error_icon");
const kodePosInput = document.getElementById("kode_pos");
const kodePosError = document.getElementById("kode_pos_error");
const kodePosErrorIcon = document.getElementById("kode_pos_error_icon");
const namaPemilikKartuInput = document.getElementById("nama_pemilik_kartu");
const namaPemilikKartuError = document.getElementById(
  "nama_pemilik_kartu_error"
);
const namaPemilikKartuErrorIcon = document.getElementById(
  "nama_pemilik_kartu_error_icon"
);
const nomorKartuKreditInput = document.getElementById("nomor_kartu_kredit");
const nomorKartuKreditError = document.getElementById(
  "nomor_kartu_kredit_error"
);
const nomorKartuKreditErrorIcon = document.getElementById(
  "nomor_kartu_kredit_error_Icon"
);
const masaKedaluarsaInput = document.getElementById("masa_kedaluarsa");
const masaKedaluarsaError = document.getElementById("masa_kedaluarsa_error");
const masaKedaluarsaErrorIcon = document.getElementById(
  "masa_kedaluarsa_error_icon"
);
const kodeCvvInput = document.getElementById("kode_cvv");
const kodeCvvError = document.getElementById("kode_cvv_error");
const kodeCvvErrorIcon = document.getElementById("kode_cvv_error_icon");

document
  .getElementById("proses_pembayaran")
  .addEventListener("click", function () {
    let formIsValid = true;
    var namaDepanInput = document.getElementById("nama_depan");
    var namaDepanError = document.getElementById("nama_depan_error");
    var namaBelakangInput = document.getElementById("nama_belakang");
    var namaBelakangError = document.getElementById("nama_belakang_error");
    var usernameInput = document.getElementById("username");
    var usernameError = document.getElementById("username_error");
    var emailInput = document.getElementById("email");
    var emailSuccess = document.getElementById("email_success");
    var alamatInput = document.getElementById("alamat");
    var alamatError = document.getElementById("alamat_error");
    var kotaKabupatenInput = document.getElementById("kota_kabupaten");
    var kotaKabupatenError = document.getElementById("kota_kabupaten_error");
    var provinsiInput = document.getElementById("provinsi");
    var provinsiError = document.getElementById("provinsi_error");
    var kodePosInput = document.getElementById("kode_pos");
    var kodePosError = document.getElementById("kode_pos_error");
    var namaPemilikKartuInput = document.getElementById("nama_pemilik_kartu");
    var namaPemilikKartuError = document.getElementById(
      "nama_pemilik_kartu_error"
    );
    var nomorKartuKreditInput = document.getElementById("nomor_kartu_kredit");
    var nomorKartuKreditError = document.getElementById(
      "nomor_kartu_kredit_error"
    );
    var masaKedaluarsaInput = document.getElementById("masa_kedaluarsa");
    var masaKedaluarsaError = document.getElementById("masa_kedaluarsa_error");
    var kodeCvvInput = document.getElementById("kode_cvv");
    var kodeCvvError = document.getElementById("kode_cvv_error");

    if (namaDepanInput.value.trim() === "") {
      namaDepanError.textContent = "nama depan harus diisi.";
      namaDepanInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      namaDepanError.textContent = "";
      namaDepanInput.classList.remove("is-invalid");
    }

    if (namaBelakangInput.value.trim() === "") {
      namaBelakangError.textContent = "nama belakang harus diisi.";
      namaBelakangInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      namaBelakangError.textContent = "";
      namaBelakangInput.classList.remove("is-invalid");
    }

    if (usernameInput.value.trim() === "") {
      usernameError.textContent = "username harus diisi.";
      usernameInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      usernameError.textContent = "";
      usernameInput.classList.remove("is-invalid");
    }

    if (emailInput.value.trim() === "") {
      emailSuccess.textContent = "";
      emailInput.classList.add("is-valid");
      formIsValid = false;
    } else {
      emailSuccess.textContent = "";
      emailInput.classList.remove("is-valid");
    }

    if (alamatInput.value.trim() === "") {
      alamatError.textContent = "alamat harus diisi.";
      alamatInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      alamatError.textContent = "";
      alamatInput.classList.remove("is-invalid");
    }

    if (kotaKabupatenInput.value.trim() === "") {
      kotaKabupatenError.textContent = "pilih kota/kabupaten yang sesuai.";
      kotaKabupatenInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      kotaKabupatenError.textContent = "";
      kotaKabupatenInput.classList.remove("is-invalid");
    }

    if (provinsiInput.value.trim() === "") {
      provinsiError.textContent = "pilih provinsi yang sesuai.";
      provinsiInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      provinsiError.textContent = "";
      provinsiInput.classList.remove("is-invalid");
    }

    if (kodePosInput.value.trim() === "") {
      kodePosError.textContent = "kode pos harus diisi.";
      kodePosInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      kodePosError.textContent = "";
      kodePosInput.classList.remove("is-invalid");
    }

    if (namaPemilikKartuInput.value.trim() === "") {
      namaPemilikKartuError.textContent = "nama lengkap harus sesuai.";
      namaPemilikKartuInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      namaPemilikKartuError.textContent = "";
      namaPemilikKartuInput.classList.remove("is-invalid");
    }

    if (nomorKartuKreditInput.value.trim() === "") {
      nomorKartuKreditError.textContent = "Nomor kartu kredit wajib diisi.";
      nomorKartuKreditInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      nomorKartuKreditError.textContent = "";
      nomorKartuKreditInput.classList.remove("is-invalid");
    }

    if (masaKedaluarsaInput.value.trim() === "") {
      masaKedaluarsaError.textContent = "masa kadaluarsa wajib diisi.";
      masaKedaluarsaInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      masaKedaluarsaError.textContent = "";
      masaKedaluarsaInput.classList.remove("is-invalid");
    }
    if (kodeCvvInput.value.trim() === "") {
      kodeCvvError.textContent = "kode CVV wajib diisi.";
      kodeCvvInput.classList.add("is-invalid");
      formIsValid = false;
    } else {
      kodeCvvError.textContent = "";
      kodeCvvInput.classList.remove("is-invalid");
    }
    if (formIsValid) {
      alert("Form is valid, payment processing...");
    }
  });

// Nama : Rian alfatian
// Nim  : 23.12.2811
// Kls  : SI02
