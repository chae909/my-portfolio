// SkillCard.jsx
const SkillCard = ({ title, children }) => {
    return (
        <div className="skill-card">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
            <div className="space-y-2">{children}</div>
        </div>
    );
};

export default SkillCard;