import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 md:mt-10">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Designed for business teams like yours
        </h2>
        <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <div
        class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg shadow-neue xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 class="mb-4 text-2xl font-semibold">Starter</h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Best option for personal use & for your next project.
          </p>
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold">$29</span>
            <span class="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span>Individual configuration</span>
            </li>
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span>No setup, or hidden fees</span>
            </li>
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span
                >Team size: <span class="font-semibold">1 developer</span></span
              >
            </li>
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span
                >Premium support:
                <span class="font-semibold">6 months</span></span
              >
            </li>
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span
                >Free updates: <span class="font-semibold">6 months</span></span
              >
            </li>
          </ul>
          <a
            href="#"
            class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900"
            >Get started</a
          >
        </div>
        <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-800 dark:text-white shadow-neue">
          <h3 class="mb-4 text-2xl font-semibold">Company</h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Relevant for multiple users, extended & premium support.
          </p>
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold">$99</span>
            <span class="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span>Individual configuration</span>
            </li>
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span>No setup, or hidden fees</span>
            </li>
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span
                >Team size:
                <span class="font-semibold">10 developers</span></span
              >
            </li>
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span
                >Premium support:
                <span class="font-semibold">24 months</span></span
              >
            </li>
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span
                >Free updates:
                <span class="font-semibold">24 months</span></span
              >
            </li>
          </ul>
          <a
            href="#"
            class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900"
            >Get started</a
          >
        </div>
        <div
          class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg xl:p-8 dark:bg-gray-800 dark:text-white shadow-neue">
          <h3 class="mb-4 text-2xl font-semibold">Enterprise</h3>
          <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            Best for large scale uses and extended redistribution rights.
          </p>
          <div class="flex justify-center items-baseline my-8">
            <span class="mr-2 text-5xl font-extrabold">$499</span>
            <span class="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          <ul role="list" class="mb-8 space-y-4 text-left">
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span>Individual configuration</span>
            </li>
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span>No setup, or hidden fees</span>
            </li>
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500"
                >done</mat-icon
              >
              <span
                >Team size:
                <span class="font-semibold">100+ developers</span></span
              >
            </li>
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500">
                done
              </mat-icon>
              <span>
                Premium support:
                <span class="font-semibold">36 months</span>
              </span>
            </li>
            <li class="flex items-center space-x-3">
              <mat-icon
                aria-hidden="false"
                aria-label="Example home icon"
                class="text-green-500">
                done
              </mat-icon>
              <span>
                Free updates: <span class="font-semibold">36 months</span>
              </span>
            </li>
          </ul>
          <a
            href="#"
            class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900"
            >Get started</a
          >
        </div>
      </div>
    </div>
  `,
})
export default class PricingComponent {
  constructor() {}
}
