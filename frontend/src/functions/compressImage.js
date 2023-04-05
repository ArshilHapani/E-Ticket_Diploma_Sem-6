import imageCompression from "browser-image-compression";
async function compressImage(imageFile) {
  const options = {
    maxSizeMB: 0.8,
    maxWidthOrHeight: 820,
    useWebWorker: true,
  };
  try {
    const compressedFile = await imageCompression(imageFile, options);
    return compressedFile;
  } catch (error) {
    console.log(error);
  }
}

export default compressImage;
