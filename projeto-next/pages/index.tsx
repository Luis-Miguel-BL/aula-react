import { useState } from 'react';

export default function Home() {
  // Definir estados para armazenar os valores dos números e o resultado
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  // Função para lidar com o submit do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Somar os dois números e atualizar o estado do resultado
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Somador de Números</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="num1">Número 1:</label>
          <input
            type="number"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="num2">Número 2:</label>
          <input
            type="number"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            required
          />
        </div>
        <button type="submit">Somar</button>
      </form>

      {result !== null && (
        <div>
          <h2>Resultado: {result}</h2>
        </div>
      )}
    </div>
  );
}
