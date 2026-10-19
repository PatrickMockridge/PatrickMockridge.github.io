import { ARCHIVE_URL, romeoPosts, unissPosts } from '../data/research'
import { SITE } from '../data/site'
import { Section } from '../components/Section'

function PostList({ posts }: { posts: { title: string; date: string; href: string }[] }) {
  return (
    <ul className="link-list">
      {posts.map((post) => (
        <li key={post.href}>
          <a href={post.href} target="_blank" rel="noopener noreferrer">{post.title}</a> ·{' '}
          <time dateTime={post.date}>{post.date}</time>
        </li>
      ))}
    </ul>
  )
}

export function ResearchTab() {
  return (
    <>
      <header className="title-block">
        <p className="descriptor">Research</p>
        <h1 className="case-title">Research &amp; Writing</h1>
        <p className="case-subtitle">
          A critical risk-analysis framework, applied through simulation and public
          data.
        </p>
      </header>

      <div className="prose">
        <p>
          Two questions start this work, and neither is an engineering question: why
          coordinated systems fail under information asymmetry, and how influence,
          secrets, and compromise move through a network of peers. The Romeo–Juliet
          Framework is the general risk-analysis layer; UNISS is the simulation layer.
        </p>
        <p>
          UNISS did not begin as a simulation. It grew out of a live security dispute and
          an evidence-archiving effort: first the archive, then the question of how
          influence, secrecy, and compromise move through a network. The simulator models
          that system rather than narrating it.
        </p>
      </div>

      <Section number="1" title="Romeo–Juliet framework" id="romeo-juliet">
        <div className="prose">
          <p>
            The Romeo–Juliet Framework is a critical risk-analysis framework for any
            coordinated system operating under information asymmetry: AI, blockchains,
            politics, business, engineering. It maps the “deathly embrace” between
            problem-solvers and the capital order onto four squares — preparation
            (green), action (yellow), access (red), and status (blue) — and models the
            actors and sequestration channels that determine whether a project can move
            from zero to one.
          </p>
          <p>
            The actors — Oscar, Mallory, Eve, Sybil, Olivia, and Walter — and the three
            sequestration channels (diagonal, left, right) describe how value is
            captured, how access is blocked, and where a project can move. The framework
            draws on Schumpeter, Kondratiev, Henry George, Gambetta, Nitzan and Bichler,
            Thiel, Nash, and the ρ-calculus/process-calculus tradition.
          </p>
          <p>
            It is a critical risk-analysis tool first: it reads the failure modes of a
            system before the architecture is fixed, not after the fact. The paper
            applies the same structure to centralised AI, state power, intelligence
            agencies, rent collection, voting, law, engineering, and business. The
            CoEngineers experience (2017–2019), where I was an early investor, was one
            origin of the framework, not its scope.
          </p>
          <p>
            <a href={SITE.links.romeoArchive} target="_blank" rel="noopener noreferrer">Romeo–Juliet Framework archive</a>{' '}
            (ArDrive; videos and three papers).{' '}
            <a href={SITE.links.romeoPlaylist} target="_blank" rel="noopener noreferrer">YouTube playlist</a>.
          </p>
        </div>
        <PostList posts={romeoPosts} />
      </Section>

      <Section number="2" title="UNISS / Ingenesist" id="uniss">
        <div className="prose">
          <p>
            UNISS is the simulation layer: containment before a system exists — what
            moves, who can see it, and where a boundary has to sit. It models how
            influence, secrets, and layered compromise move through networked
            communities. The series extends through ESN, GX, GX-SD, and Ingenesist
            scenarios, including the Darkweave-Ingenesist endowment model.
          </p>
          <p>
            The Ingenesist archive preserves Dan Roble’s presentations and papers
            published with NAIC, ASME, ASCE, NSPE, and others. The “blockchain for
            engineers” line is the lineage for UNISS.{' '}
            <a href={SITE.links.ingenesistArchive} target="_blank" rel="noopener noreferrer">Ingenesist archive</a>.
          </p>
        </div>
        <PostList posts={unissPosts} />
      </Section>

      <Section number="3" title="NFL / Big Data Bowl 2027" id="nfl-big-data-bowl">
        <div className="prose">
          <p>
            The framework’s most recent extension is an entry to the 2027 NFL Big Data
            Bowl. It works from the 2023–2025 draft classes — 510 players, 543
            player-seasons with movement and performance, 233 with a next season, and a
            909-player 2025 cap ledger — and asks what the 10 Hz Combine signal
            measures and whether the people who allocate snaps and dollars use it.
          </p>
          <p>
            The pure finding is a pressure signal. For interior defensive linemen, a
            burst of max speed and first-step acceleration predicts pressure (+0.354 SD
            per SD; 95% CI 0.143 to 0.565; n = 64) and sacks (+0.317; 0.083 to 0.550; n
            = 63). The 40-yard dash and 10-yard split do not carry the pressure signal
            (joint p = 0.998; out-of-sample R² −0.113 versus +0.178 for the burst). The
            signal is position-specific: the movement composite predicts defensive-line
            performance (+0.734; 0.461 to 1.007; n = 175), is marginal for receivers
            (+0.366; p = 0.084), and is not detectable for offensive linemen (+0.058) or
            tight ends (+0.093); the pooled +0.299 is a defensive-line result. The
            defensive-line outcome is get-off, so that part is also a validity check.
          </p>
          <p>
            The cap pays for performance: on the full 2025 ledger, one SD of measured
            performance is associated with +0.328 log points of cap charge (95% CI
            0.264 to 0.392; n = 909), and +0.143 with playing time added. The depth
            chart does not: next-season snaps follow current snaps (+0.606) and draft
            position (+0.785), while performance is −0.011 (95% CI −0.119 to 0.097; n =
            233) — absence of evidence, not proof of zero. Week to week the same pattern
            holds (+0.753 for prior snaps; −0.006 for performance). The allocation gap
            is descriptive: late picks and undrafted players perform 0.59 SD above their
            role and early picks 0.92 below, with about nine parts role to one part
            performance. A two-agent model calibrated to the role and pay equations puts
            the coach’s performance weight at −0.13 and the GM’s at +0.14; aligning them
            raises the top-performance group’s role by 0.32 SD — model-reproduced, not
            identified.
          </p>
          <p>
            The RJF/Yellow Square lens is offered as a perspective, not as confirmation.
            The preregistered transition-zone test returned a wide null (Yellow +0.176;
            p = 0.077; n = 30; 2024–25 +0.144; p = 0.18; n = 23), alongside null Möbius
            and pond increments. The entry reports it as fallback evidence that rules
            out only large effects. The claims are observational, not causal; the cap
            and Combine halves use different performance measures; the offensive-line
            and tight-end nulls may be attenuation; defensive-back performance is
            excluded as unidentifiable; and the monthly review is a process choice, not
            a tested cadence.
          </p>
        </div>
        <ul className="link-list">
          <li>
            <a
              href={SITE.links.nflBigDataBowl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository: nfl-big-data-bowl-2027
            </a>
          </li>
          <li>
            <a
              href={SITE.links.nflBigDataBowlWriteup}
              target="_blank"
              rel="noopener noreferrer"
            >
              Writeup
            </a>
          </li>
          <li>
            <a
              href={SITE.links.nflBigDataBowlNotebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaggle notebook
            </a>
          </li>
          <li>
            <a
              href={SITE.links.nflBigDataBowlCompetition}
              target="_blank"
              rel="noopener noreferrer"
            >
              Kaggle competition
            </a>
          </li>
        </ul>
      </Section>

      <Section number="4" title="Archive" id="archive">
        <div className="prose">
          <p>
            The longer record is in the archive at{' '}
            <a href={ARCHIVE_URL} target="_blank" rel="noopener noreferrer">technologytruth.substack.com</a>.
          </p>
        </div>
      </Section>
    </>
  )
}
