import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {  HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink , 
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

 
}
