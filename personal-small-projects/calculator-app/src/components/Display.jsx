export default function Display({ equation, result }) {
  return (
    <div className="display">
      <div className="display-equation">{equation}</div>

      <div className="display-result">{result}</div>
    </div>
  );
}
