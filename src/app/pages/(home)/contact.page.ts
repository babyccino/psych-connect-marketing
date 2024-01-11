import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule, NgOptimizedImage],
  template: `
    <section class="relative bg-white dark:bg-gray-900 pt-16">
      <div class="absolute top-0 h-[550px] w-full filter brightness-50">
        <img
          class="object-cover"
          ngSrc="/computerUser.jpeg"
          alt="lady working on computer"
          fill
          priority />
      </div>
      <div class="relative z-10 mt-6 mx-4">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p
          class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-300 sm:text-xl max-w-screen-sm mx-auto text-shadow">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <div
          class="py-8 px-4 mx-auto max-w-screen-sm shadow-neue dark:bg-gray-800 rounded-xl mt-28">
          <form action="#" class="space-y-8">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Your email</label
              >
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required />
            </div>
            <div>
              <label
                for="subject"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Subject</label
              >
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required />
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >Your message</label
              >
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a comment..."></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Send message
            </button>
          </form>
        </div>
      </div>
      <div class="sm:grid grid-cols-3 mt-28 max-w-6xl mx-auto mb-28 gap-2">
        <div class="flex flex-col items-center">
          <span
            class="flex justify-center items-center dark:bg-gray-800 h-12 w-12 rounded-sm">
            <mat-icon class="dark:text-gray-400">email</mat-icon>
          </span>
          <p class="dark:text-white text-xl font-bold mt-4">Email us:</p>
          <p class="dark:text-gray-400 text-center mt-2">
            Email us for general queries, including marketing and partnership
            opportunities.
          </p>
          <a href="#" class="mt-4 text-blue-500 hover:underline"
            >hello&#64;flowbite.com</a
          >
        </div>
        <div class="flex flex-col items-center">
          <span
            class="flex justify-center items-center dark:bg-gray-800 h-12 w-12 rounded-sm">
            <mat-icon class="dark:text-gray-400">phone</mat-icon>
          </span>
          <p class="dark:text-white text-xl font-bold mt-4">Email us:</p>
          <p class="dark:text-gray-400 text-center mt-2">
            Email us for general queries, including marketing and partnership
            opportunities.
          </p>
          <a href="#" class="mt-4 text-blue-500 hover:underline"
            >hello&#64;flowbite.com</a
          >
        </div>
        <div class="flex flex-col items-center">
          <span
            class="flex justify-center items-center dark:bg-gray-800 h-12 w-12 rounded-sm">
            <mat-icon class="dark:text-gray-400">email</mat-icon>
          </span>
          <p class="dark:text-white text-xl font-bold mt-4">Email us:</p>
          <p class="dark:text-gray-400 text-center mt-2">
            Email us for general queries, including marketing and partnership
            opportunities.
          </p>
          <a href="#" class="mt-4 text-blue-500 hover:underline"
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
