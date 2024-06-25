import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent implements OnDestroy {
  showFiller = false;

  public drawerMode: MatDrawerMode = 'push';
  public mdcBackdrop = false;

  public readonly breakpoint$ = this.breakpointObserver.observe([
    '( max-width: 768px )',
  ]);
  private readonly clean: Subscription;

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.clean = this.breakpoint$.subscribe((val) => {
      if (val.matches) {
        this.drawerMode = 'over';
        this.mdcBackdrop = true;
      } else {
        this.drawerMode = 'push';
        this.mdcBackdrop = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.clean.unsubscribe();
  }
}