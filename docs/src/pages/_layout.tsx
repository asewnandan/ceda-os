import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { getPressContext } from "fumapress";

export default async function Layout({ children }: { children: ReactNode }) {
  const layoutProps = await getPressContext().getLayoutProps({});
  const { nav, links, githubUrl, i18n, themeSwitch, searchToggle } = layoutProps;

  return <HomeLayout {...{ nav, links, githubUrl, i18n, themeSwitch, searchToggle }}>{children}</HomeLayout>;
}
