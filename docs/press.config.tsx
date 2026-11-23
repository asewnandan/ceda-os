import { createPress } from "fumapress";
import { metaSchema, pageSchema } from "fumapress/schema";
import { defineDocs } from "fumadocs-mdx/macro";
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
