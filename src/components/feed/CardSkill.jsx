import { LuGamepad2 } from "react-icons/lu";
import GraficSkill from "./GraficSkill";
import "./skills.css";

const stars = Array.from({ length: 30 }, (_, index) => ({
    id: index,
    x: ((index * 37 + 13) % 97) * 4,
    y: ((index * index * 13 + index * 19 + 23) % 97) * 7,
    size: index % 5 === 0 ? 2 : 1,
}));

function renderSkill({ logo, title, description }) {
    return (
        <div className="flex items-start gap-3 text-left">
            {logo && <img src={logo} alt="" loading="lazy" width="44" height="44" />}
            <div><h5>{title}</h5><p>{description}</p></div>
        </div>
    );
}

export default function CardSkill({ skills, name, returnControl }) {
    return (
        <article className="skill-plate">
            <div className="skill-plate-surface">
                <svg className="skill-stars" aria-hidden="true" viewBox="0 0 400 700" preserveAspectRatio="xMidYMid slice">
                    <g className="skill-constellations">
                        {stars.flatMap((star, index) => stars.slice(index + 1).filter((other) => {
                            const distance = Math.hypot(other.x - star.x, other.y - star.y);
                            return distance > 14 && distance < 110;
                        }).map((other) => (
                            <path key={`${star.id}-${other.id}`} d={`M${star.x} ${star.y}L${other.x} ${other.y}`} />
                        )))}
                    </g>
                    {stars.map((star, index) => (
                        <g key={star.id} style={{ animationDelay: `-${index % 9}s`, animationDuration: `${8 + index % 6}s` }}>
                            <path d={`M${star.x} ${star.y}l${index % 2 ? 30 : -28} 38`} />
                            <circle cx={star.x} cy={star.y} r={star.size} />
                        </g>
                    ))}
                </svg>
                <svg className="skill-circuits" aria-hidden="true" viewBox="0 0 400 640" preserveAspectRatio="none">
                    <path d="M8 185V31L29 10H130L143 19H376L392 35V196L384 210V275M15 145V37L34 18H117L130 27H364L384 45V153L377 165V183M22 83V43L39 25H77L91 38H107M8 235V218L15 207V165M8 318V286L15 277V254" />
                    <path d="M8 445V608L30 630H271L284 621H373L392 601V466M15 501V602L34 621H255L268 612H368L384 596V498L377 488V468M22 563V598L38 614H76L89 601H105M392 424V449L384 459V478" />
                    <circle cx="107" cy="38" r="2.5" /><circle cx="377" cy="183" r="2.5" />
                    <circle cx="105" cy="601" r="2.5" /><circle cx="15" cy="165" r="2.5" />
                </svg>
                <div className="skill-content">
                    <header className="skill-heading">
                        <LuGamepad2 aria-hidden="true" />
                        <div><p>{skills.heading}</p><h3>{name}</h3></div>
                        {returnControl}
                    </header>
                    <GraficSkill radar={skills.radar} />
                    <div className="skill-sections">
                        {skills.sections.map(({ id, title, wide, items }) => (
                            <section key={id} className={wide ? "skill-group skill-group-wide" : "skill-group"}>
                                <h4>{title}</h4>
                                <div className="skill-group-static">
                                    <ul>{items.map((item) => <li key={item.id}>{renderSkill(item)}</li>)}</ul>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
