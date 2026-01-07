import { useState, useRef, useEffect } from 'react';

export default function Work({ jobs, title }) {
  const [openIndex, setOpenIndex] = useState(0);

  const contentRefs = useRef([]);
  const [contentHeights, setContentHeights] = useState([]);

  useEffect(() => {
    const heights = contentRefs.current.map(el => {
      if (!el) return 0;

      const inner = el.querySelector('.job-content-inner');
      return inner ? inner.scrollHeight : 0;
    });

    setContentHeights(heights);
  }, [jobs, openIndex]);


  const toggleJob = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <article className="work">
      <h3>
        {title} 
      </h3>

      {jobs.map((job, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div className={`job ${isOpen ? 'open' : ''}`} key={idx}>
            <button
              className={`job-header ${isOpen ? 'open' : ''}`}
              onClick={() => toggleJob(idx)}
              aria-expanded={isOpen}
            >
              <span className="chevron">{isOpen ? '−' : '+'}</span>

             <div className="job-title-row">
                <span className="job-role">{job.role}</span>
                <span className="divider-job">|</span>
                <em className="job-company">{job.company}</em>
                <span className="period">{job.period}</span>
              </div>

            </button>
            <div className="divider-3" />

            <div
              ref={el => (contentRefs.current[idx] = el)}
              className={`job-content ${isOpen ? 'open' : ''}`}
              style={{
                maxHeight: isOpen ? contentHeights[idx] : 0,
              }}
            >
              <div className="job-content-inner">
                {job.timeline ? (
                  <div className="timeline">
                    {job.timeline.map((item, i) => (
                      <div className="timeline-item" key={i}>
                        <span className="timeline-node" />

                        <div className="timeline-content">
                          <h5>{item.role}</h5>
                          <span className="timeline-period">{item.period}</span>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>{job.desc}</p>
                )}

              </div>
            </div>

          </div>
        );
      })}
    </article>
  );
}

