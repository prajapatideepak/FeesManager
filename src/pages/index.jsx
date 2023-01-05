import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
// import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fees Manager - Accounting made simple for Tuition classes</title>
        <meta
          name="Fees Collection Softwar3e"
          content="Fees Manager is the only tool you need to collect and manage student fees. It's easy to use, and it's Very Cheap! With Fees Manager, you can create a class , collect payments, track balances, and send reminders. You can also export your data to QuickBooks or Excel for easy accounting." />
      </Head>
    <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        {/* <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
