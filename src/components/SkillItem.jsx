import { useEffect, useState } from "react";

export default function SkillItem({ name, desc, level }) {
  const radius = 34;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // Arranca vacío
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    // pequeño delay para que anime al renderizar
    const timeout = setTimeout(() => {
      setOffset(circumference - (level / 100) * circumference);
    }, 100);

    return () => clearTimeout(timeout);
  }, [level, circumference]);

  return (
    <div className="skill-item">
      <div className="skill-ring-wrapper">
      <svg
        className="skill-ring"
        height={radius * 2}
        width={radius * 2}
      >
        {/* background ring */}
        <circle
          className="skill-ring-bg"
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* progress ring */}
        <circle
          className="skill-ring-progress"
          strokeWidth={stroke}
          fill="transparent"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className="ring-label">{level}%</div>
      </div>

      <div className="skill-text">
        <strong>{name}</strong>
        {desc && <small>{desc}</small>}
      </div>
    </div>
  );
}
