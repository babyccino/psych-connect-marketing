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
      class="bg-white bg-white/70 dark:bg-gray-900/70 fixed w-full z-20 top-0 start-0 backdrop-blur-lg">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          [routerLink]="['/']"
          class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo" />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
            </span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-neue">
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <mat-icon class="w-5 h-5" icon=> menu</mat-icon>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky">
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a
                [routerLink]="['/']"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                [attr.aria-current]="route() === '/' ? 'page' : undefined"
                [ngClass]="{'md:text-blue-700 md:dark:text-blue-500' : route() === '/'}">
                Home
                </a>
            </li>
            <li>
              <a
                [routerLink]="['/about']"
                [ngClass]="{'md:text-blue-700 md:dark:text-blue-500' : route() === '/about'}"
                [attr.aria-current]="route() === '/about' ? 'page' : undefined"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                About
              </a>
            </li>
            <li>
              <a
                [routerLink]="['/services']"
                [ngClass]="{'md:text-blue-700 md:dark:text-blue-500' : route() === '/services'}"
                [attr.aria-current]="route() === '/services' ? 'page' : undefined"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Services
                </a>
            </li>
            <li>
              <a
                [routerLink]="['/team']"
                [ngClass]="{'md:text-blue-700 md:dark:text-blue-500' : route() === '/team'}"
                [attr.aria-current]="route() === '/team' ? 'page' : undefined"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Team
                </a>
            </li>
            <li>
              <a
                [routerLink]="['/contact']"
                [ngClass]="{'md:text-blue-700 md:dark:text-blue-500' : route() === '/contact'}"
                [attr.aria-current]="route() === '/contact' ? 'page' : undefined"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Contact
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="w-full min-h-screen pt-[4.25rem]">
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
