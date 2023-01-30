import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { SidebarToggleService } from '../../services/sidebar-toggle/sidebar-toggle.service';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isEnglish = true;

  constructor(public translateService: TranslationService, private router: Router, private sidebarService: SidebarToggleService,
    private authService: AuthService) { }

  ngOnInit(): void { }

  sidebarToggle() {
    this.sidebarService.toggle();
  }

  changeLanguage() {
    this.translateService.changeLanguage();
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
