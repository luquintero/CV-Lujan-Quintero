import { useState } from "react";

export default function LeftPanel({ content, lang }) {
  const [open, setOpen] = useState(false);

  const handleDownload = () => {
    const file =
      lang === "es"
        ? "/cv/CV_Lujan_Quintero_ES.pdf"
        : "/cv/CV_Lujan_Quintero_EN.pdf";

    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    {/* Overlay blur */}
    {open && (
      <div
        className="screen-overlay"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

    )}
      {/* Toggle floating button (mobile/tablet only) */}
      <button
        className={`left-panel-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle contact info"
      >
        {open ? "x" : "CONTACT"}
      </button>

      <aside className={`left-panel ${open ? "open" : "closed"}`}>
        <article className="contact">
          <h3>{content.contact.title}</h3>

          <ul className="contact-info">
            <li className="contact-item address">{content.contact.address}</li>
            <li className="contact-item birthday">{content.contact.birthday}</li>
            <li className="contact-item phone">{content.contact.phone}</li>

            <li className="contact-item email">
              <a href={`mailto:${content.contact.email}`}>
                {content.contact.email}
              </a>
            </li>

            <li className="contact-item linkedin">
              <a
                href={`https://${content.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                in/lujanquintero
              </a>
            </li>
          </ul>

          <button className="download-cv" onClick={handleDownload}>
            ⬇{" "}
            {lang === "es"
              ? "Descargar CV (PDF)"
              : "Download CV (PDF)"}
          </button>
        </article>
      </aside>
    </>
  );
}

