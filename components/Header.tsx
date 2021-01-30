import { Transition } from '@headlessui/react'
import { useKeycloak } from '@react-keycloak/ssr'
import { KeycloakInstance } from 'keycloak-js'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = (): JSX.Element => {
  const [isOn, setIsOn] = useState(false)
  const { keycloak } = useKeycloak<KeycloakInstance>()

  return (
    <header className="flex justify-between p-4 items-center max-w-5xl mx-auto">
      <Link href="/">
        <a>
          <h1 className="text-md font-semibold sm:text-lg lg:text-2xl">
            leipzigtech.
          </h1>
        </a>
      </Link>
      <div className="flex">
        <Link href="/companies">
          <a className="mr-3">
            <button
              type="button"
              className="px-4 py-2 rounded shadow text-black hover:bg-blue-800 hover:text-white"
            >
              Companies
            </button>
          </a>
        </Link>
        {!keycloak?.authenticated && (
          <>
            <button
              type="button"
              className="mr-1 px-4 py-2 rounded shadow text-black hover:bg-blue-800 hover:text-white"
              onClick={() => {
                if (keycloak) {
                  window.location.href = keycloak.createRegisterUrl()
                }
              }}
            >
              Signup
            </button>

            <button
              type="button"
              className="px-4 py-2 rounded shadow text-black hover:bg-blue-800 hover:text-white"
              onClick={() => {
                if (keycloak) {
                  window.location.href = keycloak.createLoginUrl()
                }
              }}
            >
              Login
            </button>
          </>
        )}
        {keycloak?.authenticated && (
          <div className="w-10 h-10 ml-3 relative">
            <button
              className="w-10 h-10 flex justify-center items-center rounded-full text-sm focus:outline-none border border-gray-500 border-solid"
              id="user-menu"
              aria-haspopup="true"
              type="button"
              onClick={() => setIsOn(!isOn)}
              onBlur={() => setIsOn(false)}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="icons/user-solid.svg"
                alt=""
              />
            </button>
            <Transition
              show={isOn}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  role="menuitem"
                  type="button"
                  onClick={() => {
                    if (keycloak) {
                      window.location.href = keycloak.createAccountUrl()
                    }
                  }}
                >
                  Profile
                </button>

                <button
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  role="menuitem"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    keycloak.logout()
                  }}
                >
                  Logout
                </button>
              </div>
            </Transition>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
