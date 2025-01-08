import { Injectable } from '@angular/core';
import { FakeUsers } from '../models/fake-users';

@Injectable({
  providedIn: 'root'
})
export class FakeUsersService {

  constructor() { }

  // Fonction pour générer un chaine alétoire (pour un prénom et un nom)

   private generateRandomString(length: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    return Array.from({ length }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join('');
  }

  // Fonction pour générer un ID aléatoire

  private generateRandomID(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Fonction qui utilise les générateurs ID / chaine pour créer un faux utilisateur 

  generateFakeUser(): FakeUsers {
    return {
      id: this.generateRandomID(1, 60),
      firstname: this.generateRandomString(8),
      lastname: this.generateRandomString(10)
    };
  }

  // Fonction qui va plusieurs utilisateur selon le nombre qu'on lui indique dans ../components/fake-users/fake-users.ts

  generateFakeUsers(count: number): FakeUsers[] {
    return Array.from({ length: count }, () => this.generateFakeUser());
  }

}