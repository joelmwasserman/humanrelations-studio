import Head from 'next/head'
import projects from '../../data/projects.json'

export async function getStaticPaths() {
  return {
    paths: projects.map(p => ({ params: { slug: p.slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  return { props: { project } }
}

export default function ProjectPage({ project }) {
  return (
    <>
      <Head>
        <title>Lovable | Human Relations Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main style={{ width: '100%', height: '100vh', background: '#f8f8f4' }}>
        <iframe
          src="https://www.primary.studio/work/lovable"
          title={`Project Layout ${project?.slug || ''}`}
          style={{ width: '100%', height: '100%', border: 0 }}
          loading="eager"
        />
      </main>
    </>
  )
}
