import {
    Radar,
    RadarChart,
    PolarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';
import skillData from '../../data/skill.json';

//? Etiqueta para textos 2 lineas

const CustomTick = ({ payload, x, y, textAnchor }) => {
    const item = skillData.find((d) => d.subject === payload.value);

    return (
        <g transform={`translate(${x},${y})`}>
            <text
                x={0}
                y={0}
                dy={-4}
                textAnchor={textAnchor}
                fill="#e2e8f0"
                className="text-xs font-bold tracking-wider uppercase"
            >
                {payload.value}
            </text>
            {item?.sublabel && (
                <text
                    x={0}
                    y={12}
                    textAnchor={textAnchor}
                    fill="#ffffff"
                    className='text-sm font-extrabold'
                >
                    {item.sublabel}
                </text>
            )}
        </g>
    )
}


export default function GraficSkill () {
    return(
        <section>

            //? Grafica: pensar en como hacerla o plasmarla
                <div className="flex flex-col md:flex-row items-center justify-between bg-[#0f131a] border border-slate-700/80 p-6 rounded-xl text-white shadow-2xl">

                    {/* Contenedor del Pentágono */}
                    <div className="w-full md:w-2/3 h-80 drop-shadow-[0_0_12px_rgba(34,211,238,0.2)]">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="72%" data={skillData}>
                                {/* Telaraña en forma de pentágono */}
                                <PolarGrid gridType="polygon" stroke="#334155" strokeWidth={1.2} />

                                {/* Nombres de las 5 puntas */}
                                <PolarAngleAxis dataKey="subject" tick={<CustomTick />} />

                                {/* Escala oculta de 0 a 100 */}
                                <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />

                                {/* Capa 1: Nivel Objetivo (Amarillo) */}
                                <Radar
                                    name="Nivel Objetivo"
                                    dataKey="objetivo"
                                    stroke="#eab308"
                                    strokeWidth={2}
                                    fill="#eab308"
                                    fillOpacity={0.12}
                                />

                                {/* Capa 2: Nivel Promedio (Blanco/Gris) */}
                                <Radar
                                    name="Nivel Promedio"
                                    dataKey="promedio"
                                    stroke="#e2e8f0"
                                    strokeWidth={1.5}
                                    fill="#ffffff"
                                    fillOpacity={0.15}
                                />

                                {/* Capa 3: Nivel Actual (Cian Neón) */}
                                <Radar
                                    name="Nivel Actual"
                                    dataKey="actual"
                                    stroke="#22d3ee"
                                    strokeWidth={2.5}
                                    fill="#22d3ee"
                                    fillOpacity={0.28}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Leyenda lateral estilo RPG */}
                    <div className="w-full md:w-1/3 flex flex-col gap-3 mt-4 md:mt-0 pl-2">
                        <div className="flex items-center gap-2.5">
                            <span className="w-4 h-4 bg-cyan-400 rounded-xs shadow-[0_0_8px_#22d3ee]"></span>
                            <span className="text-xs font-bold tracking-wide uppercase">Nivel Actual</span>
                        </div>
                        <div className="flex items-center gap-2.5">
                            <span className="w-4 h-4 bg-slate-200 rounded-xs"></span>
                            <span className="text-xs font-bold tracking-wide uppercase">Nivel Promedio</span>
                        </div>
                        <div className="flex items-start gap-2.5">
                            <span className="w-4 h-4 bg-yellow-500 rounded-xs mt-0.5 shadow-[0_0_8px_#eab308]"></span>
                            <div className="flex flex-col">
                                <span className="text-xs font-bold tracking-wide uppercase">Nivel Objetivo</span>
                                <span className="text-[10px] text-slate-400 italic">(Target, Strengthening)</span>
                            </div>
                        </div>
                    </div>
                    </div>
        </section>
    )
}