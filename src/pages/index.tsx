import { useLocation } from '@gatsbyjs/reach-router';
import {
  AcademicCapIcon,
  ChartBarIcon,
  ChatAlt2Icon,
  ClipboardListIcon,
  CogIcon,
  DatabaseIcon,
  LightningBoltIcon,
  TerminalIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import classNames from 'classnames';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { GlowingRing } from '../components/elements/landing/GlowingRing';
import { GlowingText } from '../components/elements/landing/GlowingText';
import { GradientText } from '../components/elements/landing/GradientText';
import { Feature } from '../components/Index/Feature';
import { ProblemsetsFeature } from '../components/Index/features/ProblemsetsFeature';
import { ProgressTrackingFeature } from '../components/Index/features/ProgressTrackingFeature';
import { ResourcesFeature } from '../components/Index/features/ResourcesFeature';
import ActiveCardsHome from '../components/activeCardsHome';
import TrustedBy from '../components/Index/TrustedBy';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';
import {
  useCurrentUser,
  useIsUserDataLoaded,
} from '../context/UserDataContext/UserDataContext';

const containerClasses = 'max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8';
const headerClasses =
  'text-4xl md:text-5xl 2xl:text-6xl font-black text-black dark:text-white';
const headerClassesNoText = 'text-4xl md:text-5xl 2xl:text-6xl font-black';
const subtextClasses =
  'text-lg md:text-xl 2xl:text-2xl font-medium max-w-4xl leading-relaxed text-gray-700 dark:text-gray-400';
const headerSubtextSpacerClasses = 'h-6 2xl:h-12';
const whiteButtonClassesBig =
  'text-lg bg-white px-4 py-2 md:px-6 md:py-3 rounded-[130px] font-medium text-gray-900 relative';
const whiteButtonClasses =
  'text-lg md:text-xl bg-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-gray-900 relative';
const usamoTitleClasses =
  'md:text-center font-extrabold tracking-tight text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl bg-clip-text text-transparent bg-linear-to-b from-gray-900 to-gray-600 dark:from-white dark:to-red-200';
const linkTextStyles =
  'text-blue-600 dark:text-blue-300 transition hover:text-purple-600 dark:hover:text-purple-300';

export default function IndexPage({ path }): JSX.Element {
  const currentUser = useCurrentUser();
  const loading = useIsUserDataLoaded();
  const location = useLocation();
  React.useEffect(() => {
    // User will normally be redirected to the dashboard if the user is logged in, but if user clicks the icon in the top left corner while on the dashboard, they will not be redirected.
    try {
      if (currentUser && location.state.redirect) {
        /* Whether or not the user should be redirected to the dashboard is stored in location.state.redirect, but if the user opens a link straight
        to the landing page, location.state.redirect will be undefined, causing a typeerror, this try catch statements accounts for that */
        navigate('/dashboard');
      }
    } catch (e) {
      if (currentUser) {
        navigate('/dashboard');
      }
    }
  }, [currentUser, loading, location]);

  React.useEffect(() => {
    const htmlStyle = document.documentElement.style;
    const bodyStyle = document.body.style;
    const prevHtmlOverscrollY = htmlStyle.overscrollBehaviorY;
    const prevBodyOverscrollY = bodyStyle.overscrollBehaviorY;

    htmlStyle.overscrollBehaviorY = 'none';
    bodyStyle.overscrollBehaviorY = 'none';

    return () => {
      htmlStyle.overscrollBehaviorY = prevHtmlOverscrollY;
      bodyStyle.overscrollBehaviorY = prevBodyOverscrollY;
    };
  }, []);

  return (
    <Layout>
      <SEO title={null} image={null} pathname={path} />

      <div className="fixed top-0 z-50 w-full">
        <div className="backdrop-blur-lg">
          <TopNavigationBar />
        </div>
      </div>

      {/* Begin Hero */}
      <div className="relative overflow-hidden -mt-16 pt-32 bg-gray-50 dark:bg-gradient-to-b dark:from-black dark:via-black dark:to-[#1a0d00] transition-colors duration-500">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)]">
            <svg
              className="h-full w-full opacity-[0.15] dark:opacity-[0.4]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="grid-pattern"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-orange-400/60 dark:text-orange-500/80"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.08)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full" />
      
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-[#160f08] to-transparent" />

        <div className="relative z-10 flex flex-col px-4 sm:px-6 md:min-h-screen lg:px-8">
          <div className="h-6 sm:h-12"></div>

          <div className="flex flex-1 flex-col justify-center">
            <div className="h-8"></div>

            <div className="mb-4 flex justify-center">
              <a
                href="https://github.com/usamoguide/usamo-guide"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-orange-300/80 bg-linear-to-r from-orange-100 to-amber-100 px-6 py-3 text-base font-extrabold tracking-wide text-orange-900 shadow-[0_8px_24px_rgba(251,146,60,0.25)] transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105 dark:border-orange-700/60 dark:from-orange-900/40 dark:to-amber-900/30 dark:text-orange-100"
              >
                Star us on GitHub
              </a>
            </div>

            <div className="dark:hidden md:justify-center">
              <h1 className={classNames(usamoTitleClasses, 'mt-4 text-black')}>
                The Only Online Guide for Math Competition
              </h1>
            </div>

            <div>
              <h1
                className={classNames(
                  usamoTitleClasses,
                  'mx-auto h-0 w-8/12 flex-row items-center justify-center leading-20 font-semibold dark:visible dark:h-auto'
                )}
              >
                The Only Guide You Need for Competitive Math
              </h1>
            </div>

            <div className="h-6 sm:h-8"></div>

            <p className="font-brand text-8 leading-snug text-gray-800 sm:text-xl md:text-center md:!leading-normal 2xl:text-3xl dark:text-gray-300">
              A simple, easy to follow pathway for your success
            </p>

            <div className="h-10 sm:h-14"></div>

            <div className="flex gap-10 md:justify-center">
              <Link
                to="/dashboard"
                className="inline-block rounded-full border-orange-600 bg-linear-to-br from-orange-300 to-orange-400 px-8 py-3 text-[16px] font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(251,146,60,0.4)]"
              >
                Resources {'>'}
              </Link>
              <GlowingRing>
                <Link
                  to="/dashboard"
                  className={classNames(whiteButtonClassesBig, '!text-[15px] inline-block !font-bold')}
                >
                  Get Started
                </Link>
              </GlowingRing>
            </div>

            <div className="h-10 sm:h-14"></div>

            <div className="flex flex-col gap-4 text-gray-600 md:justify-center md:text-sm dark:text-gray-400">
              <span className="block font-semibold text-center">Built by the USAMO Guide community</span>
              <div className="flex flex-wrap gap-6 md:justify-center">
                <a
                  href="https://github.com/usamoguide/usamo-guide"
                  target="_blank"
                  rel="noreferrer"
                  className={linkTextStyles}
                >
                  Check out our GitHub →
                </a>
                <a
                  href="https://discord.gg/X2zx6u53XH"
                  target="_blank"
                  rel="noreferrer"
                  className={linkTextStyles}
                >
                  Join our Discord server →
                </a>
                <a
                  href="https://contests.usamoguide.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={linkTextStyles}
                >
                  Explore contests platform →
                </a>
              </div>
            </div>
          </div>

          <div className="h-16 sm:h-24"></div>
        </div>
      </div>
      {/* End Hero */}

      {/* Learn Contest Math. Efficiently. */}
      <div className="relative overflow-hidden bg-linear-to-b from-orange-50 to-white transition-colors duration-500 dark:bg-linear-to-b dark:from-[#160F08] dark:via-[#3a1805] dark:to-[#e85d04]/30">
        <div className="h-12 sm:h-20 md:h-36 2xl:h-48"></div>
        <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-full -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px] dark:bg-orange-900/25" />

        <div className={classNames(containerClasses, '2xl:!max-w-[96rem]')}>
          <h2 className="mx-auto flex flex-col items-center justify-center pb-3 text-5xl font-bold md:text-6xl dark:text-orange-50/90">
            Learn Contest Math
          </h2>
          <p className={classNames(subtextClasses, 'mx-auto w-full text-center md:!w-2/4')}>
            Carefully designed for math contest students - available to everyone,
            for free.
          </p>

          <div className="h-12 md:h-20 2xl:h-36"></div>

          <div className="flex flex-col gap-6 lg:flex-row lg:gap-2">
            <div className="flex-1 min-w-0">
              <Feature
                icon={DatabaseIcon}
                iconClasses="from-cyan-400 to-sky-500"
                title="Curated Resources"
                blobClasses="bg-sky-200 hidden xl:block dark:bg-sky-800"
                feature={<ResourcesFeature />}
                featurePosition="left"
              >
                Learn new topics from a vetted list of high-quality resources.
                If one resource doesn't click, look at another!
              </Feature>
            </div>

            <div className="flex-1 min-w-0">
              <Feature
                icon={ClipboardListIcon}
                iconClasses="from-purple-400 to-indigo-500"
                title="Extensive Problemsets"
                blobClasses="bg-purple-300 dark:bg-purple-800"
                feature={<ProblemsetsFeature />}
                featurePosition="right"
              >
                Practice each topic with extensive problemsets and solutions
                covering a wide range of difficulties.
              </Feature>
            </div>
          </div>

          <div className="h-6 md:h-10 2xl:h-24"></div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            <div className="md:col-span-3 min-w-0">
              <Feature
                icon={LightningBoltIcon}
                iconClasses="from-yellow-400 to-orange-500"
                title="Progress Tracking"
                blobClasses="bg-orange-200 dark:bg-orange-800"
                feature={<ProgressTrackingFeature />}
                featurePosition="left"
                fade="none"
              >
                Use our progress-tracking tools to track your progress in the
                Guide and stay motivated.
              </Feature>
            </div>

            <div className="md:col-span-2 min-w-0">
              <Feature
                icon={ChatAlt2Icon}
                iconClasses="from-green-400 to-cyan-500"
                title="Help when you need it"
                blobClasses="bg-green-200 dark:bg-green-800"
                feature={
                  <div className="rounded-lg shadow-lg">
                    <StaticImage
                      src="../assets/nontrivial.png"
                      alt="AoPS Community Screenshot"
                      placeholder="blurred"
                      layout="constrained"
                      width={560}
                    />
                  </div>
                }
                featurePosition="right"
                fade="none"
              >
                <span className="mb-4 block md:mb-8">
                  Ask questions, share solutions, and learn from other contest
                  students in the AoPS community.
                </span>

                <a
                  href="https://artofproblemsolving.com/community"
                  target="_blank"
                  rel="noreferrer"
                  className={linkTextStyles}
                >
                  Visit AoPS Community &rarr;
                </a>
              </Feature>
            </div>
          </div>
        </div>

        <div className="h-16 md:h-20 2xl:h-36"></div>
      </div>
      {/* End Learn contest math. */}

      <div className="relative overflow-hidden bg-linear-to-b from-[#e85d04]/30 via-[#3d1a04] to-[#e85d04]/40 text-center transition-colors duration-500">
        <div className="h-16 md:h-20 2xl:h-36"></div>

        <div
          className={classNames(
            containerClasses,
            'relative mx-auto w-11/12 overflow-hidden rounded-4xl border border-white/60 bg-linear-to-br from-white/95 via-[#f4dcbf] to-[#fb923c] px-8 py-20 shadow-[0_20px_60px_-15px_rgba(249,115,22,0.3)] backdrop-blur-md transition-all duration-500 md:w-3/4'
          )}
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-orange-900"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="pointer-events-none absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-orange-400/20 blur-[100px]" />
          <div className="pointer-events-none absolute top-0 right-0 left-0 h-20 rounded-t-4xl bg-linear-to-b from-white/40 to-transparent" />

          <div className="relative z-10">
            <div className="dark:hidden">
              <h1 className={classNames(headerClasses, 'text-orange-900')}>
                Streamline your Learning
              </h1>
            </div>
            <div className="invisible h-0 dark:visible dark:h-auto">
              <h2 className={classNames(headerClassesNoText, 'text-orange-900 !font-bold')}>
                Streamline your Learning
              </h2>
            </div>

            <div className="h-4 2xl:h-12"></div>

            <p
              className={classNames(
                subtextClasses,
                'mx-auto w-11/12 text-center !font-medium !text-[#62210b] md:w-3/4'
              )}
            >
              This guide is written by <span className="text-[#9a3412]">top math contest performers</span> and
              educators who care about clean, rigorous solutions.
            </p>
            <div className="h-16 2xl:h-12"></div>

            <div className="brightness-50 contrast-125 opacity-70">
              <TrustedBy />
            </div>

            <div className="h-8 md:h-12 2xl:h-16"></div>

            <div className="group relative inline-block">
              <div className="absolute -inset-1 rounded-full bg-orange-600/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100"></div>
              <Link
                to="/dashboard"
                className="relative inline-flex items-center rounded-full bg-[#2a0e06] px-12 py-4 font-bold text-orange-50 shadow-2xl transition-all hover:scale-105 hover:bg-black active:scale-95"
              >
                View Guide
                <svg
                  className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-16 md:h-20 2xl:h-36"></div>
      </div>

      <ActiveCardsHome/>

      <div className="bg-gray-100 dark:bg-black">
        <div className="h-16 md:h-20 xl:h-36 2xl:h-48"></div>

        <div className={containerClasses}>
          <div className="dark:hidden">
            <h1 className={classNames(headerClasses)}>Join our Team.</h1>
          </div>
          <div className="invisible h-0 dark:visible dark:h-auto">
            <GlowingText
              className={classNames(headerClassesNoText, 'text-white')}
              extraGlow
            >
              Join our Team.
            </GlowingText>
          </div>

          <div className={headerSubtextSpacerClasses}></div>
          <p className={subtextClasses}>
            USAMO Guide is a student-run community dedicated to olympiad
            mathematics. Join us to write lessons, curate problem sets, and grow
            as a mentor alongside fellow contest enthusiasts.
          </p>
          <div className="h-8 md:h-12"></div>

          <div className="group relative inline-block">
            <GlowingRing>
              <a
                href="https://docs.google.com/document/d/13QpXqdiYQwjBLnywGL1FUG7GFdh8SM_1NigIkJl-A7k/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className={classNames(whiteButtonClasses, 'inline-block')}
              >
                Apply Now
              </a>
            </GlowingRing>
          </div>

          <hr className="my-16 border-gray-300 md:my-20 2xl:my-24 dark:border-gray-800" />

          <div className="dark:hidden">
            <h1 className={classNames(headerClasses)}>
              Or, help us financially!
            </h1>
          </div>
          <div className="invisible h-0 dark:visible dark:h-auto">
            <GlowingText
              className={classNames(headerClassesNoText, 'text-white')}
              extraGlow
            >
              Or, help us financially!
            </GlowingText>
          </div>
          <div className="h-8 md:h-12"></div>
          <div className="flex items-center">
            <GlowingRing>
              <a
                href="mailto:contact@usamoguide.com"
                target="_blank"
                rel="noreferrer"
                className={classNames(whiteButtonClasses, 'inline-block')}
              >
                Sponsor Us
              </a>
            </GlowingRing>
            <span className="ml-4 text-lg font-medium text-gray-400 md:ml-6">
              or{' '}
              <a
                href="https://www.paypal.com/donate?hosted_button_id=FKG88TSTN82E4"
                target="_blank"
                rel="noreferrer"
                className={linkTextStyles}
              >
                Donate via PayPal
              </a>
            </span>
            <br />
          </div>
        </div>

        <div className="h-16 md:h-20 xl:h-36 2xl:h-48"></div>
      </div>

      {/* Begin FAQ */}
      <div className="dark:bg-dark-surface bg-white">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-28">
          <h2 className={classNames(headerClasses, 'dark:text-gray-100')}>
            Frequently asked questions
          </h2>
          <div className="pt-10 md:pt-16">
            <dl className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    What are AMC, AIME, and USAMO?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      The AMC (8/10/12) and AIME are the main pipeline contests
                      in the U.S. that culminate in USAMO. For official contest
                      information and schedules, see the{' '}
                      <a
                        href="https://www.maa.org/math-competitions"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline dark:text-blue-400"
                      >
                        MAA competitions page
                      </a>
                      .
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Is this an official syllabus?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      No. This guide is a community-curated roadmap that
                      reflects common contest topics and problem-solving
                      techniques. It does not represent an official syllabus.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    How do I report a problem or ask a question?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      If you encounter an issue while using the guide (website
                      bug, typo, broken link, unclear explanation, etc), use the
                      "Contact Us" button. Alternatively, email us at{' '}
                      <a
                        href="mailto:contact@usamoguide.com"
                        className="text-blue-600 underline dark:text-blue-400"
                      >
                        contact@usamoguide.com
                      </a>
                      .
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    I'm looking for classes, club curriculum...
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      Check out AoPS classes and community-led study groups, or
                      join the USAMO Guide study cohorts.
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Is this guide only for USAMO qualifiers?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      Not at all. The guide is designed to support AMC 8, AMC
                      10/12, and AIME learners to reach USAMO.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    How can I get help?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      If you get stuck, ask questions in the{' '}
                      <a
                        href="https://artofproblemsolving.com/community"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline dark:text-blue-400"
                      >
                        AoPS community
                      </a>{' '}
                      or reach out via the Contact Us button.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    How can I contribute?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      Contributions are welcome! Visit our{' '}
                      <a
                        href="https://github.com/usamoguide/usamo-guide"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline dark:text-blue-400"
                      >
                        GitHub repository
                      </a>
                      to find guidelines and open issues.
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Is this open source?
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      Yes! Check out our{' '}
                      <a
                        href="https://github.com/usamoguide/usamo-guide"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline dark:text-blue-400"
                      >
                        GitHub Repository
                      </a>
                      .
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/*End FAQ*/}

      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-12">
          <p className="dark:text-dark-med-emphasis text-center text-base leading-6 text-gray-400">
            &copy; {new Date().getFullYear()} USAMO Guide.
            <br />
            No part of this website may be reproduced or commercialized in any
            manner without prior written permission.{' '}
            <Link to="/license" className="underline">
              Learn More.
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
