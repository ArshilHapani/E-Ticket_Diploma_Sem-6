import React from "react";
import QRCode from "react-qr-code";
const QrCodeSVG = ({ values }) => {
  const parsedData = JSON.stringify(values);
  return (
    <>
      <QRCode value={parsedData} />
    </>
  );
};

export default QrCodeSVG;
