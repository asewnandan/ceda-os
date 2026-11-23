import { Card, Cards } from "fumadocs-ui/components/card";
import Link from "fumadocs-core/link";
import { BookOpenIcon, HammerIcon, RocketIcon } from "lucide-react";
import { AgentInstructions } from "../components/agent-instructions";

export default function Page() {
  return (
    <main>
      <section className="aurora relative isolate overflow-hidden border-b">
        <div className="mx-auto w-full max-w-3xl px-4 py-24 text-center">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">CEDA OS</h1>
          <p className="mt-5 text-lg text-fd-muted-foreground">
            Eén installatie die je van idee naar product brengt. Een orchestrator-agent doet de rest.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/framework/quickstart"
              className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground"
            >
              Quickstart
            </Link>
            <Link href="/framework" className="rounded-lg border bg-fd-background/60 px-5 py-2.5 text-sm font-medium backdrop-blur">
              Introductie
            </Link>
          </div>
        </div>
      </section>
      <div className="mx-auto w-full max-w-3xl px-4 py-12">
        <AgentInstructions />
        <Cards>
          <Card icon={<RocketIcon className="text-[#3D68EC]" />} href="/framework/quickstart" title="Quickstart">
            Installeer CEDA OS en gebruik direct je eerste skill.
          </Card>
          <Card icon={<BookOpenIcon className="text-[#DD784B]" />} href="/framework" title="Introductie">
            Hoe het werkt en wat erin zit.
          </Card>
          <Card icon={<HammerIcon className="text-[#00AF81]" />} href="/wip" title="WIP">
            Building in public: hoe en waarom we CEDA OS bouwen.
          </Card>
        </Cards>
      </div>
    </main>
  );
}
