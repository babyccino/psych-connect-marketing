import { Component } from '@angular/core';

import FeaturesComponent from '../../components/features.component';
import HeroComponent from '../../components/hero.component';
import PricingComponent from '../../components/pricing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, PricingComponent],
  template: `
    <section>
      <app-hero></app-hero>
      <app-features></app-features>
      <app-pricing></app-pricing>
    </section>
  `,
})
export default class HomePage {
  constructor() {}
}
