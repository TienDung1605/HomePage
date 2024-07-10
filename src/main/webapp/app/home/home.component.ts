import { Component, OnInit } from '@angular/core';

import { LoginService } from 'app/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import {
  faRepeat,
  faBarcode,
  faBoxArchive,
  faBridgeCircleExclamation,
  faFileLines,
  faFolderOpen,
  faGears,
  faMessage,
  faNetworkWired,
  faShare,
  faShield,
  faDatabase,
  faDesktop,
  faEnvelope,
  faUserGroup,
  faCircleExclamation,
  faChartLine,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  account: Account | null = null;
  faBarcode = faBarcode;
  faFolderOpen = faFolderOpen;
  faGears = faGears;
  faNetworkWired = faNetworkWired;
  faShield = faShield;
  faFileLines = faFileLines;
  faBoxArchive = faBoxArchive;
  faBridgeCircleExclamation = faBridgeCircleExclamation;
  faMessage = faMessage;
  faShare = faShare;
  faRepeat = faRepeat;
  faDatabase = faDatabase;
  faDesktop = faDesktop;
  faEnvelope = faEnvelope;
  faUserGroup = faUserGroup;
  faCircleExclamation = faCircleExclamation;
  faChartLine = faChartLine;

  isMenuVisible = false;

  constructor(private accountService: AccountService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.accountService.identity().subscribe(account => (this.account = account));
  }

  login(): void {
    this.loginService.login();
  }

  logout(): void {
    this.loginService.logout();
  }

  linkMRP(): void {
    window.open('http://192.168.68.96:4200/', '_blank');
  }

  linkPlanning(): void {
    window.open('http://192.168.68.91:3000/', '_blank');
  }

  linkDOC(): void {
    window.open('http://192.168.68.88', '_blank');
  }

  linkForum(): void {
    window.open('http://192.168.68.94:8800/', '_blank');
  }

  linkWarning(): void {
    window.open('http://192.168.68.94:9080/', '_blank');
  }

  linkReport(): void {
    window.open('http://192.168.68.86:4301/', '_blank');
  }

  linkWMS(): void {
    window.open('http://172.168.6.3/PanaCIMMC', '_blank');
  }

  linkR2(): void {
    window.open('http://192.168.68.91:3000/', '_blank');
  }

  linkQMS(): void {
    window.open('http://192.168.68.92/', '_blank');
  }

  linkSCADA(): void {
    window.open('http://192.168.68.95:4200/', '_blank');
  }

  linkMaintance(): void {
    window.open('http://192.168.68.77:8123/', '_blank');
  }

  linkDoiTra(): void {
    window.open('http://192.168.68.77:8086/', '_blank');
  }

  linkProfile(): void {
    window.open('http://192.168.68.77:8085/', '_blank');
  }

  linkQuanLyThietBi(): void {
    window.open('http://192.168.68.77:8123/', '_blank');
  }

  showMenu(): void {
    this.isMenuVisible = true;
  }

  hideMenu(): void {
    this.isMenuVisible = false;
  }
}
