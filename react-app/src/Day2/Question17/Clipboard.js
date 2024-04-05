import { useState } from "react";
import useClipboard from "./useClipboard";

export const Clipboard = () => {
  const [text, handleCopy, copied] = useClipboard("");
  const [value, setValue] = useState("");

  return (
    <div >
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => {
            if (handleCopy(value)) {
              setValue("");
            }
          }}
          disabled={copied}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <p>Copied text: {text}</p>
    </div>
  );
};

