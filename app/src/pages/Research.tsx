import "../styles/Research.css";
import trial from "../assets/trials-design.png";

const Research = () => {
  return (
    <div id="Underrepresentation-info">
      <div id="top-statistic">
        <div id="top-border"></div>
        <h1 id="did-you-know">Did you know?</h1>
        <h2 id="underrepresentation-statistic">
          Women make up only <span className="red">29%</span> to
          <span className="red"> 34%</span> of participants in Phase I drug
          testing.
        </h2>
      </div>
      <section id="problem">
        <div id="problem-container">
          <div id="problem-text">
            <h3 id="problem-h3">The Problem</h3>
            <hr id="problem-line" />
            <p className="problem-p">
              Women are consistently under-represented in medical research,
              which becomes an issue when results of male-dominated testing are
              generalized, ignoring important biological sex differences.
            </p>
            <p className="problem-p">
              Particularly with clinical drug testing, males and females exhibit
              differences in pharmacokinetics, or the way their bodies absorb,
              distribute, metabolize, and excrete drugs.
              <a
                id="problem-link"
                href="https://bsd.biomedcentral.com/articles/10.1186/s13293-020-00308-5"
                target="_blank"
              >
                96% of drugs that cause elevated pharmacokinetics in women
              </a>{" "}
              are more likely to cause of adverse drug reactions (ADRs) in women
              than men, and women experience ADRs twice as often as men. Yet,
              current practice is to prescribe similar doses regardless of sex,
              based on the results of biased research studies.
            </p>
          </div>
          <img src={trial}></img>
        </div>
      </section>
      <section id="causes">
        <div className="container px-4 py-5 causes-container" id="featured-3">
          <h2 id="causes-h2" className="pb-2">
            Causes of Female Research Participant Under-Representation
          </h2>
          <hr id="causes-line" />
          <div
            id="causes-columns"
            className="row g-4 py-5 row-cols-1 row-cols-lg-3"
          >
            <div className="feature-col">
              <h3 id="causes-h3-1" className="fs-2 text-body-emphasis">
                Ethics of “Anticipatory Motherhood”
              </h3>
              <p className="cause-p">
                Historically, researchers have considered it unethical to test
                experimental drugs on women of “childbearing potential” due to
                potential risks it poses to future pregnancies. Because Phase 1
                volunteers must be healthy, women of healthy age overlap heavily
                with women of reproductive age.
              </p>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9017784/"
                target="_blank"
                className="icon-link"
              >
                See reference
                <svg className="bi">
                  <use xlinkHref="#chevron-right"></use>
                </svg>
              </a>
            </div>
            <div className="feature-col">
              <h3 id="causes-h3-2" className="fs-2 text-body-emphasis">
                Vulnerability in Male-Dominated Spaces
              </h3>
              <p className="cause-p">
                Women who participate in clinical trials have reported feeling
                uncomfortable or unsafe when staying in a facility where men
                radically outnumber women. There have been cases where male
                convicted rapists and felons have been allowed to participate,
                staying in rooms unseparated from women.
              </p>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7050919/"
                target="_blank"
                className="icon-link"
              >
                See reference
                <svg className="bi">
                  <use xlinkHref="#chevron-right"></use>
                </svg>
              </a>
            </div>
            <div className="feature-col">
              <h3 id="causes-h3-3" className="fs-2 text-body-emphasis">
                Discouragement From Male Partners
              </h3>
              <p className="cause-p">
                Due to existing stigmas, men may discourage their female
                significant others from participating in clinical drug research
                or otherwise pressure them to leave. Researchers spoke to one
                woman named Penny, who said that her husband explicitly told her
                to stop enrolling in trials.
              </p>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7050919/"
                target="_blank"
                className="icon-link"
              >
                See reference
                <svg className="bi">
                  <use xlinkHref="#chevron-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
