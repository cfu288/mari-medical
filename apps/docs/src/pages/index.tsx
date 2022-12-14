import React, { Fragment } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const footerNavigation = {
  main: [{ name: 'About', href: 'https://meremedical.co/docs/' }],
  social: [],
};

const features = [
  {
    name: 'Sync to multiple patient portals',
    img: '/img/sync.svg',
    description:
      'Connect to all of your patient portals across doctors and hospitals and see all of your data in one place. Let us help you manage your medical records.',
  },
  {
    name: 'Self-Hosted',
    img: '/img/self.svg',
    description:
      'Mere respects the privacy, security, and integrity of your info at all times. Run it on your own servers at home without worrying about your sensitive data falling into the wrong hands.',
  },
  {
    name: 'Offline First',
    img: '/img/offline.svg',
    description:
      'Mere is offline-first. Everything will be available right on your device for anytime-access – whether you’re connected to the web or not.',
  },
  {
    name: 'Reminders',
    img: '/img/reminders.svg',
    description:
      'Advanced AI technology means you’ll get convenient health recommendations, wellness metrics, and reminders when it’s time to see the doctor again – all from one intuitive dashboard.',
  },
  {
    name: 'Anonymous & Secure',
    img: '/img/secure.svg',
    description:
      'With Mere, you are always in control of your data. Stay offline, sync online – the choice is yours.',
  },
  {
    name: 'Free for Everyone',
    img: '/img/free.svg',
    description:
      'Every patient has the right to control their own healthcare data. That’s why Mere Medical is free to use, deploy, and change.',
  },
];

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Manage all of your medical records in one place. Mere syncs your records across hospital systems for you. Self-hosted and offline-first"
        />
        <meta
          property="og:description"
          content="Manage all of your medical records in one place. Mere syncs your records across hospital systems for you. Self-hosted and offline-first"
        />
        {process.env.NODE_ENV === 'production' && (
          <script
            async
            defer
            data-website-id="923df902-e3c6-4d55-8c84-51cd5881ed81"
            src="https://umami.mari.casa/umami.js"
          ></script>
        )}
      </Head>
      <main className="relative overflow-x-hidden overflow-y-hidden bg-white">
        <div className="absolute flex top-0 z-50 mx-auto w-full py-4">
          <div className="flex gap-x-4 mx-auto">
            <Link to="/docs" className="text-primary-900 text-xl">
              About
            </Link>
            <Link to="/blog" className="text-primary-900 text-xl">
              Blog
            </Link>
          </div>
        </div>
        {/* Hero section */}
        <div className="pt-8 sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:grid-cols-1 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
            {/* Left Hero */}
            <div>
              <div>
                <img
                  className="h-11 w-auto"
                  src="/img/logo.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-12">
                <div className="mt-6 sm:max-w-xl">
                  <h1 className="text-primary-900 text-5xl font-bold tracking-tight sm:text-5xl">
                    Your Whole Medical Story.
                  </h1>
                  <h1 className="text-primary-900 text-5xl font-bold tracking-tight sm:text-5xl">
                    One Place.
                  </h1>
                  <p className="mt-6 text-xl leading-relaxed text-gray-600">
                    With Mere Medical, you can finally manage all of your
                    medical records from one place via a self-hostable web app.
                  </p>
                </div>
                <div className=" mt-5 max-w-md sm:flex sm:justify-start md:mt-8">
                  <div className="rounded-md shadow">
                    <a
                      href="https://app.meremedical.co"
                      className="bg-primary-700 hover:bg-primary-600 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white hover:text-white md:py-4 md:px-10 md:text-lg"
                    >
                      See Demo
                    </a>
                  </div>
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                    <a
                      href={`${siteConfig.url}/docs`}
                      className="text-primary-700 hover:text-primary-600 flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                    >
                      Go to Docs
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Hero */}
            <div className="lg:rounded-tr-0 lg:left-100 mt-24 flex h-96 w-auto overflow-hidden rounded-bl-[80px] rounded-tr-[80px] bg-[#F1F4F9] pt-6 sm:h-[32rem] lg:absolute lg:inset-y-0 lg:left-1/2 lg:right-0 lg:mt-0 lg:block lg:h-full lg:w-full lg:overflow-visible">
              <img
                className="mx-auto mt-0 self-start p-10 sm:max-w-xl lg:mx-0 lg:mt-20 lg:h-full lg:w-auto lg:max-w-none lg:self-center lg:pl-20 xl:pl-40"
                src="/img/phone-screen.webp"
                alt="phone screenshot"
              />
            </div>
          </div>
        </div>

        {/* Problem section */}
        <div className="relative mt-24 md:mt-36 lg:mt-48">
          <div className=" mx-auto flex max-w-md flex-col-reverse items-center justify-center px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:flex-row-reverse lg:items-start lg:gap-24 lg:px-8 lg:px-8">
            {/* <div className="flex h-full grow items-center justify-center overflow-hidden lg:order-1 lg:w-full"> */}
            <img
              className="mt-12 h-auto max-h-[512px] w-full max-w-[512px] self-center justify-self-center object-cover lg:order-1 lg:mt-0"
              src="/img/snippets.webp"
              alt=""
            />
            {/* </div> */}

            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              {/* Content area */}
              <div className="lg:pt-20">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  What’s the Problem?
                </h2>
                <div className="mt-6 space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Your medical records are yours. So, why is it so hard to
                    access them?
                  </p>
                  <p className="text-lg leading-relaxed">
                    Maintaining your well being can seem impossible when you
                    can’t recall what month you last saw your doctor – or
                    whether you had that specific vaccine. Did you ever get your
                    lab results back? When was the last time you got your flu
                    shot?
                    {/* Are all of your different doctors on the same page? */}
                  </p>
                  <p className="text-lg leading-relaxed">
                    Medical record organization is critical. With the rise of
                    the digital age, managing your patient profile should be
                    easier.
                  </p>
                  <p className="text-lg leading-relaxed">
                    However, you shouldn't need to trust 3rd parties with your
                    medical records. That's why Mere Medical is a self-hosted
                    progressive web app - keep full control of your medical
                    records by deploying it on your own computer or servers!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution section */}
        <div className="mt-20 bg-[#006182] py-10 lg:py-20">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  What’s the Solution?
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white">
                  Mere Medical is the all-new, source available, self hostable,
                  and free medical record management web app that connects to
                  multiple patient portals and allows you to upload your own
                  paper records. With Mere Medical, you can easily manage your
                  own medical records under one digital roof.
                </p>
                <div className="mb-0 mt-8 flex items-center justify-start rounded-md bg-[#8799D040] p-4">
                  <div className="ml-2 mr-4 flex aspect-square h-[35px] w-[35px] items-center justify-center rounded-full bg-[#7CE8C7]">
                    <p className="text-primary-900 mb-0 text-lg">1</p>
                  </div>
                  <p className=" text-md mb-0 flex h-max max-w-xl items-center justify-center align-bottom font-semibold leading-7 text-white">
                    Offline first - Everything is saved locally to your device
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-start rounded-md bg-[#8799D040] p-4">
                  <div className="ml-2 mr-4 flex aspect-square h-[35px] w-[35px] items-center justify-center rounded-full bg-[#7CE8C7]">
                    <p className="text-primary-900 mb-0 text-lg">2</p>
                  </div>
                  <p className="text-md mb-0 flex h-max max-w-xl items-center justify-center align-bottom font-semibold leading-7 text-white">
                    No sign in required - start using without creating an
                    account
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-start rounded-md bg-[#8799D040] p-4">
                  <div className="ml-2 mr-4 flex aspect-square h-[35px] w-[35px] items-center justify-center rounded-full bg-[#7CE8C7]">
                    <p className="text-primary-900 mb-0 text-lg">3</p>
                  </div>
                  <p className="text-md mb-0 flex h-max max-w-xl items-center justify-center align-bottom font-semibold leading-7 text-white">
                    Wrangle your data - multiple data sources, one place
                  </p>
                </div>
              </div>

              {/* Screenshot */}
              <div className="mt-12 flex aspect-square items-center justify-center overflow-hidden rounded-2xl lg:mt-0">
                <img
                  className="h-full max-h-[512px] w-auto max-w-[512px] object-cover"
                  src="/img/solution.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-10">
          <div className="bg-white">
            <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Our Goals
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  {/* Decentralizing Patient Data */}
                </p>
              </div>
              <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="flex min-h-[250px] flex-col rounded-md border border-2 border-solid border-slate-100 p-6"
                  >
                    <dt className="flex flex-col">
                      <img
                        src={feature.img}
                        className="h-[84px] w-[84px] text-green-600"
                        aria-hidden="true"
                      />
                      <p className="mt-8 text-2xl font-semibold text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="text- mt-4 ml-0 font-light text-gray-600">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative sm:py-16">
          {/* <div aria-hidden="true" className="hidden sm:block">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
            <svg
              className="absolute top-8 left-1/2 -ml-3"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={392}
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              />
            </svg>
          </div> */}
        </div>
      </main>
      <footer className="bg-primary-900">
        <div className="mx-auto max-w-md overflow-hidden py-12 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mx-auto flex w-full items-center pb-4">
            <img
              aria-hidden="true"
              className="mx-auto"
              src="/img/white-logo.svg"
            ></img>
          </div>
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {footerNavigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a
                  href={item.href}
                  className="text-base text-gray-400 hover:text-gray-300"
                >
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          {/* <div className="mt-8 flex justify-center space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div> */}
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2022 Mere Medical. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
