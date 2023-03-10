export default async function b64Convertor(file, showSnackBar) {
  let base64String;
  var reader = new FileReader();
  console.log("base 64 invoked");

  reader.onload = async function () {
    base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

    const data = await fetch("http://localhost:6565/changeImage/p", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.getItem("user").toString(),
      },
      body: JSON.stringify({
        image: base64String,
      }),
    });
    const response = await data.json();
    console.log(response);
    if (!response.success) showSnackBar("Something went wrong", "error");
  };
  reader.readAsDataURL(file);
}
