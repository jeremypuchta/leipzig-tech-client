import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Index(): JSX.Element {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Find your place in the tech community of Leipzig.
        </h2>
        <p className="mt-3 text-lg text-gray-500">
          A central register of tech companies in Leipzig and the Leipzig area.
        </p>
        <div className="mt-5 mb-12 max-w-md mx-auto">
          <Link href="/companies">
            <a>
              <div className="rounded shadow bg-blue-800 text-white py-3 font-semibold">
                Look for companies
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="mt-3 text-2xl font-bold text-center">
          Explore 100+ tech companies in Leipzig
        </h3>
        <section className="text-left">
          <Link href="#">
            <a>
              <div className="flex flex-row rounded shadow-md p-8 my-2">
                <Image
                  src="/leipzig-wappen.png"
                  alt="leipzig wappen"
                  width={45}
                  height={50}
                />
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">
                    Software Engineer at ABC
                  </p>
                  <p className="text-gray-500 text-sm">Address</p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a>
              <div className="flex flex-row rounded shadow-md p-8 my-2">
                <Image
                  src="/leipzig-wappen.png"
                  alt="leipzig wappen"
                  width={45}
                  height={50}
                />
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">
                    Software Engineer at ABC
                  </p>
                  <p className="text-gray-500 text-sm">Address</p>
                </div>
              </div>
            </a>
          </Link>
          <Link href="#">
            <a>
              <div className="flex flex-row rounded shadow-md p-8 my-2">
                <Image
                  src="/leipzig-wappen.png"
                  alt="leipzig wappen"
                  width={45}
                  height={50}
                />
                <div className="ml-4">
                  <p className="text-gray-900 font-semibold">
                    Software Engineer at ABC
                  </p>
                  <p className="text-gray-500 text-sm">Address</p>
                </div>
              </div>
            </a>
          </Link>
        </section>
      </div>
    </div>
  )
}
