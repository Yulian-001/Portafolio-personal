import GraficSkill from "./GraficSkill.jsx";



export default function CardSkill({ skillData }) {

    if (!skillData) return null;

    return (
        <section>
            <header>
                <img src={`skillData.header.logo`} alt="" />
                <div>
                    <h3></h3>
                    <h1></h1>
                </div>
                <div></div>
            </header>


            <body>
                <div>
                    <GraficSkill skillData={skillData.grafic} />

                </div>
                <div>
                    <h3></h3>
                    <div></div>
                    <h3></h3>
                    <div></div>
                </div>
            </body>



            <footer>
                <div>
                    <h1>descripciones</h1>
                </div>
            </footer>
        </section>
    )
}