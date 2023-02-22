import React, { useState } from "react";
import QrReader from "react-qr-scanner";

const Scan = () => {
  const [result, setResult] = useState("No data scanned");
  const handleScan = (data) => {
    if (data) setResult(data);

    alert(result);
  };
  const handleError = (err) => {
    console.log(err);
  };
  return (
    <div>
      <QrReader delay={300} onError={handleError} onScan={handleScan} />
    </div>
  );
};

export default Scan;
