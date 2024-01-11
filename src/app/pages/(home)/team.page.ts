import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [MatIconModule, NgOptimizedImage],
  template: `
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p
            class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-4">
          <div
            class="relative items-center aspect-[4/3] md:aspect-[3/4] bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 group overflow-hidden shadow-neue">
            <div>
              <img
                class="object-cover filter brightness-50 group-hover:scale-125 transition duration-300"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white text-shadow">
                Bonnie Green
              </h3>
              <p class="text-gray-900 dark:text-white text-shadow font-medium">
                CEO
              </p>
            </div>
          </div>
          <div
            class="relative items-center aspect-[4/3] md:aspect-[3/4] bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 group overflow-hidden shadow-neue">
            <div>
              <img
                class="object-cover filter brightness-50 group-hover:scale-125 transition duration-300"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white text-shadow">
                Bonnie Green
              </h3>
              <p class="text-gray-900 dark:text-white text-shadow font-medium">
                CEO
              </p>
            </div>
          </div>
          <div
            class="relative items-center aspect-[4/3] md:aspect-[3/4] bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 group overflow-hidden shadow-neue">
            <div>
              <img
                class="object-cover filter brightness-50 group-hover:scale-125 transition duration-300"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white text-shadow">
                Bonnie Green
              </h3>
              <p class="text-gray-900 dark:text-white text-shadow font-medium">
                CEO
              </p>
            </div>
          </div>
          <div
            class="relative items-center aspect-[4/3] md:aspect-[3/4] bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 group overflow-hidden shadow-neue">
            <div>
              <img
                class="object-cover filter brightness-50 group-hover:scale-125 transition duration-300"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white text-shadow">
                Bonnie Green
              </h3>
              <p class="text-gray-900 dark:text-white text-shadow font-medium">
                CEO
              </p>
            </div>
          </div>
          <div
            class="relative items-center aspect-[4/3] md:aspect-[3/4] bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 group overflow-hidden shadow-neue">
            <div>
              <img
                class="object-cover filter brightness-50 group-hover:scale-125 transition duration-300"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white text-shadow">
                Bonnie Green
              </h3>
              <p class="text-gray-900 dark:text-white text-shadow font-medium">
                CEO
              </p>
            </div>
          </div>
          <div
            class="relative items-center aspect-[4/3] md:aspect-[3/4] bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 group overflow-hidden shadow-neue">
            <div>
              <img
                class="object-cover filter brightness-50 group-hover:scale-125 transition duration-300"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white text-shadow">
                Bonnie Green
              </h3>
              <p class="text-gray-900 dark:text-white text-shadow font-medium">
                CEO
              </p>
            </div>
          </div>
          <div
            class="relative items-center aspect-[4/3] md:aspect-[3/4] bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 group overflow-hidden shadow-neue">
            <div>
              <img
                class="object-cover filter brightness-50 group-hover:scale-125 transition duration-300"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white text-shadow">
                Bonnie Green
              </h3>
              <p class="text-gray-900 dark:text-white text-shadow font-medium">
                CEO
              </p>
            </div>
          </div>
          <div
            class="relative items-center aspect-[4/3] md:aspect-[3/4] bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700 group overflow-hidden shadow-neue">
            <div>
              <img
                class="object-cover filter brightness-50 group-hover:scale-125 transition duration-300"
                ngSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                priority
                fill
                alt="Bonnie Avatar" />
            </div>
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2">
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white text-shadow">
                Bonnie Green
              </h3>
              <p class="text-gray-900 dark:text-white text-shadow font-medium">
                CEO
              </p>
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
