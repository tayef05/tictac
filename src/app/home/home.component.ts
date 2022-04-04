import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: Observable<any[]> | undefined;
  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.items = this.db.list('items').valueChanges();
  }
}
