import { createPress } from "fumapress";
import { metaSchema, pageSchema } from "fumapress/schema";
import { defineDocs } from "fumadocs-mdx/macro";
import { LayersIcon } from "lucide-react";
import { lucideIconsPlugin } from "fumadocs-core/source/plugins/lucide-icons";

const docs = defineDocs({
  dir: "content",
  docs: {
    async: true,
    schema: pageSchema,
    lastModified: true,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default createPress(docs.toFumadocsSource(), {
  loaderPlugins: [lucideIconsPlugin()],
}).config({
  site: {
    name: "CEDA OS",
    baseUrl: "https://asewnandan.github.io/ceda-os/",
    git: { user: "asewnandan", repo: "ceda-os", branch: "main" },
  },
  ui: {
    renderPage: ({ renderDefault }) => renderDefault({ layout: "notebook" }),
    layoutProps: {
      nav: {
        title: (
          <>
            <span className="grid size-6 place-items-center rounded-md bg-fd-primary text-fd-primary-foreground">
              <LayersIcon className="size-3.5" />
            </span>
            CEDA OS
          </>
        ),
        url: "/framework",
      },
    },
  },
  head: [
    { tag: "link", attrs: { rel: "preconnect", href: "https://fonts.googleapis.com" } },
    { tag: "link", attrs: { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" } },
    {
      tag: "link",
      attrs: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:ital,wght@0,100..900;1,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap",
      },
    },
  ],
});
