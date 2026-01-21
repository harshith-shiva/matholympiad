const symbols = ["π", "∑", "∞", "√", "Δ", "θ", "λ", "∫"];

const FloatingMathBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {symbols.map((symbol, index) => (
        <span
          key={index}
          className="absolute text-white opacity-30 text-4xl md:text-6xl animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${index * 2}s`,
            animationDuration: `${30 + Math.random() * 10}s`,
          }}
        >
          {symbol}
        </span>
      ))}
    </div>
  );
};

export default FloatingMathBackground;
