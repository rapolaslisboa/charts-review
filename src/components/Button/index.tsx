interface ButtonProps {
  isRunning: boolean;
  onClick: () => void;
}

const Button = ({ isRunning, onClick }: ButtonProps) => {
  return (
    <button
      title={
        !isRunning
          ? "Adds dynamic data in a interval (3 secs)"
          : "Stops adding dynamic data"
      }
      className="btn"
      style={{ backgroundColor: isRunning ? "#d9422e" : "#2196F3" }}
      onClick={onClick}
    >
      {isRunning ? "Stop" : "Run"}
    </button>
  );
};

export { Button };
