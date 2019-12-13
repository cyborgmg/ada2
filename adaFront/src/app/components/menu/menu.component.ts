import { UserService } from './../../services/user.service';
import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    shared: SharedService = SharedService.getInstance();

    private items: Array<MenuItem> = new Array<MenuItem>();

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.shared.showTemplate.subscribe((show: boolean) => {
            if (show) {
                this.populateItems();
            }
          }
        );
    }

    populateItems() {

        this.items = new Array<MenuItem>();

        if ( this.userService.containsProfile(this.shared.user.perfils, 'ROLE_ADMIN') === true ) {
            this.items.push({
                styleClass: 'usermenu',
                label: 'User',
                icon: 'pi pi-pw pi-users',
                items: [
                    {id: 'useritem', label: 'Usuário', routerLink: ['/user'], icon: 'pi pi-fw pi-circle-off'}
                ]
            });
        }
        // tslint:disable-next-line:max-line-length
        if (this.userService.containsProfile(this.shared.user.perfils, 'ROLE_ADMIN') === true || this.userService.containsProfile(this.shared.user.perfils, 'ROLE_CUSTUMER') === true || this.userService.containsProfile(this.shared.user.perfils, 'ROLE_TECHNICIAN') === true ) {
            this.items.push({
                styleClass: 'carmenu',
                label: 'Cadastro',
                icon: 'pi pi-fw pi-folder-open',
                items: [
                    {id: 'cadcaritem', label: 'Car', routerLink: ['/car'], icon: 'pi pi-fw pi-circle-off'}
                ]
            });
        }

    }

}
