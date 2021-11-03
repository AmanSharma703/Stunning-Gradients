import React, { useState, useEffect } from "react";
import tinygradient from "tinygradient";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Gradient = (props) => {
  const [copied, setCopied] = useState(false);
  const [gradientString, setGradientString] = useState(null);

    const generateGradient  = (color1,color2)=>{
    const gradient = tinygradient([color1, color2]);
    setGradientString(gradient.css())
    }

  useEffect(()=>{
    generateGradient(props.color1, props.color2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <div className="gradient-card" >
        <CopyToClipboard text = {gradientString} onCopy={()=>{
            setCopied(!copied);
        } }>
          <button>
            <div
              className="gradient"
              style={{
                background: gradientString,
                boxShadow: `1px 4px 50px ${props.color1}40`,
              }} 
            >
              {copied ? <span>Copied.</span> : <span>Click To Copy</span>}
            </div>
          </button>
        </CopyToClipboard>
      </div>
    </>
  );
};

export default Gradient;
