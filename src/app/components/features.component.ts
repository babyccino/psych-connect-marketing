import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="relative shadow-neue bg-gray-100 dark:bg-gray-800/50 mt-10">
      <div
        class="mx-auto py-8 px-4 max-w-screen-xl sm:py-16 lg:px-6 space-y-8 md:grid md:grid-cols-3 md:gap-12 md:space-y-0">
        <div
          class="max-w-screen-md mb-8 lg:mb-16 py-auto md:flex md:flex-col md:justify-center md:h-full">
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for business teams like yours
          </h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div
          class="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 col-span-2">
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full text-blue-500 dark:text-blue-300 bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
              <mat-icon> insert_chart_outlined</mat-icon>
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Marketing
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full text-blue-500 dark:text-blue-300 bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
              <mat-icon> account_balance</mat-icon>
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Legal
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              Protect your organization, devices and stay compliant with our
              structured workflows and custom permissions made for you.
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full text-blue-500 dark:text-blue-300 bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
              <mat-icon> business_center</mat-icon>
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Business Automation
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              Auto-assign tasks, send Slack messages, and much more. Now power
              up with hundreds of new templates to help you get started.
            </p>
          </div>
          <div>
            <div
              class="flex justify-center items-center mb-4 w-10 h-10 rounded-full text-blue-500 dark:text-blue-300 bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
              <mat-icon> attach_money</mat-icon>
            </div>
            <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              Finance
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              Audit-proof software built for critical financial operations like
              month-end close and quarterly budgeting.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
})
export default class FeaturesComponent {
  constructor() {}
}
