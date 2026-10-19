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
            Bowl. Using the 2023–2025 draft classes, it asks whether the 10 Hz Combine
            signal measures something real — and whether the people who allocate
            playing time and cap dollars act on it.
          </p>
          <p>
            The signal is real, but narrower than the usual story. A burst of speed and
            acceleration predicts interior pressure and sacks; the 40-yard dash and
            10-yard split do not. It is a defensive-line result: strong there, marginal
            at receiver, undetectable on the offensive line and at tight end.
          </p>
          <p>
            The allocation gap is the point. The cap pays for performance; the depth
            chart does not. Next season’s snaps follow this season’s snaps and draft
            position, not performance. Late picks and undrafted players perform above
            their playing time, early picks below it. A two-agent model calibrated to
            the observed playing-time and pay rules shows the same wedge — the coach’s
            performance weight is marginal, the GM’s positive — and aligning them would
            move playing time toward the top performers. That is a model result, not an
            identified cause.
          </p>
          <p>
            The RJF/Yellow Square test is offered as a perspective, not confirmation:
            the preregistered transition-zone result did not find a detectable effect. The
            claims are observational, the two halves use different performance
            measures, and defensive backs are excluded as unidentifiable.
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
