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
        <p className="case-subtitle">Two questions about failure, before there is code.</p>
      </header>

      <div className="prose">
        <p>
          Two questions start this work, and neither is an engineering question: why
          well-resourced Web3 efforts fail, and how influence, secrets, and compromise
          move through a network of peers. The Romeo–Juliet framework and UNISS are
          attempts to specify those failure modes before there is code — the method
          applied before the projects can apply it.
        </p>
        <p>
          UNISS did not begin as a simulation. It grew out of a live security dispute and
          an evidence-archiving effort: first the archive, then the question of how
          influence, secrecy, and compromise move through a network. The simulator is the
          attempt to model that system rather than narrate it.
        </p>
      </div>

      <Section number="1" title="UNISS / Ingenesist" id="uniss">
        <div className="prose">
          <p>
            UNISS studies containment before a system exists: what moves, who can see it,
            and where a boundary has to sit. The simulator models how influence, secrets,
            and layered compromise move through networked communities. The series extends
            through ESN, GX, GX-SD, and Ingenesist scenarios, including the
            Darkweave-Ingenesist endowment model.
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

      <Section number="2" title="Romeo–Juliet framework" id="romeo-juliet">
        <div className="prose">
          <p>
            Romeo–Juliet is failure-mode specification before architecture: why capital,
            hype, and Sybil attacks can stop a sound project from finishing. The
            framework draws on Peter Thiel, Diego Gambetta, and Nitzan &amp; Bichler’s{' '}
            <em>Capital as Power</em>.
          </p>
          <p>
            The framework grew out of the CoEngineers experience (2017–2019), where I was
            an early investor; it is the attempt to specify that failure mode before the
            next project.
          </p>
          <p>
            <a href={SITE.links.romeoArchive}>Romeo–Juliet Framework archive</a>{' '}
            (ArDrive; videos and three papers).{' '}
            <a href={SITE.links.romeoPlaylist}>YouTube playlist</a>.
          </p>
        </div>
        <PostList posts={romeoPosts} />
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
