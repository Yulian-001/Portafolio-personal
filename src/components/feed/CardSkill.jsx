

export default function CardSkill({ skillData }) {

    if (!skillData) return null;

    return (
        <section className="mt-6 mx-6 px-6 py-8 bg-blue-800 text-white">
            <header className="flex felx-row justify-between ">

                <div>

                    <h3 className=" ">{skillData.header.title} </h3>
                    <h1>{skillData.header.name} </h1>
                </div>
                <div>
                    <h4>{skillData.header.lvl} </h4>
                </div>
            </header>


            <main className="flex mt-9 justify-between">
                <div>
                    <h2>GRAFICA</h2>
                </div>
                <div>
                    <ol>
                        <li>{skillData.list.blue} </li>
                        <li>{skillData.list.white} </li>
                        <li>{skillData.list.green} </li>
                    </ol>
                </div>
            </main>


            <footer className="mt-6">
                <div className="flex">

                    {skillData.CardSkill.infoSkill && skillData.CardSkill.infoSkill.length > 0 && (
                        <div>
                            <h2>{skillData.CardSkill.titleSkill} </h2>
                            <ul className="flex flex-col mt-6 gap-3">
                                {skillData.CardSkill.infoSkill.map((item) => (
                                    <li key={item.id} >
                                        <ol className="flex justify-start gap-3">
                                            <img src={item.logo} alt=""
                                                className="h-11 w-11"
                                            />
                                            <div className="felx">
                                                <h3>{item.title} </h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </ol>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {skillData.passiveSkill.infoSkill && skillData.passiveSkill.infoSkill.length > 0 && (
                        <div>
                            <h2>{skillData.passiveSkill.titleSkill} </h2>
                            <ul className="flex flex-col mt-6 gap-3">
                                {skillData.passiveSkill.infoSkill.map((item) => (
                                    <li key={item.id} >
                                        <ol className="flex justify-start gap-3">
                                            <img src={item.logo} alt=""
                                                className="h-11 w-11"
                                            />
                                            <div className="felx">
                                                <h3>{item.title} </h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </ol>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {skillData.inventaryTools.tools && skillData.inventaryTools.tools.length > 0 && (
                        <div>
                            <h2>{skillData.inventaryTools.titleSkill} </h2>
                            <ul className="flex  mt-6 gap-3">
                                {skillData.inventaryTools.tools.map((item) => (
                                    <li key={item.id} >
                                        <ol className="flex justify-evenly gap-3 ">
                                            <img src={item.logo} alt=""
                                                className="h-11 w-11"
                                            />
                                            <div className="felx">
                                                <h3>{item.title} </h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </ol>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
            </footer>
        </section>
    )
}