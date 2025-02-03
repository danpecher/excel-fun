import { useState } from "react";
import { letterToNumber, numberToColumns } from "../column-to-int";

export default function App() {
  const [number, setNumber] = useState(70);

  const column = numberToColumns(number);
  const letters = column.split("");

  return (
    <div className="flex flex-col m-10 gap-10">
      <div className="flex flex-col w-2/3 mx-auto gap-3">
        <div className="text-center text-4xl font-bold">
          {number} = {letters}
        </div>
        <input
          type="range"
          min="0"
          max="10000"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
      </div>

      <div className="flex gap-6 text-center mx-auto">
        {letters.map((letter, i) => (
          <div className="flex flex-col gap-2">
            <span className="text-lg font-bold">{letter}</span>
            {i == letters.length - 1 ? (
              <>+{letterToNumber(letter)}</>
            ) : (
              <>
                {((letterToNumber(letter) + 1) * 26 ** (letters.length - i)) /
                  26 /
                  26}{" "}
                x 26
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
