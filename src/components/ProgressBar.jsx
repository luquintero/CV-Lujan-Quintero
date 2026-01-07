export default function ProgressBar({ percentage }) {
  return (
    <div className="progress-bar-bg">
      <div
        className="progress-bar-fill"
        style={{ width: `${percentage}%` }}
        aria-label={`Skill level: ${percentage}%`}
      />
    </div>
  );
}
