import { Component, OnInit } from '@angular/core';

import { LoginService } from 'app/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';

@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  account: Account | null = null;

  constructor(private accountService: AccountService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.accountService.identity().subscribe(account => (this.account = account));
    // this.login()
  }

  login(): void {
    this.loginService.login();
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
}
