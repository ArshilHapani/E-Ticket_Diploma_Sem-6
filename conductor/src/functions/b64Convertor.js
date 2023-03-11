export default async function b64Convertor(file, snackbarSetterFunction) {
  let base64String;
  var reader = new FileReader();
  console.log("base 64 invoked");

  reader.onload = async function () {
    base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

    const data = await fetch("http://localhost:6565/changeImage/c", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem("user"),
      },
      body: JSON.stringify({
        image: base64String,
      }),
    });
    const response = await data.json();
    console.log(response);
    if (!response.success) {
      snackbarSetterFunction(response.msg, "error");
    }
  };
  reader.readAsDataURL(file);
}
