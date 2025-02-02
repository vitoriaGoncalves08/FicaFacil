import React from "react";
import Slider from "@material-ui/core/Slider";
import { Radio } from "../../Form";
import { RadioGroup } from "@material-ui/core";

const marks = [
    {
        value: 80,
        label: "P",
    },
    {
        value: 100,
        label: "M",
    },
    {
        value: 120,
        label: "G",
    },
];

const marksZoom = [
    {
        value: 80,
        label: "80%",
    },
    {
        value: 100,
        label: "100%",
    },
    {
        value: 120,
        label: "120%",
    },
];

export default function ConfigAdm() {
    const [isDark, setDark] = React.useState(1);

    const [isFont, setFont] = React.useState(100);

    const [isZoom, setZoom] = React.useState(100);

    const html = document.querySelector("html");

    React.useEffect(() => {
        let fonte = +localStorage.getItem("fonte") || 100;
        let zoom = +localStorage.getItem("zoom") || 100;
        let storage = localStorage.getItem("dark") || 1;
        setDark(storage === "true" ? 2 : 1);
        setFont(fonte);
        setZoom(zoom);
    }, []);

    React.useEffect(() => {
        if (isDark === 1) {
            html.classList.remove("dark");
            localStorage.setItem("dark", "false");
        }
        if (isDark === 2) {
            html.classList.add("dark");
            localStorage.setItem("dark", "true");
        }
    }, [isDark, html]);

    React.useEffect(() => {
        html.classList.remove("small");
        html.classList.remove("medium");
        html.classList.remove("large");
        if (isFont === 80) {
            html.classList.add("small");
        }
        if (isFont === 100) {
            html.classList.add("medium");
        }
        if (isFont === 120) {
            html.classList.add("large");
        }
        localStorage.setItem("fonte", isFont);
    }, [isFont, html]);

    React.useEffect(() => {
        html.classList.remove("zoom-large");
        html.classList.remove("zoom-medium");
        html.classList.remove("zoom-small");
        if (isZoom === 80) {
            html.classList.add("zoom-small");
        }
        if (isZoom === 100) {
            html.classList.add("zoom-medium");
        }
        if (isZoom === 120) {
            html.classList.add("zoom-large");
        }
        localStorage.setItem("zoom", isZoom);
    }, [isZoom, html]);

    return (
        <div>
            <div className="card">
                <div className="card__body">
                    <div className="meusDados">
                        <p>Aparência</p>
                    </div>
                    <p className="itensAparencia">Tema</p>
                    <div className="aparencia">
                        <RadioGroup
                            className="radioGrupo"
                            value={isDark}
                            onChange={() => {
                                setDark(isDark === 1 ? 2 : 1);
                            }}
                        >
                            <Radio value={1} className="aparencia__radio" label="Claro" />
                            <Radio value={2} className="aparencia__radio" label="Escuro" />
                        </RadioGroup>
                    </div>
                    <br />
                    <p className="itensAparencia">Visual</p>
                    <br></br>
                    <p className="fonte">Escala de fonte</p>
                    <div>
                        <Slider
                            onChange={(val, number) => {
                                if (number === 80) {
                                    setFont(80);
                                } else if (number === 100) {
                                    setFont(100);
                                } else {
                                    setFont(120);
                                }
                                console.log(number);
                            }}
                            step={20}
                            min={80}
                            max={120}
                            marks={marks}
                            value={isFont}
                            color="primary"
                        />
                        <br></br>
                        <br></br>
                        <p className="fonte">Zoom</p>
                        <Slider
                            onChange={(val, number) => {
                                if (number === 80) {
                                    setZoom(80);
                                } else if (number === 100) {
                                    setZoom(100);
                                } else {
                                    setZoom(120);
                                }
                                console.log(number);
                            }}
                            step={20}
                            min={80}
                            max={120}
                            value={isZoom}
                            marks={marksZoom}
                            color="primary"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
