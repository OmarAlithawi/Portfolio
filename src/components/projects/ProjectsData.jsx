import boardProject from "../../assets/img/boardProject.svg"
import movieProject from "../../assets/img/movieProject.svg"
import capstoneProject from "../../assets/img/capstoneProject.svg"



export const items = [
    {
        name: "Six thinking hats",
        description: t("board_project_description"),
        img: boardProject,
        technologies:[
            "React",
            "Firebase",
            "Material ui"
        ]
    },
    {
        name: "Moive app",
        description: "Is a website which allows you to search for any movie and actor or actresses.",
        img: movieProject,

        technologies:[
            "HTML",
            "CSS",
            "Javascript"
        ]
    },

    {
        name: "Capstone Project",
        description: "Hello World!",
        img: capstoneProject,
        technologies:[
            "React",
            "Firebase",
            "Material ui"
        ]
    }
]