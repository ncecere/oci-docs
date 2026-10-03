export const appName = 'Open Chat Interface docs';
export const docsRoute = '/docs';
export const siteUrl = 'https://docs.oci.bitop.dev';

/** The product's own website. */
export const productSite = 'https://oci.bitop.dev';

/** The docs' own repository: "Edit on GitHub" links point here. */
export const gitConfig = {
  user: 'ncecere',
  repo: 'oci-docs',
  branch: 'main',
};

/** The product's repository. */
export const productRepo = 'https://github.com/ncecere/open-chat-interface';

/** The OCI release these docs describe. */
export const ociVersion = 'v0.10.0';

export const docsRepoUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}`;

export function editUrl(path: string): string {
  return `${docsRepoUrl}/blob/${gitConfig.branch}/${path}`;
}
