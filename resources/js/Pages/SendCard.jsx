import React, { useState } from "react";
import QRCode from "qrcode.react";

function Sendcard() {
    const [vcfUrl, setVcfUrl] = useState("");

    const handleButtonClick = async () => {
        try {
            const response = await fetch("/project/api/vcf/generate", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-TOKEN": document
                        .querySelector('meta[name="csrf-token"]')
                        .getAttribute("content"),
                },
            });
            const data = await response.json();
            setVcfUrl(data.vcf_url);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <button onClick={handleButtonClick}>プロフィールを渡す</button>
            {vcfUrl && <QRCode value={vcfUrl} size={128} />}
        </div>
    );
}

export default Sendcard;
