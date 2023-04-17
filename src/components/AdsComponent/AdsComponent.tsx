import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: { push: () => void }[];
  }
}

interface AdsComponentProps {
  dataAdSlot: string;
}

export const AdsComponent: React.FC<AdsComponentProps> = ({ dataAdSlot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle || []).push();
    } catch (e) {}
  }, []);

  return (
    <>
     <ins className="adsbygoogle"
     style={{display:"inline-block", width:"360px", height:"800px"}}
     data-ad-client="ca-pub-3893760423520136"
     data-ad-slot="3160073620"></ins>
    </>
  );
};

export default AdsComponent;
