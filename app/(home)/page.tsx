import Link from 'next/link';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { BookOpen, MessagesSquare, Server, ShieldCheck, Tag } from 'lucide-react';
import { OciWordmark } from '@/components/logo';
import { ociVersion, productRepo, productSite } from '@/lib/shared';

const sections = [
  {
    title: 'Getting started',
    href: '/docs/getting-started',
    icon: <BookOpen />,
    description: 'What Open Chat Interface is, the ideas it is built on, a quick tour and a local install.',
  },
  {
    title: 'Using OCI',
    href: '/docs/using',
    icon: <MessagesSquare />,
    description:
      'Chatting with models, conversations and projects, artifacts, tools and connectors, memory, sharing, your data and settings.',
  },
  {
    title: 'Administration',
    href: '/docs/administration',
    icon: <ShieldCheck />,
    description:
      'The admin dashboard: setup, models, roles and access, people and sign-in, budgets, retention, compliance, backups, audit and branding.',
  },
  {
    title: 'Self-hosting',
    href: '/docs/self-hosting',
    icon: <Server />,
    description:
      'Requirements, configuration, Docker Compose, the reverse proxy, upgrades, backups and restore, monitoring and security.',
  },
  {
    title: 'Releases',
    href: '/docs/releases',
    icon: <Tag />,
    description: `What changed in each release and how to upgrade. Latest: ${ociVersion}.`,
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 md:py-16">
      <div className="flex flex-col gap-4">
        <p className="inline-flex items-center gap-2 text-sm font-medium text-fd-muted-foreground">
          <OciWordmark /> {ociVersion} documentation
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          AI chat for your whole institution, on your terms.
        </h1>
        <p className="max-w-2xl text-lg text-fd-muted-foreground">
          Open Chat Interface (OCI) is a self-hosted, multi-model chat application. People sign
          in with your identity provider and use the models you approve; administrators decide who
          gets what, how much they may use and how long it is kept. These docs are for the people
          who use it, the administrators who run it, and the operators who host it.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/docs/getting-started"
            className="rounded-control bg-brand-primary px-4 py-2 text-sm font-medium text-brand-primary-contrast shadow-brand-1 hover:bg-brand-primary-hover"
          >
            Get started
          </Link>
          <Link
            href="/docs/getting-started/try-it-locally"
            className="rounded-control border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium hover:bg-fd-accent"
          >
            Try it locally
          </Link>
          <a
            href={productRepo}
            className="rounded-control border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium hover:bg-fd-accent"
          >
            Source on GitHub
          </a>
        </div>
      </div>

      <h2 className="sr-only">Sections</h2>
      <Cards className="mt-12">
        {sections.map((s) => (
          <Card key={s.href} title={s.title} href={s.href} icon={s.icon}>
            {s.description}
          </Card>
        ))}
      </Cards>

      <p className="mt-12 text-sm text-fd-muted-foreground">
        OCI is pre-1.0 and MIT licensed. These docs describe {ociVersion}. More about the project
        is on{' '}
        <a className="text-brand-link underline" href={productSite}>
          its website
        </a>
        ; the engineering notes stay in the{' '}
        <a className="text-brand-link underline" href={productRepo}>
          repository
        </a>
        .
      </p>
    </div>
  );
}
