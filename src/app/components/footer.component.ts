import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, RouterModule, CommonModule],
  template: `
    <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800 shadow-neue mt-8">
      <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between p-2 md:space-y-0 space-y-8">
          <div class="text-gray-600 dark:text-gray-400">
            <p
              class="uppercase font-semibold leading-relaxed text-gray-900 dark:text-white">
              New York
            </p>
            <p class="mt-2">
              Huntersville,<br />957 Hill Hills Suite 491, United States
            </p>
            <p class="my-2">
              <mat-icon class="-mb-1 text-lg">phone</mat-icon> Office: +1 (604)
              970 5725
            </p>
            <p class="my-2">
              <mat-icon class="-mb-1 text-lg">email</mat-icon> Support:
              company&#64;name.com
            </p>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2
                class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a href="https://flowbite.com" class="hover:underline"
                    >Flowbite</a
                  >
                </li>
                <li>
                  <a href="https://tailwindcss.com/" class="hover:underline"
                    >Tailwind CSS</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h2
                class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    class="hover:underline "
                    >Github</a
                  >
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                    >Discord</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h2
                class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-600 dark:text-gray-400">
                <li class="mb-4">
                  <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="relative sm:flex sm:items-center sm:justify-center sm:mb-2">
          <a
            href="https://flowbite.com"
            class="flex items-center sm:absolute left-6">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="mr-3 h-8"
              alt="FlowBite Logo" />
            <span
              class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
              >Flowbite</span
            >
          </a>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
            >© 2022
            <a href="https://flowbite.com" class="hover:underline">Flowbite™</a
            >. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  `,
})
export default class FooterComponent {
  constructor() {}
}
