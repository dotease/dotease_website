import { useEffect, useState } from "react";
import { FaCheck, FaClipboard } from "react-icons/fa";

interface CopyToClipboardButtonProps {
  text: string;
}

function CopyToClipboardButton({ text }: CopyToClipboardButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    void navigator.clipboard.writeText(text).then(() => console.log("Copied to clipboard"));

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div className={"flex items-center justify-center"}>
      <button onClick={() => setCopied(true)} className={"mt-6 bg-gray-50 py-2 rounded text-center border w-80"}>
        <code> {text} </code>
      </button>
      <div className={"mt-5 ml-2"}>{!copied ? <FaClipboard className={"fa-bars"} color={"gray"} /> : <FaCheck className={"fa-bars"} color={"green"} />}</div>
    </div>
  );
}

export default CopyToClipboardButton;
