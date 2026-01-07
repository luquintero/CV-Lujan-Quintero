import { useState } from 'react';
import Work from './Work';
import ProgressBar from './ProgressBar';
import SkillItem from './SkillItem';

export default function RightPanel({ content }) {
  const [activeSection, setActiveSection] = useState('work');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');

  // ---- FILTERED STUDIES ----
  const filteredStudies =
    activeCategory === 'all'
      ? content.studies.list
      : content.studies.list.filter(
          item => item.category === activeCategory
        );

    // ---- FILTERED SKILLS ----
  const filteredSkills =
    activeCategory === 'all'
      ? content.skills.list
      : content.skills.list.filter(
          item => item.category === activeSkillCategory
        );
  

  return (
    <section className="right-panel">
      {/* MENU */}
      <nav className="right-panel-menu">
        {content.menu.items.map(item => (
          <button
            key={item.key}
            className={activeSection === item.key ? 'active' : ''}
            onClick={() => {
              setActiveSection(item.key);
              setActiveCategory('all'); // reset filter when changing section
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* CONTENT */}
      <div className="right-panel-content">
        {/* WORK */}
        {activeSection === 'work' && (
          <Work
            title={content.work.title}
            jobs={content.work.jobs}
          />
        )}

        {/* EDUCATION */}
        {activeSection === 'education' && (
          <article className="education">
            <h3>{content.education.title}</h3>

            <div className="education-item">
              <h4 className="degree">
                ➤ {content.education.marketing.degree}
              </h4>
              <p className="school">{content.education.marketing.school}</p>
              <p className="education-desc">
                {content.education.marketing.years}
              </p>
            </div>

            <div className="divider" />

            <div className="education-item">
              <h4 className="degree">
                ➤ {content.education.bac.degree}
              </h4>
              <p className="school">{content.education.bac.school}</p>
              <p className="education-desc">
                {content.education.bac.years}
              </p>
            </div>
          </article>
        )}

        {/* STUDIES / CERTIFICATIONS */}
        {activeSection === 'studies' && (
          <article className="studies">
            <h3>{content.studies.title}</h3>

            {/* FILTERS */}
            <div className="studies-filters">
              {content.studies.categories.map(cat => (
                <button
                  key={cat.key}
                  className={activeCategory === cat.key ? 'active' : ''}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* LIST */}
            {filteredStudies.map((study, i) => (
              <div key={i} className="study-item">
                <h4 className="degree">➤ {study.name}</h4>
                <p className="school">{study.place}</p>
                <p className="education-desc">{study.description}</p>
                <div className="divider" />
              </div>
            ))}
          </article>
        )}

        {/* LANGUAGES */}
        {activeSection === 'languages' && (
          <article className="languages">
            <h3>{content.languages.title}</h3>

            <div className="language-item">
              <p className="language-name">{content.languages.spanish}</p>
              <div className="language-bar-row">
                <ProgressBar percentage={100} />
                <span className="language-level">
                  {content.languages.levels.native}
                </span>
              </div>
            </div>

            <div className="language-item">
              <p className="language-name">{content.languages.english}</p>
              <div className="language-bar-row">
                <ProgressBar percentage={90} />
                <span className="language-level">
                  {content.languages.levels.fluent}
                </span>
              </div>
            </div>

            <div className="language-item">
              <p className="language-name">{content.languages.french}</p>
              <div className="language-bar-row">
                <ProgressBar percentage={20} />
                <span className="language-level">
                  {content.languages.levels.beginner}
                </span>
              </div>
            </div>
          </article>
        )}

        {/* SKILLS */}
        {activeSection === 'skills' && (
          <article className="skills">
            <h3>{content.skills.title}</h3>

            {/* FILTERS */}
            <div className="studies-filters">
              {content.skills.categories.map(cat => (
                <button
                  key={cat.key}
                  className={activeSkillCategory === cat.key ? 'active' : ''}
                  onClick={() => setActiveSkillCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="skill-list">
      {content.skills.list
        .filter(skill =>
  activeSkillCategory === 'all'
    ? true
    : skill.categories?.includes(activeSkillCategory)
)
        .map((skill, i) => (
          <SkillItem
  key={`${skill.name}-${activeCategory}`}
  {...skill}
/>
        ))}
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
