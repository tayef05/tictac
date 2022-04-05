import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  items: Observable<any[]> | undefined;
  image: Observable<any> | undefined;
  constructor(
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.items = this.db.list('courses/').valueChanges();
    let ref = this.storage.ref('/damy.png/').getDownloadURL();
    this.image = ref;
    console.log(this.image);
  }
  ngOnDestroy(): void {}
}
