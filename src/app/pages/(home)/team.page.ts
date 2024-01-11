import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [MatIconModule, NgOptimizedImage],
  template: `
    <section class="bg-white dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
          <h2
            class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p
            class="font-light text-gray-500 sm:text-xl lg:mb-16 dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div class="mb-6 grid gap-8 md:grid-cols-4 lg:mb-16">
          <div
            class="shadow-neue group relative aspect-[4/3] items-center overflow-hidden rounded-lg bg-gray-50 shadow sm:flex md:aspect-[3/4] dark:border-gray-700 dark:bg-gray-800">
            <div>
              <img
                class="object-cover brightness-75 filter transition duration-300 group-hover:scale-125 dark:brightness-50"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3 class="text-shadow text-xl font-semibold text-white">
                Bonnie Green
              </h3>
              <p class="text-shadow font-medium text-white">CEO</p>
            </div>
          </div>
          <div
            class="shadow-neue group relative aspect-[4/3] items-center overflow-hidden rounded-lg bg-gray-50 shadow sm:flex md:aspect-[3/4] dark:border-gray-700 dark:bg-gray-800">
            <div>
              <img
                class="object-cover brightness-75 filter transition duration-300 group-hover:scale-125 dark:brightness-50"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3 class="text-shadow text-xl font-semibold text-white">
                Bonnie Green
              </h3>
              <p class="text-shadow font-medium text-white">CEO</p>
            </div>
          </div>
          <div
            class="shadow-neue group relative aspect-[4/3] items-center overflow-hidden rounded-lg bg-gray-50 shadow sm:flex md:aspect-[3/4] dark:border-gray-700 dark:bg-gray-800">
            <div>
              <img
                class="object-cover brightness-75 filter transition duration-300 group-hover:scale-125 dark:brightness-50"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3 class="text-shadow text-xl font-semibold text-white">
                Bonnie Green
              </h3>
              <p class="text-shadow font-medium text-white">CEO</p>
            </div>
          </div>
          <div
            class="shadow-neue group relative aspect-[4/3] items-center overflow-hidden rounded-lg bg-gray-50 shadow sm:flex md:aspect-[3/4] dark:border-gray-700 dark:bg-gray-800">
            <div>
              <img
                class="object-cover brightness-75 filter transition duration-300 group-hover:scale-125 dark:brightness-50"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3 class="text-shadow text-xl font-semibold text-white">
                Bonnie Green
              </h3>
              <p class="text-shadow font-medium text-white">CEO</p>
            </div>
          </div>
          <div
            class="shadow-neue group relative aspect-[4/3] items-center overflow-hidden rounded-lg bg-gray-50 shadow sm:flex md:aspect-[3/4] dark:border-gray-700 dark:bg-gray-800">
            <div>
              <img
                class="object-cover brightness-75 filter transition duration-300 group-hover:scale-125 dark:brightness-50"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3 class="text-shadow text-xl font-semibold text-white">
                Bonnie Green
              </h3>
              <p class="text-shadow font-medium text-white">CEO</p>
            </div>
          </div>
          <div
            class="shadow-neue group relative aspect-[4/3] items-center overflow-hidden rounded-lg bg-gray-50 shadow sm:flex md:aspect-[3/4] dark:border-gray-700 dark:bg-gray-800">
            <div>
              <img
                class="object-cover brightness-75 filter transition duration-300 group-hover:scale-125 dark:brightness-50"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3 class="text-shadow text-xl font-semibold text-white">
                Bonnie Green
              </h3>
              <p class="text-shadow font-medium text-white">CEO</p>
            </div>
          </div>
          <div
            class="shadow-neue group relative aspect-[4/3] items-center overflow-hidden rounded-lg bg-gray-50 shadow sm:flex md:aspect-[3/4] dark:border-gray-700 dark:bg-gray-800">
            <div>
              <img
                class="object-cover brightness-75 filter transition duration-300 group-hover:scale-125 dark:brightness-50"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3 class="text-shadow text-xl font-semibold text-white">
                Bonnie Green
              </h3>
              <p class="text-shadow font-medium text-white">CEO</p>
            </div>
          </div>
          <div
            class="shadow-neue group relative aspect-[4/3] items-center overflow-hidden rounded-lg bg-gray-50 shadow sm:flex md:aspect-[3/4] dark:border-gray-700 dark:bg-gray-800">
            <div>
              <img
                class="object-cover brightness-75 filter transition duration-300 group-hover:scale-125 dark:brightness-50"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3 class="text-shadow text-xl font-semibold text-white">
                Bonnie Green
              </h3>
              <p class="text-shadow font-medium text-white">CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export default class HomePage {
  constructor() {}
}
