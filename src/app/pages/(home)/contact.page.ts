import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule, NgOptimizedImage],
  template: `
    <section class="relative bg-white pt-16 dark:bg-gray-900">
      <div class="absolute top-0 h-[550px] w-full brightness-[0.35] filter">
        <img
          class="object-cover"
          ngSrc="/computerUser.jpeg"
          alt="lady working on computer"
          fill
          priority />
      </div>
      <div class="relative z-10 mx-4 mt-6">
        <h2
          class="mb-4 text-center text-4xl font-extrabold tracking-tight text-white">
          Contact Us
        </h2>
        <p
          class="text-shadow mx-auto mb-8 max-w-screen-sm text-center font-light text-gray-300 sm:text-xl lg:mb-16">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <div
          class="dark-only-shadow-neue mx-auto mt-28 max-w-screen-sm rounded-xl bg-gray-100 px-4 py-8 shadow-lg dark:bg-gray-800">
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >Your email</label
              >
              <input
                type="email"
                id="email"
                class="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required />
            </div>
            <div>
              <label
                for="subject"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                >Subject</label
              >
              <input
                type="text"
                id="subject"
                class="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                >Your message</label
              >
              <textarea
                id="message"
                rows="6"
                class="focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="Leave a comment..."></textarea>
            </div>
            <button
              type="submit"
              class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit">
              Send message
            </button>
          </form>
        </div>
      </div>
      <div
        class="mx-auto mb-28 mt-28 max-w-6xl grid-cols-3 gap-2 space-y-12 px-4 sm:grid sm:space-y-0 sm:px-0">
        <div class="flex flex-col items-center">
          <span
            class="flex h-12 w-12 items-center justify-center rounded-sm bg-gray-100 dark:bg-gray-800">
            <mat-icon class="text-gray-700 dark:text-gray-400">email</mat-icon>
          </span>
          <p class="mt-4 text-xl font-bold text-gray-900 dark:text-white">
            Email us:
          </p>
          <p class="mt-2 text-center text-gray-500 dark:text-gray-400">
            Email us for general queries, including marketing and partnership
            opportunities.
          </p>
          <a
            href="#"
            class="text-primary-500 mt-4 font-semibold hover:underline"
            >hello&#64;flowbite.com</a
          >
        </div>
        <div class="flex flex-col items-center">
          <span
            class="flex h-12 w-12 items-center justify-center rounded-sm bg-gray-100 dark:bg-gray-800">
            <mat-icon class="text-gray-700 dark:text-gray-400">phone</mat-icon>
          </span>
          <p class="mt-4 text-xl font-bold text-gray-900 dark:text-white">
            Email us:
          </p>
          <p class="mt-2 text-center text-gray-500 dark:text-gray-400">
            Email us for general queries, including marketing and partnership
            opportunities.
          </p>
          <a
            href="#"
            class="text-primary-500 mt-4 font-semibold hover:underline"
            >hello&#64;flowbite.com</a
          >
        </div>
        <div class="flex flex-col items-center">
          <span
            class="flex h-12 w-12 items-center justify-center rounded-sm bg-gray-100 dark:bg-gray-800">
            <mat-icon class="text-gray-700 dark:text-gray-400">email</mat-icon>
          </span>
          <p class="mt-4 text-xl font-bold text-gray-900 dark:text-white">
            Email us:
          </p>
          <p class="mt-2 text-center text-gray-500 dark:text-gray-400">
            Email us for general queries, including marketing and partnership
            opportunities.
          </p>
          <a
            href="#"
            class="text-primary-500 mt-4 font-semibold hover:underline"
            >hello&#64;flowbite.com</a
          >
        </div>
      </div>
    </section>
  `,
})
export default class ContactPage {
  constructor() {}
}
