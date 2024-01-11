import { isPlatformServer } from '@angular/common';
import {
  Component,
  Inject,
  Injectable,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Injectable()
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (!isPlatformServer(this.platformId)) initFlowbite();
  }
}
