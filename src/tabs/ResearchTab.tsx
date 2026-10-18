import { ARCHIVE_URL, romeoPosts, unissPosts } from '../data/research'
import { SITE } from '../data/site'
import { Section } from '../components/Section'

function PostList({ posts }: { posts: { title: string; date: string; href: string }[] }) {
  return (
    <ul className="link-list">
      {posts.map((post) => (
        <li key={post.href}>
          <a href={post.href}>{post.title}</a> ·{' '}
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
          A critical risk-analysis framework, applied through simulation.
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
            <a href={SITE.links.romeoArchive}>Romeo–Juliet Framework archive</a>{' '}
            (ArDrive; videos and three papers).{' '}
            <a href={SITE.links.romeoPlaylist}>YouTube playlist</a>.
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
            <a href={SITE.links.ingenesistArchive}>Ingenesist archive</a>.
          </p>
        </div>
        <PostList posts={unissPosts} />
      </Section>

      <Section number="3" title="Archive" id="archive">
        <div className="prose">
          <p>
            The longer record is in the archive at{' '}
            <a href={ARCHIVE_URL}>technologytruth.substack.com</a>.
          </p>
        </div>
      </Section>
    </>
  )
}
