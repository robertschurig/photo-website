export const Contact = () => {
  const email = 'mail@robertschurig.de';

  return (
    <div>
      <h3 className="title is-3">Contact</h3>
      <p>
        Bei Fragen zu meiner fotografischen Arbeit, können Sie mich gerne per
        E-Mail kontaktieren.
      </p>
      <div className="columns">
        <div className="column is-1">
          <strong>E-Mail</strong>
        </div>
        <div className="column">
          <a href={`mailto:${email}`} rel="noopener noreferrer" target="_blank">
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};
