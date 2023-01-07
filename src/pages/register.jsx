import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Head from 'next/head'
import Link from 'next/link'
import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import Image from "next/image";
import myLogo from "../../public/images/FeesManagerLogo.png"


export default function Login() {

  const form = useRef();

  const Sendmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_w6skjso","template_468riwt",form.current,"dYZGJ37pa39lKSSRf")
        .then(res => {
            console.log(res, "res")
            document.getElementById('first_name').value = ' '
            document.getElementById('last_name').value = ' '
            document.getElementById('email').value = ' '
            document.getElementById('message').value = ' '
        }).catch(err => {
            console.log("error", err)
        })
}

  return (
    <>
      <Head>
        <title>Fees Manager - Accounting made simple for Tuition classes</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col items-start justify-start">
          <Link href="/">
            <a>
              {/* <Logo className="mb-2 h-10 w-auto" /> */}
              <Image src={myLogo} alt="fess manager logo" width="100%" height="100%"/>
            </a>
          </Link>
          <h2 className="mt-5 text-lg font-semibold text-gray-900">
            Get your fess collection software.
          </h2>
          <p className="mt-2 text-sm text-gray-700">
          Our fees management application aims to streamline the process of collecting and tracking fees for organizations or tuition classes. With our application, users will be able to easily set up fee structures, send invoices and payment reminders, and track payments in real-time.
          </p>

          <h2 className="mt-5 text-lg font-semibold text-gray-900">
            Call Now: <span className='font-medium'>9328027580</span>
          </h2>

        </div>
        <div className="mt-10">
          <div className="mt-6">
            <form action="#" method="" className="space-y-7"  ref={form} onSubmit={Sendmail}>
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
                <Input
                  label="First name"
                  id="first_name"
                  name="first_name"
                  type="text"
                  autoComplete="given-name"
                  required
                />
                <Input
                  label="Last name"
                  id="last_name"
                  name="last_name"
                  type="text"
                  autoComplete="family-name"
                  required
                />
              </div>
              <Input
                label="Email address"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <Input
                label="Message"
                id="message"
                name="message"
                type="message"
                required
              />
              <div className="pt-1">
                <button
                  type="submit"
                  value="Send" 
                  className="w-full rounded-full border border-transparent bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  )
}
