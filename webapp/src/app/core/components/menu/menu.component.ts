import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild(MatMenuTrigger)
  trigger!: MatMenuTrigger;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onToggleMenu() {
    this.trigger.openMenu();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToContent() {
    this.router.navigate(['/content']);
  }

}
