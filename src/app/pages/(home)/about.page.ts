import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIconModule, CommonModule, NgOptimizedImage],
  template: `
    <section class="pt-4 sm:pt-8">
      <div
        class="mx-auto max-w-screen-xl grid-cols-2 space-y-4 px-4 py-8 text-gray-500 sm:grid sm:text-lg lg:px-6 lg:py-16 dark:text-gray-400">
        <div class="max-w-screen-lg space-y-4">
          <h2
            class="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Powering innovation at
            <span class="font-extrabold">200,000+</span> companies worldwide
          </h2>
          <p class="mb-4 font-light">
            Empower Developers, IT Ops, and business teams to collaborate at
            high velocity. Respond to changes and deliver great customer and
            employee service experiences fast.
          </p>
          <a
            href="#"
            class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
            Learn more
            <svg
              class="ml-1 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
        <div>
          <p class="mb-4 font-light">
            Track work across the enterprise through an open, collaborative
            platform. Link issues across Jira and ingest data from other
            software development tools, so your IT support and operations teams
            have richer contextual information to rapidly respond to requests,
            incidents, and changes.
          </p>
          <p class="font-light">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.Accelerate critical development work,
            eliminate toil, and deploy changes with ease, with a complete audit
            trail for every change.
          </p>
        </div>
      </div>
      <div
        class="shadow-neue relative mt-10 bg-gray-100 pb-10 dark:bg-gray-800/50">
        <div
          class="mx-auto max-w-screen-xl grid-cols-2 items-center gap-14 px-4 py-8 text-gray-500 sm:grid sm:text-lg lg:px-6 lg:py-16 dark:text-gray-400">
          <div
            class="relative hidden h-[35rem] w-full overflow-hidden sm:block">
            <img
              class="object-cover brightness-75"
              ngSrc="policeWorking.webp"
              srcset="
                400w:policeWorking.webp   400w,
                800w:policeWorking.webp   800w,
                1200w:policeWorking.webp 1200w,
                1400w:policeWorking.webp 1400w
              "
              alt="police working"
              fill
              priority />
          </div>
          <div class="max-w-screen-lg ">
            <h2
              class="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Powering innovation at
              <span class="font-extrabold">200,000+</span> companies worldwide
            </h2>
            <p class="mb-4 font-light">
              Empower Developers, IT Ops, and business teams to collaborate at
              high velocity. Respond to changes and deliver great customer and
              employee service experiences fast.
            </p>
            <hr
              class="my-6 border-gray-200 sm:mx-8 lg:my-8 dark:border-gray-700" />
            <ul class="space-y-3">
              <li class="flex flex-row items-center gap-2">
                <div
                  class="h-6 w-6 rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-300">
                  <mat-icon
                    class="-translate-y-[1px] translate-x-[3px] text-lg">
                    done</mat-icon
                  >
                </div>
                <p>Continuous integration and deployment</p>
              </li>
              <li class="flex flex-row items-center gap-2">
                <div
                  class="h-6 w-6 rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-300">
                  <mat-icon
                    class="-translate-y-[1px] translate-x-[3px] text-lg">
                    done</mat-icon
                  >
                </div>
                <p>Continuous integration and deployment</p>
              </li>
              <li class="flex flex-row items-center gap-2">
                <div
                  class="h-6 w-6 rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-300">
                  <mat-icon
                    class="-translate-y-[1px] translate-x-[3px] text-lg">
                    done</mat-icon
                  >
                </div>
                <p>Continuous integration and deployment</p>
              </li>
              <li class="flex flex-row items-center gap-2">
                <div
                  class="h-6 w-6 rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-300">
                  <mat-icon
                    class="-translate-y-[1px] translate-x-[3px] text-lg">
                    done</mat-icon
                  >
                </div>
                <p>Continuous integration and deployment</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="mx-auto max-w-screen-xl grid-cols-2 items-center gap-14 px-4 py-8 text-gray-500 sm:grid sm:text-lg lg:px-6 lg:py-16 dark:text-gray-400">
          <div class="max-w-screen-lg ">
            <h2
              class="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Powering innovation at
              <span class="font-extrabold">200,000+</span> companies worldwide
            </h2>
            <p class="mb-4 font-light">
              Empower Developers, IT Ops, and business teams to collaborate at
              high velocity. Respond to changes and deliver great customer and
              employee service experiences fast.
            </p>
            <hr
              class="my-6 border-gray-200 sm:mx-8 lg:my-8 dark:border-gray-700" />
            <ul class="space-y-3">
              <li class="flex flex-row items-center gap-2">
                <div
                  class="h-6 w-6 rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-300">
                  <mat-icon
                    class="-translate-y-[1px] translate-x-[3px] text-lg">
                    done</mat-icon
                  >
                </div>
                <p>Continuous integration and deployment</p>
              </li>
              <li class="flex flex-row items-center gap-2">
                <div
                  class="h-6 w-6 rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-300">
                  <mat-icon
                    class="-translate-y-[1px] translate-x-[3px] text-lg">
                    done</mat-icon
                  >
                </div>
                <p>Continuous integration and deployment</p>
              </li>
              <li class="flex flex-row items-center gap-2">
                <div
                  class="h-6 w-6 rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-300">
                  <mat-icon
                    class="-translate-y-[1px] translate-x-[3px] text-lg">
                    done</mat-icon
                  >
                </div>
                <p>Continuous integration and deployment</p>
              </li>
              <li class="flex flex-row items-center gap-2">
                <div
                  class="h-6 w-6 rounded-full bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-300">
                  <mat-icon
                    class="-translate-y-[1px] translate-x-[3px] text-lg">
                    done</mat-icon
                  >
                </div>
                <p>Continuous integration and deployment</p>
              </li>
            </ul>
          </div>
          <div
            class="relative hidden h-[35rem] w-full overflow-hidden sm:block">
            <img
              class="object-cover brightness-75"
              ngSrc="policeWorking.webp"
              srcset="
                400w:policeWorking.webp   400w,
                800w:policeWorking.webp   800w,
                1200w:policeWorking.webp 1200w,
                1400w:policeWorking.webp 1400w
              "
              alt="police working"
              fill
              priority />
          </div>
        </div>
      </div>
    </section>
  `,
})
export default class AboutPage {
  constructor() {}
}
