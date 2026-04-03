import { Link, PageProps } from 'gatsby';
import * as React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';

export default function TermsOfServicePage(props: PageProps) {
  return (
    <Layout>
      <SEO title="Terms of Service" image={null} pathname={props.path} />

      <TopNavigationBar />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mt-8 text-4xl font-extrabold">Terms of Service</h1>

        <div className="dark:text-dark-high-emphasis mt-6 space-y-4 text-lg text-gray-900">
          <p>Last updated: April 3, 2026</p>

          <p>
            By accessing or using USAMO Guide ("we", "our", or "us"), you
            agree to these Terms of Service.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Use of the Service</h2>
          <p>
            You may use the service for lawful educational purposes. You agree
            not to misuse the platform, attempt unauthorized access, or disrupt
            service availability for others.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Accounts</h2>
          <p>
            You are responsible for your account activity and for maintaining
            the confidentiality of your login credentials.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Content and License</h2>
          <p>
            Use of site materials is subject to our license and usage terms.
            For details, see the{' '}
            <Link
              to="/license"
              className="text-blue-500 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              License and Usage page
            </Link>
            .
          </p>

          <h2 className="pt-2 text-2xl font-bold">Third-Party Services</h2>
          <p>
            The platform may integrate with third-party services. Your use of
            those services may also be governed by their terms and policies.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Disclaimer</h2>
          <p>
            The service and content are provided on an "as is" basis without
            warranties of any kind, to the extent permitted by law.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Changes to These Terms</h2>
          <p>
            We may update these terms over time. Continued use of the service
            after updates means you accept the revised terms.
          </p>

          <h2 className="pt-2 text-2xl font-bold">Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a
              href="mailto:contact@usamoguide.com"
              className="text-blue-500 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              contact@usamoguide.com
            </a>
            .
          </p>

          <Link
            to="/"
            className="mb-4 block text-blue-500 underline hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
