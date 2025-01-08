import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeUsers } from '../../models/fake-users';
import { FakeUsersService } from '../../services/fake-users.service';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-fake-users',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './fake-users.component.html',
  styleUrls: ['./fake-users.component.scss']
})
export class FakeUsersComponent implements OnInit {

  fakeUsers: FakeUsers[] = [];

  constructor(private fakeUsersService: FakeUsersService) {}

  ngOnInit(): void {
    this.fakeUsers = this.fakeUsersService.generateFakeUsers(5); // ici la variable number sert à définir nombre d'utilisateurs à générer.
  }
}
