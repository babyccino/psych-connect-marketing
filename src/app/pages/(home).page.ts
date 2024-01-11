import { CommonModule } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';

import FooterComponent from '../components/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    RouterModule,
    CommonModule,
    FooterComponent,
  ],
  template: `
    <nav
      class="fixed start-0 top-0 z-20 w-full bg-white bg-white/70 backdrop-blur-lg dark:bg-gray-900/70">
      <div
        class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a
          [routerLink]="['/']"
          class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo" />
          <span
            class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Flowbite
          </span>
        </a>
        <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="shadow-neue rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <mat-icon class="h-5 w-5" icon=""> menu</mat-icon>
          </button>
        </div>
        <div
          class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky">
          <ul
            class="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse  dark:border-gray-700 dark:bg-gray-800 md:dark:bg-transparent">
            <li>
              <a
                [routerLink]="['/']"
                class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                [attr.aria-current]="route() === '/' ? 'page' : undefined"
                [ngClass]="{
                  'md:text-blue-700 md:dark:text-blue-500': route() === '/'
                }">
                Home
              </a>
            </li>
            <li>
              <a
                [routerLink]="['/about']"
                [ngClass]="{
                  'md:text-blue-700 md:dark:text-blue-500': route() === '/about'
                }"
                [attr.aria-current]="route() === '/about' ? 'page' : undefined"
                class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a
                [routerLink]="['/services']"
                [ngClass]="{
                  'md:text-blue-700 md:dark:text-blue-500':
                    route() === '/services'
                }"
                [attr.aria-current]="
                  route() === '/services' ? 'page' : undefined
                "
                class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a
                [routerLink]="['/team']"
                [ngClass]="{
                  'md:text-blue-700 md:dark:text-blue-500': route() === '/team'
                }"
                [attr.aria-current]="route() === '/team' ? 'page' : undefined"
                class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                Team
              </a>
            </li>
            <li>
              <a
                [routerLink]="['/contact']"
                [ngClass]="{
                  'md:text-blue-700 md:dark:text-blue-500':
                    route() === '/contact'
                }"
                [attr.aria-current]="
                  route() === '/contact' ? 'page' : undefined
                "
                class="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="min-h-screen w-full pt-[4.25rem]">
      <router-outlet></router-outlet>
    </div>

    <app-footer></app-footer>
  `,
})
export default class Layout {
  route: WritableSignal<string>;

  constructor(private router: Router) {
    this.route = signal(router.url);
    this.router.events.subscribe(event => {
      if (!(event instanceof NavigationEnd)) return;
      window?.scrollTo(0, 0);
      this.route.set(event.url);
    });
  }
}
