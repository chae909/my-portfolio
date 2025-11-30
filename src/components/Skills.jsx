import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-32">
            <div className="container mx-auto px-4">
                <div className="glass-card p-8 md:p-12 rounded-2xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold brand-text mb-10 text-center tracking-tight animate-fade-in" style={{animationDelay: '0.05s'}}>Skills</h2>

                    <div className="max-w-4xl mx-auto space-y-10">
                        {/* Languages */}
                        <div>
                            <h5 className="text-lg font-bold mb-4 brand-text animate-fade-in" style={{animationDelay: '0.12s'}}>Languages</h5>
                            <div className="flex flex-wrap gap-2">
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white" alt="Python" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white" alt="Java" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3" />
                            </div>
                        </div>

                        {/* Frameworks / Libraries / DB */}
                        <div>
                            <h5 className="text-lg font-bold mb-4 brand-text">⚙️ Frameworks / Libraries / DB</h5>
                            <div className="flex flex-wrap gap-2">
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/Spring-6DB33F?style=flat&logo=spring&logoColor=white" alt="Spring" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/JPA-59666C?style=flat&logo=java&logoColor=white" alt="JPA" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/MyBatis-000000?style=flat&logo=data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDM1MiAzNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjM1MiIgaGVpZ2h0PSIzNTIiIGZpbGw9ImJsYWNrIi8+PHRleHQgeD0iNzUiIHk9IjIwMCIgZm9udC1zaXplPSIxMjBweCIgZmlsbD0id2hpdGUiPk1ZPC90ZXh0Pjwvc3ZnPg==" alt="MyBatis" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="MySQL" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/Oracle-F80000?style=flat&logo=oracle&logoColor=white" alt="Oracle" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/uv-222222?style=flat&logo=python&logoColor=white" alt="uv" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/LangChain-000000?style=flat&logo=langchain&logoColor=white" alt="LangChain" />
                            </div>
                        </div>

                        {/* Tools */}
                        <div>
                            <h5 className="text-lg font-bold mb-4 brand-text">🛠 Tools</h5>
                            <div className="flex flex-wrap gap-2">
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=visualstudiocode&logoColor=white" alt="VSCode" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/IntelliJ-000000?style=flat&logo=intellijidea&logoColor=white" alt="IntelliJ" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/Eclipse-2C2255?style=flat&logo=eclipseide&logoColor=white" alt="Eclipse" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/Colab-F9AB00?style=flat&logo=googlecolab&logoColor=white" alt="Colab" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white" alt="Figma" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
                                <img style={{height:'25px'}} src="https://img.shields.io/badge/Notion-000000?style=flat&logo=notion&logoColor=white" alt="Notion" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;