const Bubbles = ({ bubbles = [] }) => {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className={`absolute ${bubble.position} ${bubble.size} ${bubble.color} rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob ${bubble.animationDelay} dark:mix-blend-normal dark:opacity-10`}
          ></div>
        ))}
      </div>
    );
  };
  
  export default Bubbles;