import "./App.css";

import { useEffect, useState } from "react";

function App({ text }) {
  const words = text.split(" ");

  const [cursor, setCursor] = useState(0);
  const [value, setValue] = useState("");
  const [timerId, setTimerId] = useState(null);
  const [timer, setTimer] = useState(0);
  const [speed, setSpeed] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);

    if (cursor === 0 && timerId === null) {
      setTimer(0);
      setTimerId(
        window.setInterval(() => {
          setTimer((t) => t + 1);
        }, 1000)
      );
    }
  };

  useEffect(() => {
    if (value[value.length - 1] === " ") {
      if (value.trim() === words[cursor]) {
        setCursor(cursor + 1);

        if (cursor === words.length - 1) {
          setCursor(0);
          setTimerId(null);
          window.clearInterval(timerId);
        }
      }

      setValue("");
    }
  }, [value, cursor]);

  useEffect(() => {
    setSpeed(words.slice(0, cursor).join(" ").length / timer || 0);
  }, [timer]);

  return (
    <div className="App">
      <p>
        {words.map((t, idx) => (
          <span key={idx}>
            <i
              style={{
                background: cursor === idx ? "#ccc" : "none",
                color:
                  cursor === idx && value && t.indexOf(value.trim()) === -1
                    ? "red"
                    : "#000",
              }}
            >
              {t}
            </i>{" "}
          </span>
        ))}
      </p>

      <input onChange={handleChange} value={value} />

      <p>
        Потраченное время: <b>{timer} сек</b>
      </p>
      <p>
        Скорость печати: <b>{(speed * 60).toFixed(2)} символов в мин</b>
      </p>
    </div>
  );
}

export default App;
