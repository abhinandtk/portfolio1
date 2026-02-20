import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Sitemap of Abhinand TK Portfolio',
}

export default async function sitemap() {
  const baseUrl = 'https://abhinandtk.com'

  const routes = ['', '/works'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
