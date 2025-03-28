// src/components/SignaturePad.js
import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { Button } from 'react-bootstrap';

const SignaturePad = ({ onSave }) => {
  const sigCanvas = useRef({});

  const clear = () => {
    sigCanvas.current.clear();
  };

  const save = () => {
    const dataUrl = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    onSave(dataUrl);
  };

  return (
    <div className="signature-pad">
      <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
      />
      <div className="signature-buttons d-flex gap-2 mt-2">
        <Button variant="secondary" onClick={clear}>Clear</Button>
        <Button variant="primary" onClick={save}>Save</Button>
      </div>
    </div>
  );
};

export default SignaturePad;