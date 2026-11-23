"use client";

import { useState } from "react";
import { BotIcon, CheckIcon, CopyIcon } from "lucide-react";

const instructions = `Gebruik de CEDA OS documentatie als bron van waarheid.
Lees https://asewnandan.github.io/ceda-os/llms.txt voor een overzicht van alle pagina's als Markdown.`;

export function AgentInstructions() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(instructions);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="not-prose my-6 flex items-start gap-3 rounded-xl border bg-fd-card p-4">
      <BotIcon className="mt-0.5 size-5 shrink-0 text-fd-primary" />
      <div className="flex-1 text-sm">
        <p className="font-semibold">Gebruik je een AI-agent?</p>
        <p className="mt-1 text-fd-muted-foreground">
          Kopieer de instructies in je agent (Claude Code, Cursor, Codex, ...). Alle pagina's staan ook als Markdown in{" "}
          <a href="/ceda-os/llms.txt" className="underline underline-offset-2">
            llms.txt
          </a>
          .
        </p>
        <button
          type="button"
          onClick={copy}
          className="mt-3 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-fd-accent"
        >
          {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
          {copied ? "Gekopieerd" : "Kopieer instructies"}
        </button>
      </div>
    </div>
  );
}
