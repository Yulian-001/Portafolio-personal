import { useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

function RadarLabel({ x, y, payload }) {
    const angle = payload.coordinate * Math.PI / 180;
    const horizontal = Math.cos(angle);
    const vertical = Math.sin(angle);

    return (
        <text x={x} y={y} dy={vertical > .9 ? "-.1em" : vertical >= 0 ? "-.3em" : "1.35em"}
            textAnchor={horizontal < -.7 ? "start" : horizontal > .7 ? "end" : "middle"}
            className="skill-axis-label">
            {payload.value}
        </text>
    );
}

export default function GraficSkill({ radar }) {
    const [selected, setSelected] = useState(null);

    return (
        <section className="skill-radar">
            <h4 className="sr-only">{radar.title}</h4>
            <div className="skill-chart" role="img" aria-label={`${radar.title}. ${radar.axes.map(({ label }) => label).join(", ")}`}>
                <ResponsiveContainer width="100%" height="100%" initialDimension={{ width: 300, height: 300 }}>
                    <RadarChart data={radar.axes} outerRadius="91%" accessibilityLayer={false}>
                        <PolarGrid gridType="polygon" fill="#88828c" stroke="#aba9ba" />
                        <PolarAngleAxis dataKey="label" axisLine={false} tickLine={false} tickSize={2} tick={<RadarLabel />} />
                        <PolarRadiusAxis domain={[0, 100]} ticks={[20, 40, 60, 80, 100]} tick={false} axisLine={false} />
                        {radar.series.map(({ id, label, color }) => (
                            <Radar key={id}
                                className={selected === id ? "skill-trace is-selected" : "skill-trace"}
                                name={label}
                                dataKey={id}
                                stroke={color}
                                color={color}
                                fill={color}
                                fillOpacity={0.045}
                                strokeWidth={2}
                                isAnimationActive={false}
                                activeDot={false}
                            />
                        ))}
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            <div className="skill-radar-aside">
                <ul className="skill-legend" aria-label="Series del radar">
                    {radar.series.map(({ id, label, color }) => (
                        <li key={id}>
                            <button type="button" aria-pressed={selected === id}
                                style={{ "--trace": color }}
                                onClick={() => setSelected(selected === id ? null : id)}>
                                <span aria-hidden="true" />{label}
                            </button>
                        </li>
                    ))}
                </ul>
                <p>{radar.description}</p>
            </div>
        </section>
    );
}
