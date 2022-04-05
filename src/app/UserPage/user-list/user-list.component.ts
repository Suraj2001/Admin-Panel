import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../services/user-list.service';
import { User } from '../../Models/users.models';
import { AddUserComponent } from '../add-user/add-user.component';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users?: User[];
  data?: String;

  constructor(
    private router: Router,
    private userService: UserListService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.userService.findAll().subscribe((data) => {
      this.users = data;
    });
  }

  openDialog(content: any, user: User) {
    console.log(content);
    const modalRef = this.modalService.open(content, {
      backdrop: 'static',
    });
    this.data = `${user.firstName} ${user.lastName}`;
    modalRef.result.then((result) => {
      if (result === 'yes') {
        this.deleteUser(user);
      }
    });
  }

  deleteUser(user: User) {
    this.userService.delete(user.id).subscribe(
      (data) => this.users?.splice(this.users.indexOf(user), 1),
      (error) => console.error('Error in deleting user')
    );
  }
  editUser(user: User) {
    this.router.navigate(['/display/users/editUser', user.id]);
  }
}
