import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Tapez votre texte ici..." />
      <div style={{ marginTop: '12px' }}>
        <button onClick={handleClick}>Mettre le focus</button>
      </div>
    </div>
  );
}

export default FocusInput;